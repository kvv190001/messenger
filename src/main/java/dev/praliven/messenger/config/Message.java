package dev.praliven.messenger.config;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record Message(
        Integer id,
        @NotNull
        @Positive
        Integer chat_id,
        @NotNull
        @Positive
        Integer user_id,
        @NotEmpty
        String message,
        @NotEmpty
        String img_url,
        @NotEmpty
        String created_at
) {
}
