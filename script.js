let students = [
    {name: "Shakhboz",age: 18,gender: "m"},
    {name: "Alexandr",age: 32,gender: "m"},
    {name: "Daler",age: 15,gender: "m"},
    {name: "Muzaffar",age: 19,gender: "m"},
    {name: "Eldor",age: 16,gender: "m"},
    {name: "Ibragim",age: 14,gender: "m"},
    {name: "Ravshan",age: 18,gender: "m"},
    {name: "Timur",age: 19,gender: "m"},
    {name: "Aziz",age: 15,gender: "m"},
    {name: "Darya",age: 26,gender: "w"},
    {name: "Mukhlisa",age: 16,gender: "w"}
]
let teenagers = []
let others = []

for(let item of students) {
   if(item.age < 18){
    teenagers.push(item.name + ' - ' + item.age)
   }else{
    others.push(item.name + ' - ' + item.age)
   }
}
console.log(teenagers, others);

for(let i = 0; i <= students.length - 1; i++) {
       if(students[i].age < 18){
        teenagers.push(students[i].name + ' - ' + students[i].age)
       }else{
        others.push(students[i].name + ' - ' + students[i].age)
       }
    }
console.log(teenagers,others);