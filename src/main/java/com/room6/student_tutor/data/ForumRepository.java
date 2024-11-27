package com.room6.student_tutor.data;

import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.Student;
import org.springframework.data.repository.CrudRepository;

public interface ForumRepository extends CrudRepository<Forum, Integer> {
}
