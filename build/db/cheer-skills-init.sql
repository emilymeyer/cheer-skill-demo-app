CREATE DATABASE IF NOT EXISTS cheer_skills;

USE cheer_skills;

CREATE TABLE IF NOT EXISTS athlete (
    id         int not null,
    first_name varchar(20),
    last_name  varchar(20),
    PRIMARY KEY   (id)
);

CREATE TABLE IF NOT EXISTS skill (
    id            int not null,
    skill_name    varchar(50),
    skill_level   int,
    skill_type_id int,
    PRIMARY KEY   (id)
);

CREATE TABLE IF NOT EXISTS position (
	id            int not null,
	position_name varchar(50),
	PRIMARY KEY   (id)
);

CREATE TABLE IF NOT EXISTS skill_type (
	id              int not null,
	skill_type_name varchar(20),
	PRIMARY KEY     (id)
);

CREATE TABLE IF NOT EXISTS athlete_skill (
	id int not null,
	athlete_id int not null,
	skill_id   int not null,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS athlete_position (
	id int not null,
	athlete_id int not null,
	position_id int not null,
	PRIMARY KEY (id)
);

INSERT INTO skill_type (id, skill_type_name) VALUES (1, 'tumbling');
INSERT INTO skill_type (id, skill_type_name) VALUES (2, 'flyer');
INSERT INTO skill_type (id, skill_type_name) VALUES (3, 'base');

INSERT INTO position (id, position_name) VALUES (1, 'tumbler');
INSERT INTO position (id, position_name) VALUES (2, 'flyer');
INSERT INTO position (id, position_name) VALUES (3, 'main base');
INSERT INTO position (id, position_name) VALUES (4, 'secondary base');
INSERT INTO position (id, position_name) VALUES (5, 'co-ed base');
INSERT INTO position (id, position_name) VALUES (6, 'backspot');
INSERT INTO position (id, position_name) VALUES (7, 'spotter');

INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (1, 'forward roll', 1, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (2, 'backward roll', 1, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (3, 'cartwheel', 1, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (4, 'round off', 1, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (5, 'front walkover', 1,1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (6, 'back walkover', 1,1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (7, 'back handspring', 2, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (8, 'punch front', 3, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (9, 'front handspring', 3, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (10, 'back tuck', 4, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (11, 'layout', 4, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (12, 'full twisting layout', 5, 1);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (13, 'double full twisting layout', 6, 1);

INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (14, 'heel stretch', 1, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (15, 'scale', 1, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (16, 'lib', 1, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (17, 'bow and arrow', 1, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (18, 'scropion', 1, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (19, 'extension heel stretch', 3, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (20, 'extension scale', 3, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (21, 'extension lib', 3, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (22, 'extension bow and arrow', 3, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (23, 'extension scropion', 3, 2);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (24, 'body position', 1, 3);

INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (25, 'extension body position', 3, 3);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (26, 'full-around to extension', 4, 3);
INSERT INTO skill (id, skill_name, skill_level, skill_type_id) VALUES (27, 'double up to extension', 5, 3);