create database burgers_db;
use burgers_db;

create table burgers (
	item_id integer not null auto_increment,
    product_name varchar(50) not null,
    department_name varchar(50) not null,
    price integer default 0,
    stock_quantity integer default 0,
    primary key(item_id)
);