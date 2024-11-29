package com.room6.student_tutor.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends AbstractUser{

//    @OneToMany
//    @JoinColumn(name = "user_id")
//    private List<Forum> posts = new ArrayList<>();
//
//    @OneToMany
//    @JoinColumn(name = "user_id")
//    private List<Comment> comments = new ArrayList<>();

    public User(String firstName, String lastName, String email, String username, String pwHash, String role, String subjects){
        super(firstName, lastName, email, username, pwHash, role, subjects);
    }

    public User(String username, String password){
        super(username,password);
    }

    public User(){};

//    public List<Forum> getPosts() {
//        return posts;
//    }
//
//    public List<Comment> getComments() {
//        return comments;
//    }
}
