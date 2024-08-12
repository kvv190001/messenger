package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.Chat;
import dev.praliven.messenger.config.Chats;
import dev.praliven.messenger.config.User;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChatRepository extends ListCrudRepository<Chat, Integer>,CustomChatRepository {
}
