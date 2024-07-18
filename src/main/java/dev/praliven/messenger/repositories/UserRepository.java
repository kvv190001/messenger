package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.User;
import org.springframework.data.repository.ListCrudRepository;

public interface UserRepository extends ListCrudRepository<User, Integer> {

}
