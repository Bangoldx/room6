package com.room6.student_tutor.services;

import com.room6.student_tutor.data.StudentRepository;
import com.room6.student_tutor.data.TutorRepository;
import com.room6.student_tutor.models.Student;
import com.room6.student_tutor.models.Tutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserServices {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TutorRepository tutorRepository;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public void registerTutor(Tutor tutor) {
        tutor.setPwHash(encoder.encode(tutor.getPwHash()));
        tutorRepository.save(tutor);
    }
    public void registerStudent(Student student) {
        student.setPwHash(encoder.encode(student.getPwHash()));
        studentRepository.save(student);
    }
    }
