package u_727822tucs210.example.jobsearchingportal.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import u_727822tucs210.example.jobsearchingportal.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
