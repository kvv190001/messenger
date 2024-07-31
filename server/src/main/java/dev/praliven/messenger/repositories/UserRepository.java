package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.User;
import org.springframework.data.repository.ListCrudRepository;

import java.util.Optional;

public interface UserRepository extends ListCrudRepository<User, Integer> {
}
