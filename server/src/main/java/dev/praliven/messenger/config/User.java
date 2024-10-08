package dev.praliven.messenger.config;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.sql.Column;


public record User(
        @Id
        Integer id,
        @NotNull
        String googleid,
        @NotEmpty
        String username,
        String email,
        @NotEmpty
        String avatarurl,
        @NotEmpty
        String accesstoken,
        RegistrationSource registrationsource
) {
}
