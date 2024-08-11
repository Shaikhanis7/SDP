package com._tucs210.usecase.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String password;

    @OneToMany(mappedBy = "admin")
    private List<Company> companies;

    public Admin() {
    }
}
