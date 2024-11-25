package com.room6.student_tutor.data;

import com.room6.student_tutor.models.Student;
import com.room6.student_tutor.models.Tutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TutorRepository extends CrudRepository<Tutor,Integer> {
    Tutor findByUsername(String username);
    Tutor findByRole(String role);

}
