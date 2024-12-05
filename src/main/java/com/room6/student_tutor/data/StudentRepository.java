package com.room6.student_tutor.data;

import com.room6.student_tutor.models.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {
    Student findByUsername(String username);
//    Student getRole(String role);
}
