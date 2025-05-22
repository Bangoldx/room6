package com.room6.student_tutor.models;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "user")
public class User extends AbstractUser{

    @ManyToMany
    @JoinTable(
            name = "user_subjects",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id")
    )
    private Set<Subjects> subjects = new HashSet<>();

    @OneToMany
    @JoinColumn(name = "user_id")
    private final List<Forum> posts = new ArrayList<>();

    public User(String firstName, String lastName, String email, String username, String pwHash, String role, Set<Subjects> subjects){
        super(firstName, lastName, email, username, pwHash, role);
        this.subjects= subjects;
    }

    public User(String username, String password){
        super(username,password);
    }

    public User(){};

    public Set<Subjects> getSubjects() {
        return subjects;
    }

    public void setSubjects(Set<Subjects> subjects) {
        this.subjects = subjects;
    }

    public void joinSubject(Subjects subject) {
        subjects.add(subject);
        subject.getUsers().add(this);
    }

    public void leaveSubject(Subjects subject) {
        subjects.remove(subject);
        subject.getUsers().remove(this);
    }
}
