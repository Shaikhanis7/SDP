package com._tucs210.usecase.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    public Job() {
    }
}
