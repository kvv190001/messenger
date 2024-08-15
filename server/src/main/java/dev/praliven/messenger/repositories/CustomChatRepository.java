package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.Chat;
import dev.praliven.messenger.config.Message;

import java.util.List;

public interface CustomChatRepository {
    List<Chat> findChatsByUser(Integer id);
    Message findLatestMessage(Integer id);
}
