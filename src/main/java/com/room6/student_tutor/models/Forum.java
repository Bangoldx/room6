package com.room6.student_tutor.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Forum {

    @TableGenerator(name = "yourTableGenerator", allocationSize = 1, initialValue = 1)
    @Id
    @GeneratedValue(strategy=GenerationType.TABLE, generator="yourTableGenerator")
    private Integer id;

    @NotBlank
    @Size(min = 5, max = 50, message = "Title must be between 5 and 50 characters")
    private String title;

    @NotBlank
    @Size(min = 5, max = 650, message = "Post must be between 5 and 650 characters")
    private String body;

    @OneToMany
    @JoinColumn(name = "forum_id")
    private final List<Comment> comments = new ArrayList<>();

    @ManyToOne
    private User user;

    public Forum(String body, String title, User user) {
        this.body = body;
        this.title = title;
        this.user = user;
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

    public List<Comment> getComment() {
        return comments;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
