package dev.praliven.messenger.config;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.data.annotation.Id;

public record Message(
        @Id
        Integer id,
        @NotNull
        @Positive
        Integer chat_id,
        @NotNull
        @Positive
        Integer user_id,
        String message,
        String img_url
) {
}
