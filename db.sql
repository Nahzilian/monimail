drop database monimail;
create database monimail;
use monimail;

create table companies (
    id varchar(36) NOT NULL PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL
);

create table users (
    id varchar(36) NOT NULL PRIMARY KEY,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    role ENUM("admin", "editor") DEFAULT "editor",
    company_id varchar(36) NOT NULL,
    verified ENUM("yes", "no") DEFAULT "no",
    FOREIGN KEY (company_id) REFERENCES companies(id)
);

create table templates (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    type ENUM("media", "template"),
    user_id varchar(36) NOT NULL,
    created_on TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

create table mails (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    subject varchar(255) NOT NULL,
    template_id int NOT NULL,
    FOREIGN KEY (template_id) REFERENCES templates(id),
    created_on TIMESTAMP
);

create table urls (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(2083) NOT NULL,
    created_on TIMESTAMP
);

create table subscribers (
    id varchar(36) NOT NULL PRIMARY KEY ,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    company_id int NOT NULL
);

create table news_organizations (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    description varchar(1000) NOT NULL,
    slug varchar(255) NOT NULL
);

create table subscribed_to (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    subscriber_id varchar(36) NOT NULL,
    organization_id int NOT NULL,
    FOREIGN KEY (subscriber_id) REFERENCES subscribers(id),
    FOREIGN KEY (organization_id) REFERENCES news_organizations(id)
);

create table mail_items (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    company_id varchar(36) NOT NULL,
    organization_id int NOT NULL,
    FOREIGN KEY (organization_id) REFERENCES news_organizations(id),
    FOREIGN KEY (company_id) REFERENCES companies(id)
);

create table tracks (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    action_type ENUM("view", "click") DEFAULT "view",
    mail_id int NOT NULL,
    subscriber_id varchar(36) NOT NULL,
    url_id int NOT NULL,
    created_on TIMESTAMP,
    FOREIGN KEY (mail_id) REFERENCES mails(id),
    FOREIGN KEY (subscriber_id) REFERENCES subscribers(id),
    FOREIGN KEY (url_id) REFERENCES urls(id)
);

create table blacklist (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description varchar(255) NOT NULL,
    subscriber_id varchar(36) NOT NULL,
    FOREIGN KEY (subscriber_id) REFERENCES subscribers(id)
);

-- Username: testusername
-- password: testingpassword
insert into companies (id, name, email) VALUES ("1155df5a-021e-4db9-b070-685169f239d7", "Monimail", "monimail@gmail.com");
insert into users (id,first_name,last_name,email,username,password,role,company_id,verified) VALUES ("291622df-1ed7-41fd-bc41-ce8f0ab87331","John", "Doe", "monimail@gmail.com", "testusername", "$2b$15$tM/N1Xudxw2q0FOyLNgRv.EWwczYzi.CdE1emnPn6QyDpTL5CsLpy", "admin", "1155df5a-021e-4db9-b070-685169f239d7", "no");