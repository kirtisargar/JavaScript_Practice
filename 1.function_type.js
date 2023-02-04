console.log("Function with no argument and no return value");
function display(){
      console.log("My name is:Kirti");
      console.log("My sir name is:Sargar");
}
display();
console.log("Practice Function");
function show(){
      console.log("My Collage Name is:Vidnyan Mahavidyalay Sangola");
}
show();

console.log("Function with arg and no return value");
function showDetails(myName){
      console.log("Details",myName);
}
showDetails("Kirti Sargar");

console.log("function Practice");
function shows(arg){
      console.log("Display",arg);
}
shows("Jay Sadguru");

console.log("Function with arg and with return value");
function rahulDada(money){
      console.log("Going in market",money);
      console.log("Purchased fresh vegetables",money);
      console.log("come back");
      return "Bag of Vegetables",money;
}
var bagofVegetables=rahulDada(150);
console.log(bagofVegetables);

console.log("Practice");
function pritiTai(paise){
      console.log("Going to Shopping",paise);
      console.log("Purchesed Dresses");
      console.log("come back");
      return "bag of Dresses",paise;
}
var bagofDresses=pritiTai(1100);
console.log(bagofDresses);

console.log("=====Assignment Function Q.1=====");
function details(){
      console.log("My hobbies:Writing,Playing");
}
details();
console.log("============");
function demo(){
      console.log("Vehicles:Two vhiler");
}
demo();
console.log("Question.2");
function names(firstName,lastName){
      console.log(`First Name:${firstName},Last Name:${lastName}`);
}
names("Kirti","Sargar");
console.log("Question.3");
console.log("Before Swap_values");
function swap_value(virat,anushka){
      console.log("Actors:",virat,anushka);
}
swap_value("1000","7000");
console.log("After Swap_Values");
function swap_values(virat,anushka){
      console.log("Actors: ",virat,anushka);
}
swap_values("virat","anushka");

console.log("Question.3 ");
function addthree_numbers(Hello,Good,Morning){
      console.log("First Value:",Hello);
      console.log("Second Values:",Good);
      console.log("Third Values:",Morning);
      return "Addition";
}
addthree_numbers();
console.log("swap_variable");
var sweety="Sweety";
var cutie="cutie";
console.log("berfore swap");
console.log(sweety);
console.log(cutie);

var temp="Sweety";
sweety=cutie;
cutie=temp;
console.log("After swap");
console.log(sweety);
console.log(cutie);