const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const questions = require("./questions");

const connection = mysql.createConnection({
     host: "localhost",
     port: 3306,
     user: "root",
     password: "Doodle.bomb.com0516@",
     database: "business_organizer"
});

connection.connect(function(err) {
     if (err) throw err;
     init();
});

function init()
{
     inquirer.prompt(questions[0]).then((answer)=>{
          switch (answer.action)
          {
               case "View departments":
                    departments();
                    break;
               case "View employees":
                    employees();
                    break;
               case "View roles":
                    roles();
                    break;
               case "Exit":
                    exitApp();
                    break;
               default:
                    invalidResponse(answer);
                    exitApp();
          }
     });
}

function roles()
{
     inquirer.prompt(questions[17]).then((answer) =>{
          switch (answer.action)
          {
               case `View all roles`:
                    viewAllContent("employee_role");
                    break;
               case `Select role`:
                    selectContent("employee_role");
                    break;
               case `Back`:
                    init();
                    break;
               case "Exit":
                    exitApp();
               default:
                    invalidResponse(answer.action);
          }
     }).catch(err=> {if (err) throw err});
}

function employees()
{
     inquirer.prompt(questions[7]).then((answer) =>{
          switch (answer.action)
          {
               case `View all employees`:
                    viewAllContent("employee");
                    break;
               case `Select employee`:
                    selectContent("employee");
                    break;
               case `Back`:
                    init();
                    break;
               case "Exit":
                    exitApp();
               default:
                    invalidResponse(answer.action);
          }
     }).catch(err=> {if (err) throw err});
}

function departments()
{
     inquirer.prompt(questions[1]).then((answer) =>{
          switch (answer.action)
          {
               case `View all departments`:
                    viewAllContent("departments");
                    break;
               case `Select department`:
                    selectContent("departments");
                    break;
               case `Back`:
                    init();
                    break;
               case "Exit":
                    exitApp();
                    break;
               default:
                    invalidResponse(answer);
          }
     }).catch(err=> {if (err) throw err});
}

function viewAllContent(table)
{
     connection.query(`SELECT * FROM ${table}`, (err, res) => {
          if (err) console.log(err);
          if (res.length)
          {
               console.table(res);
          }
          else
          {
               console.log(`You have not added content to ${table}.`);
          }
          switch(table)
          {
               case "departments":
                    departmentOptions();
                    break;
               case "employee_role":
                    roleOptions();
                    break;
               case "employee":
                    employeeOptions();
                    break;
               default:
                    console.log(`Error in thread identifier switch case at viewAllContent(${table})`);
                    exitApp();
          }
     });
}

function selectContent(table)
{
     let userPrompt;
     switch(table)
     {
          case "departments":
               userPrompt = questions[2];
               break;
          case "employee_role":
               userPrompt = questions[15];
               break;
          case "employee":
               userPrompt = questions[16];
               break;
          default:
               console.log(`Error on thread identifier switch case before the inquirer.prompt at selectContent(${table})`);
     }
     inquirer.prompt(userPrompt).then(answer=>{
          let selectItem = answer.selectItem;
          let action = answer.action;
          if(selectItem == "role_id")
          {
               selectItem = "id";
          }
          if(typeof(action) === "string")
          {
               action = `"${action}"`;
          }
          connection.query(`SELECT * FROM ${table} WHERE ${selectItem} = ${action}`, (err, res) => {
               if (err) console.log(err);
               if(res.length)
               {
                    console.table(res);
               }
               else
               {
                    console.log(`There are not ${answer.select} collumns with the content ${answer.action} in ${table}.`);
               }
               switch(table)
               {
                    case "departments":
                         departmentOptions();
                         break;
                    case "employee":
                         employeeOptions();
                         break;
                    case "employee_role":
                         roleOptions();
                         break;
                    default:
                         console.log(`Error in thread identifier switch case after connection.query at selectContent(${table}).`);
               }
          });
     }).catch(err=>{
          if (err) throw err;
     });
}

function roleOptions()
{
     inquirer.prompt(questions[18]).then(answer =>{
          switch(answer.action)
          {
               case "Add role":
                    addContent("employee_role");
                    break;
               case "Edit role":
                    editContent("employee_role");
                    break;
               case "Delete role":
                    deleteContent("employee_role");
                    break;
               case "View all roles":
                    viewAllContent("employee_role");
                    break;
               case "Select role":
                    selectContent("employee_role");
                    break;
               case "Back":
                    employees();
                    break;
               case "Exit":
                    exitApp();
                    break;
               default:
                    invalidResponse(answer.action);
          }
     }).catch(err => {if (err) throw err});
}

function employeeOptions()
{
     inquirer.prompt(questions[8]).then(answer =>{
          switch(answer.action)
          {
               case "Add employee file":
                    addContent("employee");
                    break;
               case "Edit employee file":
                    editContent("employee");
                    break;
               case "Delete employee file":
                    deleteContent("employee");
                    break;
               case "View all":
                    viewAllContent("employee");
                    break;
               case "Select employee":
                    selectContent("employee");
                    break;
               case "Back":
                    employees();
                    break;
               case "Exit":
                    exitApp();
                    break;
               default:
                    invalidResponse(answer.action);
          }
     }).catch(err => {if (err) throw err});
}

