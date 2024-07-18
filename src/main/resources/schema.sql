DROP TABLE IF EXISTS "user" CASCADE;

CREATE TABLE IF NOT EXISTS "user" (
    id serial PRIMARY KEY,
    googleid int NOT NULL,
    username varchar(100) NOT NULL,
    avatarurl varchar(500) NOT NULL,
    accesstoken varchar(500) NOT NULL
);

DROP TABLE IF EXISTS chat CASCADE;

CREATE TABLE IF NOT EXISTS chat (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    img_url varchar(500) NOT NULL
);

DROP TABLE IF EXISTS chat_user CASCADE;

CREATE TABLE IF NOT EXISTS chat_user (
    chat_id int NOT NULL,
    user_id int NOT NULL,
    FOREIGN KEY (chat_id) REFERENCES chat(id),
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

DROP TABLE IF EXISTS message CASCADE;

CREATE TABLE IF NOT EXISTS message (
    id serial PRIMARY KEY,
    chat_id int NOT NULL,
    user_id int NOT NULL,
    message varchar(500) NOT NULL,
    img_url varchar(500) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY (chat_id) REFERENCES chat(id),
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);