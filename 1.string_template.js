console.log("1.charAt()");
var txt="Hello World";
console.log(txt.charAt(8));

console.log("2.concat()");
var str1="Hello";
var str2="codingtute!";
console.log(str1.concat(str2));

console.log("3.Indexof");
var txt="Let's find where 'pen' occurs!";
console.log(txt.indexOf("pen"));

console.log("4.Last indexOf()");
var str="A dev knows a dev";
var pos=str.lastIndexOf("dev");
console.log(pos);

console.log("5.replace()");
var str="Hello Dev!";
console.log(str.replace("Dev","world"));

console.log("6.toUpperCase()");
var sentencs="CodingTute";
console.log(sentencs.toUpperCase());

console.log("7.trim()");
var str="  Trim Both side   ";
console.log(str.trim());

console.log("8.toString()");
var num=24;
console.log(num.toString());

console.log("9.includes()");
var str="My name is kirti";
console.log(str.includes("sargar"));

console.log("10.slice()");
var str="Developer World!";
console.log(str.slice(0,10));

console.log("11.split()");
var str="1,2,3,4,5,6";
console.log(str.split(" "));

console.log("Using String template()");
var msg=`Hello very Good Morning-"Sachin"`;
console.log(msg);

console.log("Using backticks");
var firstName="Kirti";
var lastName="Sargar";
console.log(`First Name:${firstName}  and LastName:${lastName}`);
console.log("Assignment.1");
console.log("Que.1");
var sen="My dream Company";
var sen1="Wipro";
console.log(`${sen} ${sen1}`);
console.log("Que.2");
var hobby1="Playing";
var hobby2="Coocking";
var hobby3="Writing";
console.log(hobby1);
console.log(hobby2);
console.log(hobby3);
console.log(`My hobbies:${hobby1} ${hobby2} ${hobby3}`);
console.log("======Assignment.2======");
console.log("1.Given string");
 var create="  Hey you are doing good,keep it up  ";
 console.log(create);
 console.log(`2)Length of string is:${create.length}`);
 console.log(`3)Remove leading and trailing extra spaces:${create.trim()}`); 
 console.log(`4)Print the total number of extra spaces count`);
 var createLength=create.trim();
 var count =create.length-createLength.length;
 console.log(count);
 console.log(`Count extra spaces removed:${count}`);
 console.log("5 Print the first and last character on same line after trim()");
console.log(`5) The first character of string is:${createLength.charAt(0)}and The last character of string is:${createLength.charAt(37)}`);
console.log("6)Print the total words available in the string after trim()");
var wordsSentence=createLength.split(" ");
console.log(`6)total words in string are :${wordsSentence.length}`);
var indexOf=createLength.indexOf("good");
console.log(`7)Index of word "good" is:${indexOf}`);
console.log("8)print the substing starting from index 22, using substring() and slice()");
//console.log(`Substring starting from index 22 is:${}`);


 