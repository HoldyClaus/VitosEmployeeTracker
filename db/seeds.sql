USE company_db;

INSERT INTO departments (department)
VALUES ("Business"),
       ("Marketing"),
       ("Human Resources"),
       ("Information Technology"),
       ("Legal"),
       ("Cyber Security");


INSERT INTO roles (role_title, salary, departments_id)
VALUES ('CEO', 435000, 1),
       ('CMO', 240000, 2),
       ('Software Developer', 185000, 4),
       ('Lawyer', 220000, 5),
       ('Accountant', 145000, 1),
       ('Human Resources Manager', 120000, 3),
       ('CIO', 300000, 4),
       ('CSO', 245000, 6);

       
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Holden', 'Claus', 1, NULL),
       ('Gunnar', 'Claus', 2, 1),
       ('Lorenzo', 'Olguin', 3, 1),
       ('Rick', 'Sanchez', 4, 1),
       ('Vito','Gizzio', 5, 1),
       ('Barrak', 'Obama', 6, 1),
       ('Jeff', 'Claus', 7, NULL),
       ('Ronald', 'McDonald', 8, NULL);