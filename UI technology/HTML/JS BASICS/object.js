let Brand = 'Canon';
let cameraPrice = 35000;
let cameraColor = 'Black';
//javascript object

let camera = {
    brand : 'canon',
    price : 35000,
    color : 'black',
    mfg : 2000


};
console.log(camera);
//Access the properties of an object
console.log(camera.brand);

//Access thr non-existing property
console.log(camera.megaPixel);  //-------It is not defined

//Access the properties using dot , [] notation
console.log(camera.price); //350000
console.log(camera['price']);

//for dynami properties dot , [] notation
let prop = 'brand';
console.log(camera.prop);
console.log(camera[prop]);

//Nested Object

let student = {
    name : 'Anil',
    age : 23,
    course : 'Civil',
    address : {
        street : 'Vaddikandriga',
        city : 'Hyderabad'
    }
}

//access the nested object
console.log(student.address);

//access the properties of an object
console.log(student.address.street);


//CRUD operations with an object

let mobile = {};
mobile.brand = 'Apple';
mobile.color = 'silver';
mobile.price = 35000;
mobile.isInsured = false;
console.log(mobile);

//Read operations
console.log(mobile.brand);//Apple

//Update operation
console.log(mobile.price);//35000
mobile.price = 45000;
console.log(mobile);

//Delete operations
delete mobile.isInsured;
console.log(mobile);

let laptop = {
    name : 'lenova',
    processor : 'i5',
    price : 35000,
    ram : '5GB',
    version : 'I5 8 gen',
    address : {
        Road : 'Jntu opposit',
        City : 'Hyderabad'
    }
}
console.log(laptop);
console.log(laptop.address);
console.log(laptop.name);
console.log(laptop.processor);
console.log(laptop.price);
console.log(laptop.ram);
console.log(laptop.version);
laptop.ram = '10GB';
console.log(laptop.ram);
delete laptop.version;
console.log(laptop);






