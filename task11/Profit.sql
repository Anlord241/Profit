DROP DATABASE IF EXISTS profit;
CREATE DATABASE profit;
USE profit;
CREATE TABLE users (
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    is_creator BOOL NOT NULL
);
INSERT INTO users (username, is_creator) VALUE("Андрей", TRUE);
INSERT INTO users (username, is_creator) VALUE("Дима", TRUE);
INSERT INTO users (username, is_creator) VALUE("Никита", FALSE);
INSERT INTO users (username, is_creator) VALUE("Саша", TRUE);
INSERT INTO users (username, is_creator) VALUE("Петя", FALSE);
INSERT INTO users (username, is_creator) VALUE("Женя", FALSE);
INSERT INTO users (username, is_creator) VALUE("5 элемент", TRUE);
INSERT INTO users (username, is_creator) VALUE("Евроопт", TRUE);
INSERT INTO users (username, is_creator) VALUE("Электросила", TRUE);
INSERT INTO users (username, is_creator) VALUE("Вася", TRUE);

CREATE TABLE Ads (ID INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 creator_id INT (20) NOT NULL,
 title VARCHAR(30) NOT NULL,
 description VARCHAR(200) NOT NULL,
 link VARCHAR(200) NOT NULL,
 discount INT NOT NULL CHECK(discount > 0 AND discount < 100),
 photo_link VARCHAR(200),
 created_at DATETIME NOT NULL,
 valid_until DATETIME NOT NULL, 
 FOREIGN KEY(creator_id)REFERENCES users(id) ON DELETE CASCADE);
 
 INSERT INTO ads(creator_id, title, description, link, discount, created_at, valid_until)
 VALUE(1,"Продам гараж", "Продаю отличный гараж", "www.1.com", 10, "2021-05-02", "2022-01-10");
 
  INSERT INTO ads(creator_id, title, description, link, discount, created_at, valid_until)
 VALUE(1,"Продам фрукты",
 "Продаю отличные фрукты - длинное описание для 7.sql - 111111111111111111111111111111111111111111111111111111111111111111111111111111",
 "www.2.com", 20, "2021-05-01 12:00:00", "2022-01-10");
 
  INSERT INTO ads(creator_id, title, description, link, discount, created_at, valid_until)
 VALUE(2,"Продам гробы", "Продаю отличные гробы", "www.3.com", 30, "2021-03-14", "2022-01-10");
 
  INSERT INTO ads(creator_id, title, description, link, discount, created_at, valid_until)
 VALUE(1,"Продам столы", "Продаю отличные столы", "www.4.com", 40, "2021-05-10", "2022-01-10");
 
  INSERT INTO ads(creator_id, title, description, link, discount, created_at, valid_until)
 VALUE(7,"Продам обои", "Продаю отличные обои", "www.5.com", 50, "2020-06-10", "2022-01-10");
 
  insert into ads(creator_id, title, description, link, discount, created_at, valid_until)
 value(7,"Продам сахар", "Продаю отличный сахар", "www.6.com", 60, "2020-05-10", "2022-01-10");
 
  INSERT INTO ads(creator_id, title, description, link, discount, created_at, valid_until)
 VALUE(9, "Продам ноутбук", "Продаю отличный ноутбук", "www.7.com", 70, "2021-05-2", "2022-01-10");
 
  INSERT INTO ads(creator_id, title, description, link, discount, created_at, valid_until)
 VALUE(10, "Продам телефон", "Продаю отличный телефон", "www.8.com", 80, "2020-07-10", "2022-01-10");
 
  INSERT INTO ads(creator_id, title, description, link, discount, created_at, valid_until)
 VALUE(1,"Продам часы", "Продаю отличные часы", "www.9.com", 90, "2021-05-10", "2022-01-10");
 
  INSERT INTO ads(creator_id, title, description, link, discount, created_at, valid_until)
 VALUE(2,"Продам телевизор", "Продаю отличный телевизор", "www.10.com", 95, "2020-11-10", "2022-01-10");
 
 CREATE TABLE reviews (id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 user_id INT (20) NOT NULL,
 ad_id INT (20) NOT NULL,
 review_text VARCHAR(200),
 rating INT NOT NULL CHECK(rating >= 1 AND rating <= 5 ),
 created_at DATETIME NOT NULL,
 FOREIGN KEY (ad_id) REFERENCES ads(id) ON DELETE CASCADE, 
 FOREIGN KEY(user_id)REFERENCES users(id) ON DELETE CASCADE);
 
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (1, 2, "Hello", 3, "2021-05-9");
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (2, 2, "Hello", 4, "2021-05-8");
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (3, 4, "Hello", 4, "2021-05-7");
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (4, 3, "Hello", 4, "2021-05-9");
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (5, 2, "Hello", 4, "2021-05-9");
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (1, 3, "Hello", 4, "2021-05-9");
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (2, 3,"Hello", 4, "2021-05-9");
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (3, 5,"Hello", 3, "2021-05-8");
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (4, 2, "Hello", 5, "2021-05-7");
 INSERT INTO reviews (user_id, ad_id, review_text, rating, created_at) VALUE (5, 3, "Hello", 2, "2021-05-9");
 
CREATE TABLE hashtags (
    ad_id INT(20) NOT NULL PRIMARY KEY,
    hashtag VARCHAR(20),
    FOREIGN KEY (ad_id)
        REFERENCES ads (id) ON DELETE CASCADE
);
INSERT INTO hashtags(ad_id, hashtag) value (1, "Недвижимость");
INSERT INTO hashtags(ad_id, hashtag) value (2, "Еда");
INSERT INTO hashtags(ad_id, hashtag) value (3, "Ритуальные услуги");
INSERT INTO hashtags(ad_id, hashtag) value (4, "Мебель");
INSERT INTO hashtags(ad_id, hashtag) value (5, "Товары для дома");
INSERT INTO hashtags(ad_id, hashtag) value (6, "Еда");
INSERT INTO hashtags(ad_id, hashtag) value (7, "Техника");
INSERT INTO hashtags(ad_id, hashtag) value (8, "Техника");
INSERT INTO hashtags(ad_id, hashtag) value (9, "Техника");
INSERT INTO hashtags(ad_id, hashtag) value (10, "Техника");
