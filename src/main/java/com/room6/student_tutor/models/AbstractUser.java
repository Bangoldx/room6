package com.room6.student_tutor.models;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.Objects;

@MappedSuperclass
public abstract class AbstractUser {
    @Id
    @GeneratedValue
    private int id;

    @NotBlank
    @Size(min = 2, max = 50, message = "First name should be at least 2 characters.")
    private String firstName;

    @NotBlank
    @Size(min = 2, max = 50, message = "Last name should be at least 2 characters.")
    private String lastName;

    @NotBlank
    @Email(message = "Proper email format required.")
    private String email;

    private String role;

    private String username;
    private String pwHash;
    private String subjects;

    public AbstractUser(String firstName, String lastName, String email, String username, String password, String role, String subjects) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.pwHash = password;
        this.role = role;
        this.subjects = subjects;
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

    public String getPwHash() {
        return pwHash;
    }

    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getSubjects() {
        return subjects;
    }

    public void setSubjects(String subjects) {
        this.subjects = subjects;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractUser that = (AbstractUser) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }


}
