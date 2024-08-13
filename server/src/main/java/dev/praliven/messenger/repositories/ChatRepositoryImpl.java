package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.Chat;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ChatRepositoryImpl implements CustomChatRepository {
    private final JdbcClient jdbcClient;

    public ChatRepositoryImpl(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    @Override
    public List<Chat> findChatsByUser(Integer id) {
        return jdbcClient.sql("SELECT chat.id, chat.name, chat.img_url FROM chat JOIN chat_user ON chat.id = chat_user.chat_id WHERE chat_user.user_id = :id")
                .param("id", id)
                .query(Chat.class)
                .list();
    }
}