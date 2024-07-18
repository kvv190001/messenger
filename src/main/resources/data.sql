-- Insert users
INSERT INTO "user" (googleid, username, avatarurl, accesstoken) VALUES
(123456, 'user1', 'http://example.com/avatar1.png', 'token1'),
(123457, 'user2', 'http://example.com/avatar2.png', 'token2'),
(123458, 'user3', 'http://example.com/avatar3.png', 'token3');

-- Insert chats
INSERT INTO chat (name, img_url) VALUES
('Chat 1', 'http://example.com/chat1.png'),
('Chat 2', 'http://example.com/chat2.png');

-- Insert chats_users
INSERT INTO chat_user (chat_id, user_id) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 3);

-- Insert messages
INSERT INTO message (chat_id, user_id, message, img_url, created_at) VALUES
(1, 1, 'Hello from user1 in chat1', 'http://example.com/message1.png', '2024-07-18 10:00:00'),
(1, 2, 'Hello from user2 in chat1', 'http://example.com/message2.png', '2024-07-18 10:05:00'),
(2, 2, 'Hello from user2 in chat2', 'http://example.com/message3.png', '2024-07-18 11:00:00'),
(2, 3, 'Hello from user3 in chat2', 'http://example.com/message4.png', '2024-07-18 11:10:00');
