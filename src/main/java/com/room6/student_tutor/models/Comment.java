package com.room6.student_tutor.models;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Comment {

    @Id
    @GeneratedValue
    private int Id;

    @ManyToMany(mappedBy="comments")
    private final List<Forum> post = new ArrayList<>();

//    @ManyToOne
//    private User user;

    private String body;

    public Comment(String body){

        this.body = body;
    }

    public Comment(){}


    public List<Forum> getPost() {
        return post;
    }

//    public void setPost(List<Forum> post) {
//        this.post = post;
//    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }


}
