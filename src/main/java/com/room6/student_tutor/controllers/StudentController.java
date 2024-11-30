package com.room6.student_tutor.controllers;

import com.room6.student_tutor.AuthenticationFilter;
import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.models.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/student")
public class StudentController {

    @Autowired
    AuthenticationFilter authenticationFilter;
    @Autowired
    AuthenticationController authenticationController;
    @Autowired
    public UserRepository userRepository;

    @GetMapping("home")
    public String displayUserHome(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        User theUser = authenticationController.getUserFromSession(session);

        model.addAttribute("user", theUser);

        return "student/home";
    }

    @GetMapping("test")
    public String choices(HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        User theUser = authenticationController.getUserFromSession(session);
        model.addAttribute("user", theUser);
        return "student/test";
    }

}