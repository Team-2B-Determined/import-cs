-- CREATE DATABASE pernstack;

--\c pernstack
DROP TABLE fonts;
DROP TABLE keyboardMaps;
DROP TABLE historyEntries;
DROP TABLE "users";

/*


CREATE TABLE "users"(
                        user_id SERIAL PRIMARY KEY,
                        email VARCHAR(100) NOT NULL,
                        accountCreated TIMESTAMP NOT NULL,
                        password VARCHAR(25) NOT NULL,
                        darkMode BOOL
);

CREATE TABLE historyEntries(
                               user_id INT,
                               queue INT,
                               feature VARCHAR(40),
                               PRIMARY KEY (user_id, queue),
                               FOREIGN KEY (user_id) REFERENCES "users"(user_id)
);

CREATE TABLE keyboardMaps(
                             user_id INT,
                             home CHAR,
                             algorithms CHAR,
                             computations CHAR,
                             conversions CHAR,
                             dataStructures CHAR,
                             history CHAR,
                             PRIMARY KEY (user_id),
                             FOREIGN KEY (user_id) REFERENCES "users"(user_id)
);

CREATE TABLE fonts(
                      user_id INT,
                      name VARCHAR (25),
                      size INT,
                      PRIMARY KEY (user_id),
                      FOREIGN KEY (user_id) REFERENCES "users"(user_id)
);

INSERT INTO "users"(user_id, email, accountCreated, password, darkMode)
VALUES(1, 'testAccount@yahoo.com', '2022-02-04', '123456789',True)*/

