package com.room6.student_tutor.models.dto;

import com.room6.student_tutor.models.Forum;
import jakarta.persistence.*;

public class SubjectsDTO {
    @TableGenerator(name = "yourTableGenerator", allocationSize = 1, initialValue = 1)
    @Id
    @GeneratedValue(strategy= GenerationType.TABLE, generator="yourTableGenerator")
    private int id;
    private String name;
    private String description;
    private Forum forum;

    public SubjectsDTO( int id, String name, String description) {
//        this.forum = forum;
        this.id = id;
        this.name = name;
        this.description = description;
    }
    public SubjectsDTO(){};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Forum getForum() {
        return forum;
    }

    public void setForum(Forum forum) {
        this.forum = forum;
    }
}
