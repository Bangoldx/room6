package com.room6.student_tutor.data;

import com.room6.student_tutor.models.Tutor;
import com.room6.student_tutor.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Optional<User> findByRole(String role);
    User findByResetToken(String resetToken);
}

