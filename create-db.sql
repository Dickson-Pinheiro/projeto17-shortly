create database shortly;

create table users(
    id serial primary key,
    name text not null,
    email text not null,
    password text not null
);

create table urls(
    id serial primary key,
    url text not null,
    "shortUrl" text not null,
    "visitCount" integer default 0,
);