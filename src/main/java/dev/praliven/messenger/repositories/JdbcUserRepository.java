package dev.praliven.messenger.repositories;

import dev.praliven.messenger.config.User;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JdbcUserRepository {

    private final JdbcClient jdbcClient;

    public JdbcUserRepository(JdbcClient jdbcClient){
        this.jdbcClient = jdbcClient;
    }

    public List<User> findAll(){
        return jdbcClient.sql("SELECT * FROM users")
            .query(User.class)
            .list();
    }



}
