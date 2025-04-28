-- create database ecomerce;
use ecomerce;

select * from productos limit 100;

-- el nombre de las tablas va en plural
DROP TABLE IF EXISTS marcas;
DROP TABLE IF EXISTS categorias;
create table marcas(
	id int auto_increment primary key not null unique,
	marca varchar(55) unique
    );
create table categorias(
id int auto_increment primary key not null unique,
categoria varchar(255) unique
);
select * from marcas limit 100;
select * from categorias limit 100;

select distinct marca from productos;
-- meter estas categorias dentro de la tabla marcas
insert into marcas(marca) values
('Oscorp'),
('Acme'),
('Soylent'),
('Wonka'),
('Wayne'),
('Stark'),
('Initech'),
('Globex'),
('Umbrella'),
('Hooli');
-- select todo de marcas
select * from marcas;
-- todo lo q es modificacion de estructura es con alter
Alter table productos add column marca_id int;

-- ahora siu pongo p me refiero a la tabla productos
-- si pongo m me refiero a la tabla marcas
update productos p -- el update conlleva un set, indica q harem una add a la tabla productosd
join marcas m ON p.marca = m.marca
-- compara los nombres de la marca en cada tabla
-- Esto busca emparejar cada producto con su marca correspondiente en la tabla marcas
set p.marca_id = m.id;
-- con set Actualizo la columna marca_id 
-- del producto con el id de la marca emparejada.


alter table productos drop column marca;
-- borre la columna marca de ña tabla productos

alter table productos
add constraint fk_marca
foreign key (marca_id) references marcas(id);
-- para crear dentro de productos la asociacion entre productos y la tabla

-- en la tabla categorias en la colujmna categoria
insert into categorias (categoria) 
select distinct categoria from productos;

select * from categorias;
Alter table productos add column categoria_id int;

update productos p -- el update conlleva un set, indica q harem una add a la tabla productosd
join categorias c ON p.categoria = c.categoria
-- compara los nombres de la marca en cada tabla
-- Esto busca emparejar cada producto con su marca correspondiente en la tabla marcas
set p.categoria_id = c.id;

alter table productos drop column categoria;

alter table productos
add constraint fk_categoria
foreign key (categoria_id) references categorias(id);







