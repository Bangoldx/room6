package com.room6.student_tutor.models;

import jakarta.persistence.Entity;

import java.util.List;

@Entity
public class Student extends User {

    public Student(String firstName, String lastName, String email, String username, String pwHash, String role, List<String> subjects) {
        super(firstName, lastName, email, username, pwHash, role, subjects);

    }

    public Student(String username, String passward){
        super(username,passward);
    }
    public Student(){};
}