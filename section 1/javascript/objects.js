const user = {
   " user name": 'Mansi',
     email: 'mansi123@gmail.com',
     password: 'mansi123',
     age: 21
};

// console.log(user.user name);
console.log(user['user name']);
console.log(user.name);
console.log(user['name']);


console.log(user.password);
user.name = "Lavanya";
console.log(user);

// Add Items 
user.course = "Mern Stack";
console.log(user);

user.sport="Football";
console.log(user);

// Delete Items
delete user.password;
console.log(user);


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let SmartPhone ={
    brand : 'Samsung',
    model : 'Galaxy A14 5G',
    price : 16000,
    colors : ['Violet', 'Black', 'White',[1,2,3,4]]
}

console.log(SmartPhone);
console.log(SmartPhone.colors[3][0]);
console.log(SmartPhone.colors[3][2]);

SmartPhone.colors.push("pink");
// console.log(SmartPhone.colors.push("pink"));
console.log(SmartPhone);

delete SmartPhone.colors.pop("pink");
console.log(SmartPhone);

SmartPhone.colors.unshift("pink");
console.log(SmartPhone);




