package com.room6.student_tutor.services;

import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.models.User;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class PasswordResetServices {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public void sendResetToken(String email) throws MessagingException {
        Optional<User> optUser = userRepository.findByEmail(email);
        if (optUser.isEmpty()) {
            System.out.println("email not found.");
            return;
        }

        User user = optUser.get();
        String token = generateToken();
        user.setResetToken(token);
        user.setTokenExpirationDate(LocalDateTime.now().plusHours(1));
        userRepository.save(user);

        sendPasswordResetEmail(user, token);
    }

    private String generateToken() {
        return UUID.randomUUID().toString();
    }

    private void sendPasswordResetEmail(User user, String token) throws MessagingException {
        String resetLink = "localhost:5173/resetpassword?token=" + token;
        String htmlContent = "<html><body>"
                +"<a href='localhost:5173'>" +
                "<img src='cid:logoImage' alt='Room 6 Logo' style='border-radius: 30%; width: 200px;'/>" +
                "</a>"
                + "<p>Follow the link to reset your password: <a href='http://" + resetLink + "'>Reset Password</a></p>"
                + "</body></html>";

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        try {
            helper.setTo(user.getEmail());
            helper.setSubject("Password Reset");
            helper.setText(htmlContent, true);
            helper.addInline("logoImage", new ClassPathResource("static/images/room6.png"));
            javaMailSender.send(message);
        } catch (MessagingException e) {
            System.out.println(e);
        }
    }

    public void resetPassword(String token, String newPassword) {
        User user = userRepository.findByResetToken(token);
        if (user == null || user.getTokenExpirationDate().isBefore(LocalDateTime.now())) {
            System.out.println("Invalid or expired token.");
            return;
        }

        user.setPwHash(encoder.encode(newPassword));
        user.setResetToken(null);
        user.setTokenExpirationDate(null);
        userRepository.save(user);
    }
}