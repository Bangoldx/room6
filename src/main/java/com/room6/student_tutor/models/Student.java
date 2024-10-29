package com.room6.student_tutor.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class Student extends AbstractUser {

    @NotBlank
    @Size(min = 2, max = 50,message = "First name should be at least 2 characters.")
    private String firstName;

    @NotBlank
    @Size(min = 2, max =50, message = "Last name should be at least 2 characters.")
    private String lastName;

    @NotBlank
    @Email(message = "Proper email format required.")
    private String email;

    public Student(String firstName, String lastName, String email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName() {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName() {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail() {
        this.email = email;
    }
}
