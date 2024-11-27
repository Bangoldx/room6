package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.StudentRepository;
import com.room6.student_tutor.data.TutorRepository;
import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.models.Student;
import com.room6.student_tutor.models.Tutor;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.RegisterFormDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.room6.student_tutor.services.UserServices;

import java.util.Optional;

@Controller
@RequestMapping("signup")
public class NewUserController {

    @Autowired
    public TutorRepository tutorRepository;

    @Autowired
    public StudentRepository studentRepository;
    @Autowired
    private UserServices userServices;
    @Autowired
    UserRepository userRepository;

    @GetMapping
    public String newUserRegistration(Model model) {
        model.addAttribute(new RegisterFormDTO());
        model.addAttribute(new Student());
        model.addAttribute(new Tutor());
        return "signup";
    }

    @PostMapping
    public String processNewTutorRegistration(@ModelAttribute @Valid RegisterFormDTO registerFormDTO, Errors errors,
                                              HttpServletRequest request, Model model, @RequestParam String role) {

        if (errors.hasErrors()) {
            model.addAttribute("title", "Signup");
            return "signup";
        }
        User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());

        if (existingUser != null) {
            errors.rejectValue("username", "username.alreadyexists", "A user with that username already exists");
            model.addAttribute("title", "Signup");
            return "Signup";
        }

        String password = registerFormDTO.getPassword();
        String verifyPassword = registerFormDTO.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
            model.addAttribute("title", "Signup");
            return "signup";
        }

        if (role.equals("tutor")) {
            User newTutorUser = new User(registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(),
                    registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getRole(), registerFormDTO.getSubjects());
            userRepository.save(newTutorUser);
            setUserInSession(request.getSession(), newTutorUser);
            model.addAttribute("name", newTutorUser);
            return "tutor/home";
        } else {
            User newStudentUser = new User(registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(),
                    registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getRole(), registerFormDTO.getSubjects());
            userRepository.save(newStudentUser);
            setUserInSession(request.getSession(), newStudentUser);
            model.addAttribute("name", newStudentUser);
            return "student/home";
        }
    }

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }


}
