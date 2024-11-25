package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;

@Controller
public class HomeController {

    @Autowired
    public UserRepository userRepository;

    @GetMapping("home/{role}")
    public String displayViewJob(Model model, @PathVariable String role) {

        Iterable<User> users;
            users = userRepository.findAll();
        model.addAttribute("users", users);

        return "search";
    }
}