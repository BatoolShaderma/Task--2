let students=[];
function createStudent(name,age,mark){
students.push({name,age,mark});
    
}
createStudent("Ahmad", 19 ,80);
createStudent("Noor",20 ,70);
createStudent("Batool",19 ,90);
createStudent("Adam",20 ,40);
createStudent("Zaid",19 ,45);


let successStudents=[];
let failedStudents=[];
for(let student of students){
    if (student.mark >= 50){
    successStudents.push(student);
}

    else
  {  
    failedStudents.push(student);
  }


}
console.log("Success Students:" , successStudents);
console.log("Failed Students:" , failedStudents);
