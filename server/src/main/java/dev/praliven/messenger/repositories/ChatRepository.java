package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.Chat;
import org.springframework.data.repository.ListCrudRepository;

public interface ChatRepository extends ListCrudRepository<Chat, Integer> {
}
