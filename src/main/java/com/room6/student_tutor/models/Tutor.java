package com.room6.student_tutor.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Tutor extends User {

//    @OneToMany(mappedBy = "role")
//    private final List<User> users = new ArrayList<>();


    public Tutor(String firstName, String lastName, String email, String username, String pwHash, String role, String subjects) {
        super(firstName, lastName, email, username, pwHash, role, subjects);
    }

    public Tutor() {
    }

    ;
}
