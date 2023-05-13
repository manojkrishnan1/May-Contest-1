/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  console.log('All students with marks over 50 using the `.map` function. ')
  arr.map((element)=>{
    if(element.marks>50)
    console.log(element.name);
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  console.log('All the students who have marks over 50 using the `.forEach` function.')
  arr.forEach((element)=>{
    if(element.marks>50)
    console.log(element.name);
  })
}

function addData() {
  //Write your code here, just console.log
  
  let susan = {id:4,name:"susan",age:"20",marks:45};
  console.log('New student '+susan.name+' is added')
  arr.push(susan);
  arr.forEach((element)=>{
    console.log('ID:'+element.id+' Name:'+element.name+' Age:'+element.age+' Marks:'+element.marks)
  })
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let removeElements = [];  //Empty array to capture the indices of Objects(Students) in arr whose marks are < 50
  arr.forEach((element,index)=>{
    if(element.marks<50){
      removeElements.push(index); //capturing the indices of Object(Students) whose marks < 50
    }
  })
  for(let i in removeElements){
    arr.splice(removeElements[i],1);  //Removing Objects(Students) whose marks < 50 using splice  
  }
  console.log('Students with less than 50 marks were removed ')
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newStudents = [
    { id: 11, name: "Kareem", age: "22", marks: 90 },
    { id: 12, name: "Akbar", age: "26", marks: 95 },
    { id: 13, name: "Ghazi", age: "21", marks: 70 },
  ];

  //concatenating arr and newStudents 
  let result = arr.concat(newStudents);
  result.forEach((element)=>{
    console.log('ID:'+element.id+' Name:'+element.name+' Age:'+element.age+' Marks:'+element.marks)
  })
}
