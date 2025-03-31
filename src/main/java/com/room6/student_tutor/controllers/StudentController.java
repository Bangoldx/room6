//package com.room6.student_tutor.controllers;
//
//import com.room6.student_tutor.AuthenticationFilter;
//import com.room6.student_tutor.data.CommentRepository;
//import com.room6.student_tutor.data.ForumRepository;
//import com.room6.student_tutor.data.UserRepository;
//import com.room6.student_tutor.models.Comment;
//import com.room6.student_tutor.models.Forum;
//import com.room6.student_tutor.models.User;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpSession;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//
//import java.util.List;
//
//@Controller
//public class StudentController {
//
//    @Autowired
//    AuthenticationFilter authenticationFilter;
//    @Autowired
//    AuthenticationController authenticationController;
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private ForumRepository forumRepository;
//
//    @Autowired
//    private CommentRepository commentRepository;
//
//    @GetMapping("/student/home")
//    public String displayUserHome(HttpServletRequest request, Model model) {
//        HttpSession session = request.getSession();
//        User theUser = authenticationController.getUserFromSession(session);
//        model.addAttribute("user", theUser);
//
//        List<Forum> post = theUser.getPosts();
//        model.addAttribute("post", post);
//        List<Comment> comments = theUser.getComments();
//        model.addAttribute("comments", comments);
//
//
//        return "student/home";
//    }
//
//
//
//}
