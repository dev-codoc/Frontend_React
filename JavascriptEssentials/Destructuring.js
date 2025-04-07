// To access some sort of data of an object again and again we need to call the whole iteration for the element

var obj = { name: "Devanshu", age: 21 }

console.log(obj.age);
console.log(obj.age);
console.log(obj.age);

// We need to call (obj.age again and again) to overcome this problem we can use destructuring

var obj1 = { name: "DEV", age: 22, email: "lalal@gmail.com" }
const { email } = obj1 // This is called destructuring ...

console.log(email);
// Now there is no need to specify whole object element order

var obj2 = {
    name: {
        FirstName: "Devanshu",
        LastName: "Singh"
    },
    age: 21,
    subject: {
        MERN: {
            frontend: "react",
            backend : "express, node, mongo"
        }
    }
}

const {backend} = obj2.subject.MERN; 

console.log(backend);
