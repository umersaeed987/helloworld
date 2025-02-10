// // function print (){
// //     console.log('hello')
// // }

// // print();

// const print =() =>{
//     console.log('hello')
// }

// print();

// const sum =(a,b) =>{
//     console.log(a+b);

// }

// sum(10,30)

const sum =(a,b) => a+b

// const result= sum(10,30)

console.log(sum(20,30))

const name1 = 'umer';
const name2 = 'saeed';

console.log(`my name is "${name1}" and my father name is "${name2}"`)

// const age=20;

// age>=18 ? console.log('you can drive') : console.log('you can not drive');

const student={
    name:'umer',
    age: '20',
    class: '9',
    email: 'umer@gmail.com',

}

// spread operator

const student2 = {...student, name:'ali'}
console.log('this is second student', student2)


//   








// console.log(student.name, student.age)

// const {age, email} = student

// console.log(email, age)

// map function


// const number = [10,20,30];

// const result =number.map ((n) =>{
//     return n+10;

// })

// console.log(result)


// filter function

// const number =[10,20,30];

// const result= number.filter((spiderMan)=> spiderMan>20)

// console.log(result)

// const category=['mobiles', 'laptops', 'smartwatch']

// const result = category.filter((cat)=> cat=== 'mobiles')

// console.log(result)

// const mobiles = [
//     {mobileName: 'samsung', price:'100000'},
//     {mobileName: 'iphone', price:'150000'},
//     {mobileName: 'oppo', price:'180000'},
//     {mobileName: 'vivo', price:'200000'},
//     {mobileName: 'nokia', price:'250000'},
//     {mobileName: 'redmi', price:'300000'}

// ]

// const result= mobiles.filter((p)=> p.price > 150000)

// console.log(result);

// how to use async await

// const fetchData = async () =>{
//     const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await api.json
// console.log(data);
// }   

// fetchData()

export const sum = ( a,b ) => a+b;

const person = 'umer'

export default person;


