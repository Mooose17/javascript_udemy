//First object in JS

const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
}

/* ensure after each individial key:value pair we
seperate via a comma - key:value,key:value, */
//only use curly braces when declaring an object//
//To access data in object - use ["key"] || objectName.key//

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
let fullAddress = restaurant.address+", "+restaurant.city + ", " + restaurant.state + restaurant.zipcode
//YOUR CODE GOES DOWN HERE:
// Object Destructoring - const { address, city, state, zipcode } = restaurant;
//let fullAddress = address+", "+city + ", " + state + zipcode

//Objects nested in an array//
const comments = [
    {
        username:"Tammy",
        text:"Lol",
        upvotes:201,
        gilded:false
    },{
        username:"Zach",
        text:"NOT FUNNY GO HOME",
        upvotes:31,
        gilded:true
    }
]
//Array nested in an object//
const music = {
    albumTitle:"Nurture",
    artist:"Porter Robinson",
    topSongs:["Look At The Sky","Mother","Get Your Wish"],
    totalSongs: 11,
    gold:true
}