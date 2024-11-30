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

    private String body;

    public Comment(String body, Forum forum) {
        this.forum = forum;
        this.body = body;
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


}
