package com.room6.student_tutor.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends AbstractUser{

    public User(String firstName, String lastName, String email, String username, String pwHash, String role, List<String> subjects){
        super(firstName, lastName, email, username, pwHash, role, subjects);
    }

    public User(String username, String password){
        super(username,password);
    }

    public User(){};


    @OneToMany
    @JoinColumn(name = "user_id")
    private final List<Forum> posts = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "user_id")
    private final List<Comment> comments = new ArrayList<>();

    public List<Forum> getPosts() {
        return posts;
    }

    public List<Comment> getComments() {
        return comments;
    }
}
