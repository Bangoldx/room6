package com.room6.student_tutor.controllers;

import com.room6.student_tutor.data.CommentRepository;
import com.room6.student_tutor.data.ForumRepository;
import com.room6.student_tutor.data.UserRepository;
import com.room6.student_tutor.mappers.ForumsDTOMapper;
import com.room6.student_tutor.models.Comment;
import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.ForumDTO;
import com.room6.student_tutor.models.dto.UserDTO;
import com.room6.student_tutor.services.ForumServices;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/forumservices")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class ForumController {

    @Autowired
    ForumRepository forumRepository;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    AuthenticationController authenticationController;
    @Autowired
    ForumServices forumServices;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/forums")
    public List<ForumDTO> viewForums() {
        Iterable<Forum> forum = forumRepository.findAll();
        List<ForumDTO> forumDTOS = new ArrayList<>();

        for(Forum post : forum){
            int id = post.getId();
            User user = post.getUser();
            String title = post.getTitle();
            String body = post.getBody();
            ForumDTO forumDTO = ForumsDTOMapper.toForumDTO(post,id,body,title);
            forumDTOS.add(forumDTO);
        }
        return forumDTOS;
    }

    @GetMapping("/forums/{postId}")
    public ResponseEntity<?> viewPost(@PathVariable int postId) {
         {
            Forum post = forumServices.getPostById(postId).orElse(null);
            if (post == null) {
                return ResponseEntity.status(404).body("post not found");
            }
            ForumDTO forumDTO = new ForumDTO(post.getId(),post.getTitle(), post.getBody(), post.getUser());

            return ResponseEntity.ok(forumDTO);
        }
    }

    @PostMapping("/newpost")
    public ResponseEntity<String> newPost(@RequestBody Forum post) {
        forumRepository.save(post);
        return ResponseEntity.ok("Posted");
    }

};

//    @GetMapping("post")
//    public String postTopic(HttpServletRequest request, Model model) {
//        HttpSession session = request.getSession();
//        User theUser = authenticationController.getUserFromSession(session);
//        model.addAttribute(new Forum());
//        model.addAttribute("user", theUser);
//        return "forum/post";
//    }

//    @PostMapping("forums/{postId}")
//    public String processNewComments(@ModelAttribute @Valid Comment newComment, HttpServletRequest request, Model model, @PathVariable int postId) {
//        HttpSession session = request.getSession();
//        User theUser = authenticationController.getUserFromSession(session);
//        model.addAttribute("user", theUser);
//
//        Optional<Forum> optPost = forumRepository.findById(postId);
//        if (optPost.isPresent()) {
//            Forum post = optPost.get();
//            model.addAttribute("post", post);
//            model.addAttribute(new Comment());
//
//            commentRepository.save(newComment);
//            return "forum/view";
//        } else {
//            return "redirect:../";
//        }
//    }


//}
