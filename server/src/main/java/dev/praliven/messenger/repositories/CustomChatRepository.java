package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.Chat;

import java.util.List;

public interface CustomChatRepository {
    List<Chat> findChatsByUser(Integer id);
}
