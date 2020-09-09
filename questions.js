const questions = [
     {
          //0 - init(questions)
          type:"list",
          name : "action",
          message: "Menu",
          choices: ['View departments','View employees','View roles','Exit']
     },
     {
          //1 - departments(questions)
          type:"list",
          name : "action",
          message: "Departments",
          choices: ['View all departments','Select department','Back','Exit']
     },
     [
          //2 - selectContent(departments)
          {
               type:"list",
               name:"selectItem",
               message:"Select by:",
               choices:['id', 'department_name']
          },
          {
               type:"input",
               name: "action",
               message: "Enter department information to select: "
          }
     ],
     {
          //3 - departmentOptions()
          type:"list",
          name:"action",
          message:"Department Options",
          choices: ['Add department','Edit department', 'Delete department', 'View all', 'Back', 'Exit']
     },
     [
          //4 - addContent(department)
          {
               type:"input",
               name:"department",
               message:"Enter department name: "
          },
          {
               type:"input",
               name:"id",
               message:"Enter department id: "
          }
     ],
     [
          //5 - editContent(department)
          {
               type:"list",
               name:"whereToChange",
               message:"Identify department by: ",
               choices: ["id","department_name"]
          },
          {
               type:"input",
               name:"previous",
               message:"Identify: "
          },
          {
               type:"list",
               name:"changeWhat",
               message:"Edit: ",
               choices: ["id","department_name"]
          },
          {
               type:"input",
               name:"changes",
               message:"Enter new department information"
          }
     ],
     [
          //6 deleteContent(department);
          {
               type:"list",
               name:"whereToChange",
               message:"Identify department deletion based on:",
               choices:['id','department_name']
          },
          {
               type:"input",
               name:"whatToDelete",
               message:"Enter the corresponding department information: "
          }
     ],
     {
          //7 - employees(questions)
          type:"list",
          name : "action",
          message: "Employees",
          choices: ['View all employees','Select employee','Back','Exit']
     },
     {
          //8 - employeeOptions(questions)
          type:"list",
          name:"action",
          message:"Employee options",
          choices:['Add employee file', 'Edit employee file', 'Delete employee file','View all','Select employee','Back','Exit']
     },
     [
          //9 - addContent(employee)
          {
               type:"input",
               name:"employee_id",
               message:"Enter employee id: ",
          },
          {
               type:"input",
               name:"first_name",
               message:"Enter employee's given name: ",
          },
          {
               type:"input",
               name:"last_name",
               message:"Enter employee's surname: "
          },
          {
               type:"input",
               name:"employee_role_id",
               message:"Enter employee's role id: "
          },
          {
               type:"input",
               name:"manager_id",
               message:"Enter employee's manager's id: "
          }
     ],
     
     [
          //10 - editContent(employee)
          {
               type:"list",
               name:"whereToChange",
               message:"Identify employee by: ",
               choices: ["id","first_name","last_name","employee_role_id","manager_id"]
          },
          {
               type:"input",
               name:"previous",
               message:"Identify: "
          },
          {
               type:"list",
               name:"changeWhat",
               message:"Edit: ",
               choices: ["id","first_name","last_name","employee_role_id"]
          },
          {
               type:"input",
               name:"changes",
               message:"Enter new employee information: "
          }
     ],
     [
          //11 - deleteContent(employee)
          {
               type:"list",
               name:"whereToChange",
               message:"Identify employee deletion based on:",
               choices: ["employee_id","first_name","last_name"]
          },
          {
               type:"input",
               name:"whatToDelete",
               message:"Enter corresponding employee information: "
          }
     ],
     [
          //12 - addContent(employee_role)
          {
               type:"input",
               name:"role_id",
               message:"Enter role id: ",
          },
          {
               type:"input",
               name:"title",
               message:"Enter title: ",
          },
          {
               type:"input",
               name:"salary",
               message:"Enter salary: "
          },
          {
               type:"input",
               name:"dep_id",
               message:"Enter the id of the department that this role will work in: "
          }
     ],
     [
          //13 - editContent(employee_role)
          {
               type:"list",
               name:"whereToChange",
               message:"Identify role to edit by: ",
               choices: ["id","title"]
          },
          {
               type:"input",
               name:"previous",
               message:"Identify: "
          },
          {
               type:"list",
               name:"changeWhat",
               message:"Edit: ",
               choices: ["id","title","salary","dep_id"]
          },
          {
               type:"input",
               name:"changes",
               message:"Enter new role information: "
          }
     ],
     [
          //14 - deleteContent(employee_role)
          {
               type:"list",
               name:"whereToChange",
               message:"Identify role deletion based on:",
               choices: ["id","title"]
          },
          {
               type:"input",
               name:"whatToDelete",
               message:"Enter corresponding role information: "
          }
     ],
     [
          //15 - selectContent(employee_role))
          {
               type:"list",
               name:"selectItem",
               message:"Select by:",
               choices:['role_id', 'title', 'salary', 'dep_id']
          },
          {
               type:"input",
               name: "action",
               message: "Enter role information: "
          }
     ],
     [
          //16 - selectContent(employee)
          {
               type:"list",
               name:"selectItem",
               message:"Select by:",
               choices:['employee_id', 'first_name', 'last_name', 'employee_role_id', 'manager_id']
          },
          {
               type:"input",
               name: "action",
               message: "Enter empoyee information to select: "
          }
     ],
     {
          //16 - employees(questions)
          type:"list",
          name : "action",
          message: "Employees",
          choices: ['View all employees','Select employee','Back','Exit']
     },
     {
          //17 - roles(questions)
          type:"list",
          name: "action",
          message: "Employee roles",
          choices: ['View all roles','Select role','Back','Exit']
     },
     {
          //18 - roleOptions(questions)
          type:"list",
          name:"action",
          message:"Employee options",
          choices:['Add role', 'Edit role', 'Delete role','View all roles','Select employee','Back','Exit']
     }
];

module.exports = questions;