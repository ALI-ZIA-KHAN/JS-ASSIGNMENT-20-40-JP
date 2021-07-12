
// CHAPTERS 21-25
// 1. 

// var f_name=prompt("Enter first name:");
// var l_name=prompt("Enter last name:");
// var fullname=(f_name+l_name);
// alert("WELCOME "+(fullname));

// 2. 
// var mblephone=prompt("Enter your favourite mobile phone:");
// document.write("My favourite mobile phone is:", (mblephone),"<br>");
// document.write("The length of the string is:",(mblephone.length));

// 3.

// var string="Pakistani";
// var position=string.indexOf("n");
// document.write("String:",string,"<br>");
// document.write("Index of 'n' is :",position);

// 4. 
// var string="Hello World";
// var position=string.lastIndexOf("l");
// document.write("String:",string,"<br>");
// document.write("Index of 'l' is :",position);

// 5. 
// var string="Pakistani";
// document.write("string: ",string,"<br>");
// document.write("Character at index 3 is ",string[3]);

// 6.
// var f_name=prompt("Enter first name:");
// var l_name=prompt("Enter last name:");
// var fullname=(f_name.concat(l_name));
// alert("WELCOME "+(fullname));

// 7.

// var str="Hyderabad";
// var replace=str.replace("Hyder","Islam");
// document.write("City: ",str,"<br>");
// document.write("After replacement: ",replace);

// 8. 

// var message="Ali and Sami are best friends. They play cricket and football together.";
// var replaced=message.replace(/and/g,"&");
// document.write("Message: ",message,"<br>");
// document.write("After replacement: ",replaced);

// 9. 
// var str="472";
// document.write("Value: ",str,"<br>");
// document.write("Type: ",typeof(str),"<br>");
// var num=parseInt(str);
// document.write("Value: ",num,"<br>");
// document.write("Type: ",typeof(num));

// 10. 
// var str=prompt("Enter input:");
// document.write("User input: ",str,"<br>");
// document.write("Upper case :",str.toUpperCase());

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var str=prompt("Enter input:");
// var firstchar=str.charAt(0).toUpperCase();
// var slice=str.slice(1,12);
// document.write("User input: ",str,"<br>");
// document.write("Title case :",firstchar+split);

// 12. 
// var num= 35.36;
// document.write("Number: ",num,"<br>");
// document.write("Result: ",num*100);

// 13. 


// var username=prompt("Enter username;");
// for (i=0;i<username.length;i++){
//     if (username[i] == "@" || username[i] == "!" || username[i] =="," || username[i]== "."){
//         prompt("Please enter a valid username!")
//         break;
//     }
// }
// 15. 

// var password=prompt("Enter password:");
// for (i=0;i<password.length;i++){
//     if (password[0]==Number || password[i]<6 || password[i]=="@" || password[i]=="," || password[i]=="." || password[i]=="!") {
//         prompt("Password shouldnot start with  number .please enter a valid password ")
//         break
//     }
   

// }
// 16.

// var university ="University of Karachi";
// document.write(university.split(" "),"<br>");
// for (i=0;i<university.length;i++){
//     document.write(university[i],"<br>")
// } 

// 17.

// var str=prompt("Enter input:");
// document.write("User input:",str,"<br>")
// document.write("Last character of input :",str.charAt(str.length-1))

// 18. 

// var str="The quick brown fox jumps over the lazy dog";
// // var c=str.match(/the/g.length());
// document.write("Text:",str,"<br>");
// document.write("There are",(str.match(/the/g)).length," occurrences of the word 'the' ");




