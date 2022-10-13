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
	  database: 'inventory_db'
	},
	console.log(`Connected to the inventory_db database.`)
	).promise();

  const mainMenu = async () => {
	const promptValue = await prompt([
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
					name: 'View All Departments',
					value: 'VIEW_DEPARTMENTS'
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
		case 'EXIT':
			process.exit();
			break;
		default:
			process.exit();
	}

	const viewEmployees = () => {
		const [employeeData] = await db.query ("SELECT * FROM employee")
		console.table(employeeData);
		mainMenu();
	};

	const viewDepartment = () => {

	};

  }

  mainMenu();