package com.room6.student_tutor.controllers;
import com.room6.student_tutor.data.StudentRepository;
import com.room6.student_tutor.data.TutorRepository;
import com.room6.student_tutor.models.Student;
import com.room6.student_tutor.models.Tutor;
import com.room6.student_tutor.services.UserServices;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/userservices")
public class NewUserController {

    @Autowired
    public TutorRepository tutorRepository;

    @Autowired
    public StudentRepository studentRepository;
    @Autowired
    private UserServices userServices;




    @PostMapping("signup")
    public ResponseEntity<String> processNewUserRegistration(@RequestBody Tutor newTutor,  @RequestParam String role) {

        if (role.equals("tutor")) {
            userServices.registerTutor(newTutor);
        }
        return ResponseEntity.ok("Success");
    }
    @PostMapping("signup")
    public ResponseEntity<String> processNewUserRegistration(@RequestBody Student newStudent,  @RequestParam String role) {

        if(role.equals("student")){
            userServices.registerStudent(newStudent);
        }
        return ResponseEntity.ok("Success");
    }

}
