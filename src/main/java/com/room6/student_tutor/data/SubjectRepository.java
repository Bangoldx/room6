package com.room6.student_tutor.data;

import com.room6.student_tutor.models.Comment;
import com.room6.student_tutor.models.Subjects;
import org.springframework.data.repository.CrudRepository;

public interface SubjectRepository extends CrudRepository<Subjects, Integer> {
}
