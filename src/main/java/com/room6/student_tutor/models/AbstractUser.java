package com.room6.student_tutor.models;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Objects;

@MappedSuperclass
public abstract class AbstractUser {
    @TableGenerator(name = "yourTableGenerator", allocationSize = 1, initialValue = 1)
    @Id
    @GeneratedValue(strategy=GenerationType.TABLE, generator="yourTableGenerator")
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String username;

    @NotNull
    private String pwHash;

    private List<String> subjects;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public AbstractUser(String firstName, String lastName, String email, String username, String pwHash, String role, List<String> subjects) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.pwHash = encoder.encode(pwHash);
        this.role = role;
        this.subjects = subjects;
    }

    public AbstractUser(String username, String password){
        this.username = username;
        this.pwHash = password;
    }

    public AbstractUser(){};

    public int getId() {
        return id;
    }

    public String getFirstName() {return firstName;}

    public void setFirstName(String firstName) {this.firstName = firstName;}

    public String getLastName() {return lastName;}

    public void setLastName(String lastName) {this.lastName = lastName;}

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public String getUsername() {return username;}

    public void setUsername(String username) {this.username = username;}

    public @NotNull String getPwHash() {
        return pwHash;
    }

    public void setPwHash(@NotNull String pwHash) {
        this.pwHash = pwHash;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<String> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<String> subjects) {
        this.subjects = subjects;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractUser that = (AbstractUser) o;
        return id == that.id;
    }

//    @Override
//    public int hashCode() {
//        return Objects.hashCode(id);
//    }


}