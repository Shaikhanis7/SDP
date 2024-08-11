// JobRepository.java
package com._tucs210.usecase.repo;

// import com.example.jobportal.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import com._tucs210.usecase.model.Job;

public interface JobRepository extends JpaRepository<Job, Integer> {
}
