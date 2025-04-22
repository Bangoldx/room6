package com.room6.student_tutor.models.dto;

import com.room6.student_tutor.models.Forum;
import com.room6.student_tutor.models.User;

public class CommentDTO {
    private int commentId;
    private String body;
    private Forum forum;
    private User user;

    public CommentDTO(User user, Forum forum, String body, int commentId) {
        this.user = user;
        this.forum = forum;
        this.body = body;
        this.commentId = commentId;
    }

    public CommentDTO(){};

    public int getCommentId() {
        return commentId;
    }

    public void setCommentID(int commentId) {
        this.commentId = commentId;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Forum getForum() {
        return forum;
    }

    public void setForum(Forum forum) {
        this.forum = forum;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
