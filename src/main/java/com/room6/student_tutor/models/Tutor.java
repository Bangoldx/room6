package com.room6.student_tutor.models;

import jakarta.persistence.Entity;

import java.util.List;

@Entity
public class Tutor extends User {

    public Tutor(String firstName, String lastName, String email, String username, String pwHash, String role, List<String> subjects){
      super(firstName, lastName, email, username, pwHash, role, subjects);
    }

    public Tutor(String username, String password){
       super(username,password);
    }

    public Tutor(){};

}
