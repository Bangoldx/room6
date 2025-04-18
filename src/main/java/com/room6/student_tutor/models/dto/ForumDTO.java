package com.room6.student_tutor.models.dto;

import com.room6.student_tutor.models.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ForumDTO {

    private int forumId;

    @NotBlank
    @Size(min = 5, max = 30, message = "Title must be between 5 and 30 characters")
    private String title;

    @NotBlank
    @Size(min = 30, max = 500, message = "Post must be between 30 and 500 characters")
    private String body;

    @NotBlank
    private String commentBody;

    private User user;

    public ForumDTO(int forumId,String title, String body) {
        this.forumId = forumId;
        this.title = title;
        this.body = body;
//        this.user = user;
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

    public int getForumId() {
        return forumId;
    }

    public void setForumId(int forumId) {
        this.forumId = forumId;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
}
