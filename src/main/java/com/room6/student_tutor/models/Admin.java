package com.room6.student_tutor.models;

import jakarta.persistence.Entity;

import java.util.List;

@Entity
public class Admin extends AbstractUser{
    public Admin(String firstName, String lastName, String email, String username, String password, String role, List<String> subjects){
        super(firstName, lastName, email, username, password, role, subjects);
    }
}