function departmentOptions()
{
     inquirer.prompt(questions[3]).then(answer =>{
          switch(answer.action)
          {
               case "Add department":
                    addContent("departments");
                    break;
               case "Edit department":
                    editContent("departments");
                    break;
               case "Delete department":
                    deleteContent("departments");
                    break;
               case "View all":
                    viewAllContent("departments");
                    break;
               case "Select department":
                    selectContent("departments");
                    break;
               case "Back":
                    departments();
                    break;
               case "Exit":
                    exitApp();
                    break;
               default:
                    invalidResponse(answer.action);
          }
     }).catch(err => {if (err) throw err});
}

function addContent(table)
{
     let userPrompt;
     switch (table)
     {
          case "departments":
               userPrompt = questions[4];
               break;
          case "employee_role":
               userPrompt = questions[12];
               break;
          case "employee":
               userPrompt = questions[9];
               break;
          default:
               console.log(`Error in thread identifier switch case before inquirer.prompt at addContent(${table}).`);
     }
     inquirer.prompt(userPrompt).then(answers=>{
          let query;
          switch(table)
          {
               case "departments":
                    query = `INSERT INTO ${table} (id, department_name) VALUES (${answers.id},"${answers.department}");`;
                    break;
               case "employee_role":
                    query = `INSERT INTO ${table} (id, title, salary, dep_id) VALUES (${answers.role_id},"${answers.title}",${answers.salary},${answers.dep_id});`;
                    break;
               case "employee":
                    query = `INSERT INTO ${table} (employee_id, first_name, last_name, employee_role_id, manager_id) VALUES (${answers.employee_id}, "${answers.first_name}", "${answers.last_name}", ${answers.employee_role_id}, ${answers.manager_id});`
                    break;
               default:
                    console.log(`Error in connection.query thread identifier switch case at addContent(${table}).`);
                    exitApp();
          }
          connection.query(query, (err, res) =>{
               if (err) console.log(err);
               switch (table)
               {
                    case "departments":
                         departmentOptions();
                         break;
                    case "employee_role":
                         roleOptions();
                         break;
                    case "employee":
                         employeeOptions();
                         break;
                    default: console.log(`Error in thread identifier switch case after inquirer.prompt at addContent(${table})`);
                    exitApp();
               }
          });
     }).catch(err=> {
          if (err) throw err
     });
}

function editContent(table)
{
     let userPrompt;
     switch(table)
     {
          case "departments":
               userPrompt = questions[5];
               break;
          case "employee_role":
               userPrompt = questions[13];
               break;
          case "employee":
               userPrompt = questions[10];
               break;
          default:
               console.log(`Error in inquirer.prompt thread identifier switch case at editContent(${table}).`);
               exitApp();
     }
     inquirer.prompt(userPrompt).then((answer)=>{
          let query;
          let changes = answer.changes;
          let previous = answer.previous;
          if(typeof(changes) == "string")
          {
               changes = `"${changes}"`;
          }
          if(typeof(previous) == "string");
          {
               previous = `"${previous}"`;
          }
          query = `UPDATE ${table} SET ${answer.changeWhat} = ${changes} WHERE ${answer.whereToChange} = ${answer.previous};`;
          connection.query(query, (err, res) =>{
               if (err) throw err;
               switch (table)
               {
                    case "departments":
                         departmentOptions();
                         break;
                    case "employee_role":
                         roleOptions();
                         break;
                    case "employee":
                         employeeOptions();
                         break;
                    default:
                         console.log(`Error in thread identifier switch case after inquirer.prompt at editContent(${table})`);
                         exitApp();
               }
          });
     });
}

function deleteContent(table)
{
     let userPrompt;
     switch(table)
     {
          case "departments":
               userPrompt = questions[6];
               break;
          case "employee_role":
               userPrompt = questions[14];
               break;
          case "employee":
               userPrompt = questions[11];
               break;
          default: 
               console.log(`Error in thread identifier switch case before inquirer.prompt at deleteContent().
table = ${table}`);
               exitApp();
     }
     inquirer.prompt(userPrompt).then(answers=>{
          connection.query(`DELETE FROM ${table} WHERE ${answers.whereToChange} = ${answers.whatToDelete}`, (err, res) =>{
               if (err)
               {
                    console.log(`DELETE FROM ${table} WHERE ${answers.whereToChange} = ${answers.whatToDelete}`);
                    throw err;
                    exitApp();
               }
               console.table(res);
               switch(table)
               {
                    case "departments":
                         departmentOptions();
                         break;
                    case "employee_role":
                         roleOptions();
                         break;
                    case "employee":
                         employeeOptions();
                         break;
                    default:
                         console.log(`Error in thread identifier switch case after inquierer.prompt in deleteContent().
table = ${table}`);
                         exitApp();
               }
          });
     }).catch(err=> {
          if (err) throw err
     });
}

function exitApp()
{
     process.exit(0);
}

function invalidResponse(answer)
{
     console.log(`${answer} is not a valid response. Please enter a valid response.
     
     `);
     init();
}