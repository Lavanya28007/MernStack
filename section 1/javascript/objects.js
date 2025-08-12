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

const SmartPhoneArray = [
    {
        brand: 'Samsung',
        model: 'Galaxy A14 5G',
        price: 16000,
        colors: ['Violet', 'Black', 'White']
    },
    {
        brand: 'Apple',
        model: 'iPhone 14',
        price: 80000,
        colors: ['Black', 'White', 'Red']
    },
    {
        brand: 'OnePlus',
        model: 'Nord CE 3',
        price: 25000,
        colors: ['Blue', 'Black']
    },
    {
        brand: 'Google',
        model: 'Pixel 7a',
        price: 45000,
        colors: ['Black', 'White', 'Blue']
    },
    {
        brand: 'Xiaomi',
        model: 'Redmi Note 12',
        price: 15000,
        colors: ['Black', 'White', 'Green']
    }
];

//access 2nd color of 3rd smartphone
console.log(SmartPhoneArray[2].colors[1]);

//add new color to apple iphone
SmartPhoneArray[1].colors.push('Gold');
console.log(SmartPhoneArray[1].colors);

//replace 1st color of last smartphone
SmartPhoneArray[SmartPhoneArray.length - 1].colors[0] = 'Silver';
console.log(SmartPhoneArray[SmartPhoneArray.length - 1].colors);

//create an array of smartphone brands
const smartphoneBrands = SmartPhoneArray.map((phone) => {
    return phone.brand;
});
console.log(smartphoneBrands);

//filter smartphones with price less than 30000
const budgetSmartphones = SmartPhoneArray.filter((phone) => {
    return phone.price < 30000;
});
console.log(budgetSmartphones);

//filter smartphones with color 'Black'
const blackSmartphones = SmartPhoneArray.filter((phone) => {  
    return phone.colors.includes('Black');
});     
console.log(blackSmartphones);


 