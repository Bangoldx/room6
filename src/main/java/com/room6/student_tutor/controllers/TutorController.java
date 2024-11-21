package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Controller
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("tutors")
public class TutorController {

    @Autowired
    public TutorRepository tutorRepository;

    @GetMapping("home")
    public String displayTutorHomepage(Model model){
        return "tutors/home";
    }
}
