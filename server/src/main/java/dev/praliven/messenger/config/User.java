package dev.praliven.messenger.config;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.data.annotation.Id;

public record User(
        @Id
        Integer id,
        @NotNull
        @Positive
        Integer googleid,
        @NotEmpty
        String username,
        @NotEmpty
        String avatarurl,
        @NotEmpty
        String accesstoken
) {
}