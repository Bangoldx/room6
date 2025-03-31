package com.room6.student_tutor.mappers;

import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.ForumDTO;

public class ForumsDTOMapper {

    public static ForumDTO toForumDTO(Forum forum, int id,String body, String title ){
        ForumDTO forumDTO = new ForumDTO();
        forumDTO.setForumId(forum.getId());
        forumDTO.setBody(forum.getBody());
        forumDTO.setTitle(forum.getTitle());

        return forumDTO;
    };
}
