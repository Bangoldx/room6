package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.StudentRepository;
import com.room6.student_tutor.data.TutorRepository;
import com.room6.student_tutor.models.Student;
import com.room6.student_tutor.models.Tutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.room6.student_tutor.services.UserServices;

@Controller
@RequestMapping("signup")
public class NewUserController {

    @Autowired
    public TutorRepository tutorRepository;

    @Autowired
    public StudentRepository studentRepository;
    @Autowired
    private UserServices userServices;
//    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

//    @GetMapping
//    public String displaySignUpPage() {
//        return "signup";
//    }

    @GetMapping
    public String newUserRegistration(Model model) {
        model.addAttribute(new Student());
        model.addAttribute(new Tutor());
        return  "signup";
    }

    @PostMapping
    public String processNewTutorRegistration(@ModelAttribute Tutor newTutor,@ModelAttribute Student newStudent, Model model, @RequestParam String role) {

        if (role.equals("tutor")) {
            model.addAttribute(new Tutor());
           userServices.registerTutor(newTutor);
            return "redirect:/tutors/home";
        }
        model.addAttribute(new Student());
        userServices.registerStudent(newStudent);
        return "redirect:/students/home";
    }



}
