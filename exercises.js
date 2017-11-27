/*
    
* Objects

Is like an Array of variables and functions, Objects are made to organize groups of similar things. 
The functions in the objects use the variables to preform their specified tasks. Object creation helps reduce writing repetitive code.

* Properties

These are variables that are within an object. You can change their value, remove them, and basically do all the stuff you can do to a normal variable. 
The only difference is the way you write when working with properties. Also you can store Objects within other Object properties.


* Methods

A method is a function, the only difference is that a method is a functions thats inside an object.


* for in loop

 A for in loop is a way of accessing all the properties and methods within
 a objects. Since Objects don't have index numbers for their properties like arrays do, a for in loop the best way to iterate aka go over an object. 
 Basically says for each Property/Method in Objects (do a certain task or no task at all).

* Dot notation vs bracket notation

 Dot notation is a way of accessing properties or methods within an Object. This is usually the prefered way of accessing information inside a object. 
 The bracket notation, although not used as much as Dot notation, is a very important part of the language. It allows you to work with variable with 
 much more flexibility than Dot notation does. As a general rule, use dot notation most of the time and use brackets when you're dealing with variables.

*/








// Do not change any of the function names

function makeCat(name, age) {
  var newObj = {
    'name' : name
  };
  newObj.age = age;
  newObj.meow = function(){
    return 'Meow!';
  };
  return newObj;
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
}

function addProperty(object, property) {
  
  object[property] = null;
  return object;
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
  object[method]();
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber * 5;
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
  // remove the property from the object
  // return the object
}

function newUser(name, email, password) {
  var newObj = {
    'name' : name,
    'email' : email,
    'password' : password
  };
  return newObj;
  // create a new object with properties matching the arguments passed in.
  // return the new object
}

function hasEmail(user) {
  if(user.email)
    return true;
  return false;
  // return true if the user has a value for the property 'email'
  // otherwise return false
}

function hasProperty(object, property) {
  for(var k in object){
    if(k === property)
  return true;
  }
  
return false;
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
}

function verifyPassword(user, password) {
  if(user.password === password)
    return true;
  return false;
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
}

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
  // replace the existing password on the user object with the value of newPassword
  // return the object
}

function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
}

function setUsersToPremium(users) {
  for(var i = 0; i < users.length; i++)
  users[i].isPremium = true;
return users;
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
}

function sumUserPostLikes(user) {
  var total = 0;
  for(var i = 0; i < user.posts.length; i++)
    total += user.posts[i].likes;
  return total;
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function() {
   var discount = this.price * this.discountPercentage;
   var discountPrice = this.price - discount;
   return discountPrice;
   
  };
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  return storeItem;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
