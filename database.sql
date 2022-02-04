-- CREATE DATABASE pernstack;

--\c pernstack
DROP TABLE todo;
DROP TABLE font;
DROP TABLE keyboardMap;
DROP TABLE historyEntry;
DROP TABLE "user";


CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

CREATE TABLE "user"(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    accountCreated TIMESTAMP NOT NULL,
    password VARCHAR(25) NOT NULL,
    darkMode BOOL
);

CREATE TABLE historyEntry(
    user_id INT,
    queue INT,
    feature VARCHAR(40),
    PRIMARY KEY (user_id, queue),
    FOREIGN KEY (user_id) REFERENCES "user"(user_id)
);

CREATE TABLE keyboardMap(
    user_id INT,
    home CHAR,
    algorithms CHAR,
    computations CHAR,
    conversions CHAR,
    dataStructures CHAR,
    history CHAR,
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES "user"(user_id)
);

CREATE TABLE font(
    user_id INT,
    name VARCHAR (25),
    size INT,
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES "user"(user_id)
);

INSERT INTO "user"(user_id, email, accountCreated, password, darkMode)
VALUES(1, 'testAccount@yahoo.com', '2022-02-04', '123456789',True)

