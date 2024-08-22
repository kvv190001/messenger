package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.Chat;
import dev.praliven.messenger.config.Message;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MessageRepositoryImpl implements CustomMessageRepository {
    private final JdbcClient jdbcClient;

    public MessageRepositoryImpl(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    @Override
    public List <Message> findMessagesByChat(Integer id) {
        return jdbcClient.sql("SELECT * FROM message WHERE message.chat_id = :id")
                .param("id", id)
                .query(Message.class)
                .list();
    }
}
