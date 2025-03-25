package com.room6.student_tutor.services;

import com.room6.student_tutor.data.ForumRepository;
import com.room6.student_tutor.models.Forum;
import org.springframework.beans.factory.annotation.Autowired;
import java.time.format.DateTimeFormatter;
import java.time.LocalDate;
import java.util.List;


public class ForumServices {

    @Autowired
    ForumRepository forumRepository;

    public void newPost(Forum post){

    }

    public Iterable<Forum> getAllPosts(){
        return forumRepository.findAll();
    }
}
