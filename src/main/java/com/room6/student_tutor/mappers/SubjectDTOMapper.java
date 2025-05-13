package com.room6.student_tutor.mappers;

import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.Subjects;
import com.room6.student_tutor.models.dto.CommentDTO;
import com.room6.student_tutor.models.dto.SubjectsDTO;

public class SubjectDTOMapper {
    public static SubjectsDTO toSubjectDTO(Subjects subject, int id, String name){
        SubjectsDTO subjectsDTO = new SubjectsDTO();
//        subjectsDTO.setForum(subject.getForum());
        subjectsDTO.setId(subject.getId());
        subjectsDTO.setName(subject.getName());

        return subjectsDTO;

    }
}
