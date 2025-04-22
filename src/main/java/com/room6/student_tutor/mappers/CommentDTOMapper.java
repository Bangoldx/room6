package com.room6.student_tutor.mappers;

import com.room6.student_tutor.models.Comment;
import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.CommentDTO;

public class CommentDTOMapper {

    public static CommentDTO toCommentDTO(Comment comment, Forum forum, User user, String body, int Id){
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setForum(comment.getForum());
        commentDTO.setUser(comment.getUser());
        commentDTO.setBody(comment.getBody());
        commentDTO.setCommentID(comment.getId());

        return commentDTO;
    }
}
