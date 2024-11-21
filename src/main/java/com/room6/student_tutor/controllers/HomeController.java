package com.room6.student_tutor.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Controller
@CrossOrigin(origins = "http://localhost:5173")

public class HomeController {

    @GetMapping
    public String landing(Model model){
        model.addAttribute("title", "Welcome to Room 6");
        model.addAttribute("welcome", "A Place for Learning");
        return "landing";
    }
}
