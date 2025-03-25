package com.room6.student_tutor.mappers;

import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.ForumDTO;

public class ForumsDTOMapper {

    public static ForumDTO toForumDTO(Forum forum, String body, String title, User user ){
        ForumDTO forumDTO = new ForumDTO();
        forumDTO.setBody(forumDTO.getBody());
        forumDTO.setTitle(forumDTO.getTitle());
        forumDTO.setUser(forumDTO.getUser());

        return forumDTO;
    };
}
