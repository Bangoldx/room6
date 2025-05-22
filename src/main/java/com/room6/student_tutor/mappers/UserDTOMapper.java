package com.room6.student_tutor.mappers;

import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.Subjects;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.ForumDTO;
import com.room6.student_tutor.models.dto.UserDTO;

import java.util.Set;

public class UserDTOMapper {
    public static UserDTO toUserDTO(User user, String username, String role, int id, Set<Subjects> subjects){
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername(user.getUsername());
        userDTO.setRole(user.getRole());
        userDTO.setId(user.getId());

        return userDTO;
    };
}
