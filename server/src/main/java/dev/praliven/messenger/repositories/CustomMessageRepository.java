package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.Message;

import java.util.List;

public interface CustomMessageRepository {
    List<Message> findMessagesByChat(Integer id);
}
