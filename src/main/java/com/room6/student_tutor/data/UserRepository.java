package com.room6.student_tutor.data;

import com.room6.student_tutor.models.Tutor;
import com.room6.student_tutor.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);
}
