// CompanyRepository.java
package com._tucs210.usecase.repo;

// import com.example.jobportal.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import com._tucs210.usecase.model.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {
}
