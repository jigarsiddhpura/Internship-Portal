package dev.jigar.portal.user;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends ListCrudRepository<User, String> {
    Optional<User> findByEmail(String email);
    Optional<User> findBySapId(String sapId);
}
