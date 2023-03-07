const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('');
const db = require("./lib/db");
const utils = require("util");
db.query = utils.promisify(db.query);



function startApp() {
    function mainMenu() {
        inquirer
            .prompt([{
                type: 'list',
                name: 'main',
                message: 'Please choose from the main menu:',
                choices: ["View employee list", "Add new employee", "Update role of employee",
                    "View all roles", "Add new role", "View existing departments", "Add new department", "Finished"]
            }
            ]).then(function (data) {
                switch (data.main) {
                    case "View employee list":
                        return viewAllEmployees();
                        break;
                    case "Add new employee":
                        return addEmployee();
                        break;
                    case "Update role of employee":
                        return updateRole();
                        break;
                    case "View all roles":
                        return viewRoles();
                        break;
                    case "Add new role":
                        return addRoles();
                        break;
                    case "View existing departments":
                        return viewDepartments();
                        break;
                    case "Add new department":
                        return addDepartments();
                        break;
                    default:
                        process.exit();
                };
            });
    };
    async function viewAllEmployees() {
        try {
            const results = await db.query(
                `SELECT employees.id, employees.first_name AS "first name", employees.last_name
                AS "last name", roles.role_title, departments.department AS department, roles.salary,
                concat(manager.first_name, " ", manager.last_name) AS manager
                FROM employees
                LEFT JOIN roles
                ON employees.role_id = roles.roles_id
                LEFT JOIN departments
                ON roles.departments_id = departments.id
                LEFT JOIN employees manager
                ON manager.id = employees.manager_id`);
            console.table(results);
            mainMenu();
        } catch (err) {
            console.log(err);
        }
    };
