package com.room6.student_tutor.services;

import com.fasterxml.jackson.databind.annotation.JsonAppend;
import com.room6.student_tutor.data.CommentRepository;
import com.room6.student_tutor.models.Comment;
import com.room6.student_tutor.models.Forum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getCommentsByForumId(Forum forum){
        return commentRepository.findForumId(forum);
    }
}
