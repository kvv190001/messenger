package dev.praliven.messenger.config;

import jakarta.validation.constraints.NotEmpty;

public record Chat(
        Integer id,
        @NotEmpty
        String name,
        @NotEmpty
        String img_url
) {
}
