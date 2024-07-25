package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.Message;
import org.springframework.data.repository.ListCrudRepository;

public interface MessageRepository extends ListCrudRepository<Message, Integer> {
}
