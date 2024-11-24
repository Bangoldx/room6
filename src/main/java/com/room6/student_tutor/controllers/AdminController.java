package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.StudentRepository;
import com.room6.student_tutor.data.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("admin")
public class AdminController {

    @Autowired
    public TutorRepository tutorRepository;

    @Autowired
    public StudentRepository studentRepository;


    @GetMapping("nuke")
    public String nukeAllUsers(Model model){
        model.addAttribute("title", "*CAUTION* Nuke Everything?");
        model.addAttribute("users", tutorRepository.findAll());
        model.addAttribute("users", studentRepository.findAll());
        return "admin/nuke";
    }

    @PostMapping("nuke")
    public String processDeleteEventsForm(){
        tutorRepository.deleteAll();
        studentRepository.deleteAll();
        return "redirect:/";
    }
}