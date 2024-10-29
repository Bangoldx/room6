package com.room6.student_tutor.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("signup")
public class NewUserController {

    @GetMapping
    public String displaySignUpPage(){
        return "signup";
    }

//    public String newUserRegistration(@RequestParam String role) {
//        if (role.equals("tutor")) {
//            return "/tutors";
//        } else {
//            return "/students";
//        }
//    }

}
