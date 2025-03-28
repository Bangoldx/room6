package com.room6.student_tutor.models.dto;

import com.room6.student_tutor.models.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ForumDTO {

    @NotBlank
    @Size(min = 5, max = 30, message = "Title must be between 5 and 30 characters")
    private String title;

    @NotBlank
    @Size(min = 30, max = 500, message = "Post must be between 30 and 500 characters")
    private String body;

    private User user;

    @NotBlank
    private String commentBody;

    public ForumDTO(String title, String body, User user) {
        this.title = title;
        this.body = body;
        this.user = user;
    }

    public ForumDTO() {
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getCommentBody() {
        return commentBody;
    }

    public void setCommentBody() {
        this.commentBody = commentBody;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle (String title) {
        this.title = title;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
