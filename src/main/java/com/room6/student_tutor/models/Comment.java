package com.room6.student_tutor.models;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Comment {

    @Id
    @GeneratedValue
    private int Id;

    @ManyToOne
    private Forum forum;
    @ManyToOne
    private User user;

    private String body;

    public Comment(String body, Forum forum, User user) {
        this.forum = forum;
        this.body = body;
        this.user = user;
    }

    public Comment() {
    }

    public Forum getForum() {
        return forum;
    }

    public void setForum(Forum forum) {
        this.forum = forum;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
