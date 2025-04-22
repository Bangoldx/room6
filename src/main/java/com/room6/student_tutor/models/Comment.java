package com.room6.student_tutor.models;


import jakarta.persistence.*;

@Entity
public class Comment {

    @TableGenerator(name = "yourTableGenerator", allocationSize = 1, initialValue = 1)
    @Id
    @GeneratedValue(
            strategy=GenerationType.TABLE,
            generator="yourTableGenerator")
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

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }
}
