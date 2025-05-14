package com.room6.student_tutor.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
public class Subjects {
    @TableGenerator(name = "yourTableGenerator", allocationSize = 1, initialValue = 1)
    @Id
    @GeneratedValue(strategy=GenerationType.TABLE, generator="yourTableGenerator")
    private int id;
//    @NotNull
    private String name;
//    @NotNull
    private String description;


//    @ManyToOne
//    private Forum forum;

    public Subjects(String name, int id, String description) {
        this.name = name;
        this.id = id;
        this.description = description;
//        this.forum = forum;
    }

    public Subjects(){};

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

    public @NotNull String getDescription() {
        return description;
    }

    public void setDescription(@NotNull String description) {
        this.description = description;
    }
//    public Forum getForum() {
//        return forum;
//    }
//
//    public void setForum(Forum forum) {
//        this.forum = forum;
//    }
}
