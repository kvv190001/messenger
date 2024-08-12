package dev.praliven.messenger.controllers;

import java.util.List;
import java.util.Optional;

import dev.praliven.messenger.config.Chat;
import dev.praliven.messenger.repositories.ChatRepository;
import dev.praliven.messenger.repositories.ChatRepositoryImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chats")
public class ChatController {
    private final ChatRepository chatRepository;

    ChatController(ChatRepository chatRepository){
        this.chatRepository = chatRepository;
    }

    @GetMapping("")
    List<Chat> findAll(){
        return chatRepository.findAll();
    }

    @GetMapping("/{id}")
    Chat findById(@PathVariable Integer id){
        Optional<Chat> chat = chatRepository.findById(id);
        if(chat.isEmpty()){
            throw new RuntimeException("Chat Not Found");
        }
        return chat.get();
    }

    @GetMapping("/user/{id}")
    List<Chat> findChatsByUser(@PathVariable Integer id){
        return chatRepository.findChatsByUser(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void create(@Valid @RequestBody Chat chat){
        chatRepository.save(chat);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@Valid @RequestBody Chat chat, @PathVariable Integer id){
        chatRepository.save(chat);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id){
        Optional<Chat> chat = chatRepository.findById(id);
        if(chat.isEmpty()){
            throw new RuntimeException("Chat Not Found");
        }
        chatRepository.delete(chat.get());
    }
}
