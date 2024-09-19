let myObject = {
// Object Keys
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (const key in myObject){
    console.log("Key: " + key + "| Type: " + typeof myObject[key]);
}