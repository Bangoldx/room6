package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.CommentRepository;
import com.room6.student_tutor.data.ForumRepository;
import com.room6.student_tutor.models.Comment;
import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("forum")
public class ForumController {

    @Autowired
    ForumRepository forumRepository;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    AuthenticationController authenticationController;

    @GetMapping
    public String viewForums(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        User theUser = authenticationController.getUserFromSession(session);
        model.addAttribute("user", theUser);

        Iterable<Forum> posts;
        posts = forumRepository.findAll();
        model.addAttribute("topics", posts);
        return "forum/forum";
    }

    @GetMapping("post")
    public String postTopic(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        User theUser = authenticationController.getUserFromSession(session);
        model.addAttribute(new Forum());
        model.addAttribute("user", theUser);
        return "forum/post";
    }

    @PostMapping("post")
    public String postTopic(@ModelAttribute @Valid Forum newPost, Model model) {
        forumRepository.save(newPost);
        return "redirect:/forum";
    }

    @GetMapping("view/{postId}")
    public String displayViewPost(HttpServletRequest request, Model model, @PathVariable int postId) {

        HttpSession session = request.getSession();
        User theUser = authenticationController.getUserFromSession(session);
        model.addAttribute("user", theUser);

        Optional<Forum> optPost = forumRepository.findById(postId);

        if (optPost.isPresent()) {
            Forum post = optPost.get();
            model.addAttribute("post", post);
//            if(commentRepository.findForumId(post)){}
            model.addAttribute(new Comment());
            return "forum/view";
        } else {
            return "redirect:../";
        }
    }
//    Optional<Employer> optEmployer = employerRepository.findById(employerId);
//        if (optEmployer.isPresent()) {
//        Employer employer = optEmployer.get();
//        model.addAttribute("employer", employer);
//        return "employers/view";
//    } else {
//        return "redirect:../";
//    }
    @PostMapping("view/{postId}")
    public String processNewComments(@ModelAttribute @Valid Comment newComment, HttpServletRequest request, Model model, @PathVariable int postId) {
        HttpSession session = request.getSession();
        User theUser = authenticationController.getUserFromSession(session);
        model.addAttribute("user", theUser);

        Optional<Forum> optPost = forumRepository.findById(postId);
        if (optPost.isPresent()) {
            Forum post = optPost.get();
            model.addAttribute("post", post);
            model.addAttribute(new Comment());

            commentRepository.save(newComment);
            return "forum/view";
        } else {
            return "redirect:../";
        }
    }


}
