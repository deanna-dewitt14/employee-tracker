use employees;

INSERT INTO department
	(department_name)
VALUES
	('Sales'),
	('IT'),
	('Legal'),
	('Engineering'),
	('Finance');

INSERT INTO role
	(title, salary, department_id)
VALUES
	('Sales Lead', 75000, 1),
	('IT Support', 1000000, 2),
	('Lawyer', 30000, 3),
	('Engineer', 150000, 4),
	('Accountant', 51000, 5);

INSERT INTO employee
	(first_name, last_name, role_id, manager_id)
VALUES
	('Harry', 'Potter', 1, NULL),
	('Ron', 'Wesley', 2, NULL),
	('Draco', 'Malfoy', 1, 1),
	('Hermione', 'Grainger', 3, 3),
	('Albus', 'Dumbledore', 4, NULL),
	('Severus', 'Snape', 5, NULL);
	
