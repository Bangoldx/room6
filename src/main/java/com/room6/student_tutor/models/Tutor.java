package com.room6.student_tutor.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class Tutor extends AbstractUser {

    public Tutor(String firstName, String lastName, String email, String username, String pwHash, String role, String subjects) {
        super(firstName, lastName, email, username, pwHash, role, subjects);
    }

    public Tutor() {
    }

    ;
}
