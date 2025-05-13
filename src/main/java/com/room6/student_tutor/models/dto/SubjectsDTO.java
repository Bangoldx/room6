package com.room6.student_tutor.models.dto;

import com.room6.student_tutor.models.Forum;
import jakarta.persistence.*;

public class SubjectsDTO {
    private String name;
    @TableGenerator(name = "yourTableGenerator", allocationSize = 1, initialValue = 1)
    @Id
    @GeneratedValue(strategy= GenerationType.TABLE, generator="yourTableGenerator")
    private int id;
    private Forum forum;

    public SubjectsDTO( int id, String name) {
//        this.forum = forum;
        this.id = id;
        this.name = name;
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

    public Forum getForum() {
        return forum;
    }

    public void setForum(Forum forum) {
        this.forum = forum;
    }
}
