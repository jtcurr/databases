DROP DATABASE chat;

CREATE DATABASE chat;
USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  user_id Integer PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(20) NOT NULL
);

CREATE TABLE rooms (
  room_id Integer PRIMARY KEY AUTO_INCREMENT,
  room_name VARCHAR(20) NOT NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/
  ID Integer PRIMARY KEY AUTO_INCREMENT,
  message_text VARCHAR(255),
  fk_room Integer,
  fk_users Integer
);

ALTER TABLE `messages` ADD FOREIGN KEY (fk_room) REFERENCES `rooms` (`room_id`);
ALTER TABLE `messages` ADD FOREIGN KEY (fk_users) REFERENCES `users` (`user_id`);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.

   mysql -u root < ~/Desktop/hrsf53-databases/server/schema.sql  
  
 */

