package com.room6.student_tutor.mappers;

import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.User;
import com.room6.student_tutor.models.dto.ForumDTO;
import com.room6.student_tutor.models.dto.UserDTO;

public class UserDTOMapper {
    public static UserDTO toUserDTO(User user, String username, String role ){
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername(user.getUsername());
        userDTO.setRole(user.getRole());

        return userDTO;
    };
}
