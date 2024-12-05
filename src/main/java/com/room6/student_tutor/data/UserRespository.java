package com.room6.student_tutor.data;

import com.room6.student_tutor.models.Student;
import com.room6.student_tutor.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRespository extends CrudRepository<User, Integer> {
}
