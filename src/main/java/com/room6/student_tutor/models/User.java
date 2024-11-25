package com.room6.student_tutor.models;

import jakarta.persistence.Entity;

@Entity
public class User extends AbstractUser{
    public User(String firstName, String lastName, String email, String username, String pwHash, String role, String subjects){
        super(firstName, lastName, email, username, pwHash, role, subjects);
    }

    public User(String username, String password){
        super(username,password);
    }

    public User(){};

}
