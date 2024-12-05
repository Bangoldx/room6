package com.room6.student_tutor.services;

import com.room6.student_tutor.data.StudentRepository;
import com.room6.student_tutor.data.TutorRepository;
import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.models.Student;
import com.room6.student_tutor.models.Tutor;
import com.room6.student_tutor.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserServices {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    UserRepository userRepository;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public void registerUser(User user) {
        user.setPwHash(encoder.encode(user.getPwHash()));
        userRepository.save(user);
    }
}