package com.room6.student_tutor.services;

import com.room6.student_tutor.data.StudentRepository;
import com.room6.student_tutor.data.SubjectRepository;
import com.room6.student_tutor.data.TutorRepository;
import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.models.Student;
import com.room6.student_tutor.models.Subjects;
import com.room6.student_tutor.models.Tutor;
import com.room6.student_tutor.models.User;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

@Service
public class UserServices {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SubjectRepository subjectRepository;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public void registerUser(User user) {
        user.setPwHash(encoder.encode(user.getPwHash()));
        userRepository.save(user);
    }

    public Optional<User> loginUser(String username, String password){
        Optional<User> optUser = userRepository.findByUsername(username);

        if(optUser.isPresent()){
            User user = optUser.get();
            if(encoder.matches(password, user.getPwHash())){
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }

    public User getUser(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public boolean userExistsByEmail(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
    public boolean userExistsByUsername(String username) {
        return userRepository.findByUsername(username).isPresent();
    }

    @Transactional
    public void joinSubject(int userId, int subjectId) {
        User user = userRepository.findById(userId).orElseThrow();
        Subjects subject = subjectRepository.findById(subjectId).orElseThrow();
        user.joinSubject(subject);
        userRepository.save(user);
    }

    @Transactional
    public void leaveSubject(int userId, int subjectId) {
        User user = userRepository.findById(userId).orElseThrow();
        Subjects subject = subjectRepository.findById(subjectId).orElseThrow();
        user.joinSubject(subject);
        userRepository.save(user);
    }

}