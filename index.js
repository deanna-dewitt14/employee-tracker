const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table')

const db = mysql.createConnection(
	{
	  host: 'localhost',
	  // MySQL username,
	  user: 'root',
	  // MySQL password
	  password: 'mysqlpass',
	  database: 'employees'
	},
	console.log(`Connected to the inventory_db database.`)
	).promise();

  const mainMenu = async () => {
	const {choice} = await prompt([
		{
			type: 'list',
			name: 'choice',
			message: 'What would you like to do?',
			choices: [
				{
					name: 'View All Employees',
					value: 'VIEW_EMPLOYEES'
				},
				{
					name: 'Add Employee',
					value: 'ADD_EMPLOYEE'
				},
				{
					name: 'Update Employee Role',
					Value: 'UPDATE_EMPLOYEE'
				},
				{
					name: 'View All Departments',
					value: 'VIEW_DEPARTMENTS'
				},
				{
					name: 'View All Roles',
					value: 'VIEW_ROLES'
				},
				{
					name: 'Add a Department',
					value: 'ADD_DEPARTMENT'
				},
				{
					name: 'Add a Role',
					value: 'ADD_ROLE'
				},
				{
					name: 'Exit',
					value: 'EXIT'
				}
			]
		}
	])

	switch (choice) {
		case 'VIEW_EMPLOYEES':
			viewEmployees();
			break;
		case 'VIEW_DEPARTMENTS':
			viewDepartment();
			break;
		case 'VIEW_ROLES':
			viewRoles();
			break;
		case 'ADD_EMPLOYEE':
			addEmployee();
			break;
		case 'UPDATE_EMPLOYEE':
			updateEmployee();
			break;
		case 'ADD_DEPARTMENT':
			addDepartment();
			break;
		case 'ADD_ROLE':
			addRole();
			break;
		case 'EXIT':
			process.exit();
			break;
		default:
			process.exit();
	};

	const viewEmployees = () => {
		const [employeeData] = await db.query ("SELECT * FROM employee")
		console.table(employeeData);
		mainMenu();
	};

  mainMenu();