package dev.praliven.messenger.config;

import jakarta.validation.constraints.NotEmpty;
import org.springframework.data.annotation.Id;

public record Chat(
        @Id
        Integer id,
        @NotEmpty
        String name,
        @NotEmpty
        String img_url
) {
}
