let jsn = {
  "employees": [
    {
      "id": 1,
      "name": "John Doe",
      "position": "Software Developer",
      "department": "Engineering",
      "salary": 75000
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "position": "UI/UX Designer",
      "department": "Design",
      "salary": 60000
    },
    {
      "id": 3,
      "name": "david Smith",
      "position": "UX Designer",
      "department": "Design",
      "salary": 70000
    },
    {
      "id": 4,
      "name": "mike",
      "position": "back-end",
      "department": "database",
      "salary": 62000
    }
    // Add more employee entries as needed
  ]
}

//function for calculate total salary of all employees
let calculateTotalSalary = (salary) => {
  let ts = 0
  let arr = jsn.employees.map(ele => (
    ts += ele.salary
  ))
  let btn = document.querySelector("#btn")
  let totalsalary = document.querySelector(".salary")
  btn.addEventListener("click", () => {
    totalsalary.innerHTML = ts
  })

}
calculateTotalSalary(jsn)



//function to get information of employees by there ids
let info = ""
let getEmployeeById = (id) => {
  let detail = jsn.employees[id - 1]
  let details = document.querySelector(".details")
  info += `<div>${detail.id}</div>
 <div>${detail.name}</div>  
 <div>${detail.position}</div> 
 <div>${detail.department}</div> 
 <div>${detail.salary}</div> `
  details.innerHTML = info


}
let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
  let empid = prompt("enter user id=")
  getEmployeeById(empid)
})




//funtion to count of employee working in department 

let getDepartmentEmployeeCount = () => {
  let depart = jsn.employees.map((ele) => {
    return ele.department
  })

  let arrofdepart = []
  for (let i = 0; i < depart.length-1; i++) {
    let count = 1
    if (depart[i] !=depart[i + 1]) {

     arrofdepart.push(count)
      
    }
    
    else {
          count++
          arrofdepart.push(count)
         }
  }
  let list = document.querySelector(".list")
  let btn3 = document.querySelector("#btn3")
  let newdepart = [...new Set(depart)];
  let listdpart = ""
  btn3.addEventListener("click", () => {
    for (let i in newdepart) {
      listdpart += `<li>${newdepart[i]} ${arrofdepart[i]}</li>`
    }
    list.innerHTML = listdpart
  })

}
getDepartmentEmployeeCount()




//funtion to increament in salary
let incrementSalary = (id, increament) => {
  let deatils = jsn.employees[id - 1]
  let increamentsalary = deatils.salary + (deatils.salary * increament) / 100
  jsn.employees[id - 1].salary = increamentsalary
}
let btn4 = document.querySelector("#btn4")
btn4.addEventListener("click", () => {
  let chooseid = prompt("employee id= ")
  let increaments = prompt("increase salary= ")

  incrementSalary(chooseid, increaments)

})





//function to add new employee 
let addNewEmployee = (id, name, position, department, salary) => {
  let employeeadd = {
    id: id,
    name: name,
    position: position,
    department: department,
    salary: salary
  }
  jsn.employees.push(employeeadd)
}
let btn5 = document.querySelector("#btn5")
btn5.addEventListener("click", () => {
  let id = prompt("emp id=")
  let name = prompt("emp name=")
  let position = prompt("emp position")
  let department = prompt("emp department")
  let salary = prompt("emp salary")
  alert("employee add successfully ")
  addNewEmployee(id, name, position, department, salary)
})
