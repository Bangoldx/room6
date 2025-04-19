package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.*;
import com.room6.student_tutor.mappers.ForumsDTOMapper;
import com.room6.student_tutor.mappers.UserDTOMapper;
import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.ForumDTO;
import com.room6.student_tutor.models.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/adminservices")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class AdminController {

    @Autowired
    public TutorRepository tutorRepository;

    @Autowired
    public StudentRepository studentRepository;

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public ForumRepository forumRepository;

    @Autowired
    public CommentRepository commentRepository;


    @GetMapping("/getallusers")
    public List<UserDTO> findAllUsers(){
        Iterable<User> users = userRepository.findAll();
        List<UserDTO> userDTOS = new ArrayList<>();

        for(User user : users){
            String username = user.getUsername();
            String role = user.getRole();
            UserDTO userDTO = UserDTOMapper.toUserDTO(user, username, role);
            userDTOS.add(userDTO);
        }
        return userDTOS;
    }



//    @GetMapping("nuke")
//    public String nukeAllUsers(Model model){
//        model.addAttribute("title", "*CAUTION* Nuke Everything?");
//        model.addAttribute("users", tutorRepository.findAll());
//        model.addAttribute("users", studentRepository.findAll());
//        return "admin/nuke";
//    }
//
//    @PostMapping("nuke")
//    public String processDeleteEventsForm(){
//        tutorRepository.deleteAll();
//        studentRepository.deleteAll();
//        userRepository.deleteAll();
//        return "redirect:/";
//    }
}