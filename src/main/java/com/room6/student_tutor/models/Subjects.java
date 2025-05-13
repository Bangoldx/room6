package com.room6.student_tutor.models;

import jakarta.persistence.*;

@Entity
public class Subjects {
    private String name;
    @TableGenerator(name = "yourTableGenerator", allocationSize = 1, initialValue = 1)
    @Id
    @GeneratedValue(strategy=GenerationType.TABLE, generator="yourTableGenerator")
    private int id;
//    @ManyToOne
//    private Forum forum;

    public Subjects(String name, int id) {
        this.name = name;
        this.id = id;
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

//    public Forum getForum() {
//        return forum;
//    }
//
//    public void setForum(Forum forum) {
//        this.forum = forum;
//    }
}
