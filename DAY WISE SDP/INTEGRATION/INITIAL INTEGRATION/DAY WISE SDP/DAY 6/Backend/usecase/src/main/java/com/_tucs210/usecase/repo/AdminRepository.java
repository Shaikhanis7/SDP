// AdminRepository.java
package com._tucs210.usecase.repo;

// import com.example.jobportal.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import com._tucs210.usecase.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
    Admin findByUsername(String username);
}
