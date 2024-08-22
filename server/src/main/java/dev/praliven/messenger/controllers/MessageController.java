package dev.praliven.messenger.controllers;

import dev.praliven.messenger.config.Message;
import dev.praliven.messenger.repositories.MessageRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    private final MessageRepository messageRepository;

    MessageController(MessageRepository messageRepository){
        this.messageRepository = messageRepository;
    }

    @GetMapping("")
    List<Message> findAll(){
        return messageRepository.findAll();
    }

    @GetMapping("/{id}")
    Message findById(@PathVariable Integer id){
        Optional<Message> message = messageRepository.findById(id);
        if(message.isEmpty()){
            throw new RuntimeException("Message Not Found");
        }
        return message.get();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void create(@Valid @RequestBody Message message){
        messageRepository.save(message);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@Valid @RequestBody Message message, @PathVariable Integer id){
        messageRepository.save(message);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id){
        Optional<Message> message = messageRepository.findById(id);
        if(message.isEmpty()){
            throw new RuntimeException("Message Not Found");
        }
        messageRepository.delete(message.get());
    }

    @GetMapping("/chat/{id}")
    List<Message> findMessagesByChat(@PathVariable Integer id){
        return messageRepository.findMessagesByChat(id);
    }
}
