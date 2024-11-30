package com.room6.student_tutor.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Forum {

    @Id
    @GeneratedValue
    private Integer id;

    @NotBlank
    @Size(min = 5, max = 30, message = "Title must be between 5 and 30 characters")
    private String title;

    @NotBlank
    @Size(min = 30, max = 500, message = "Post must be between 30 and 500 characters")
    private String body;

//    @OneToMany
//    @JoinColumn(name = "forum_id")
//    private final List<Comment> comment = new ArrayList<>();

    public Forum(String body, String title) {
        this.body = body;
        this.title = title;
    }

    public Forum() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

//    public List<Comment> getComment() {
//        return comment;
//    }

}
