// CHAPTER 26-30 PDF
// 1. 

// var a=Math.random();
// var x=Math.round(a);
// var y=Math.floor(a);
// var z=Math.ceil(a);
// document.write("Number : "+ a ,"<br>");
// document.write("Round off value : "+ x ,"<br>");
// document.write("Floor value : "+ y ,"<br>");
// document.write("Ceil value : "+ z , "<br>" );

// 2. 

// var a=-Math.random();
// var x=Math.round(a);
// var y=Math.floor(a);
// var z=Math.ceil(a);
// document.write("Number : "+ a ,"<br>");
// document.write("Round off value : "+ x ,"<br>");
// document.write("Floor value : "+ y ,"<br>");
// document.write("Ceil value : "+ z ,"<br>");

// 3. 

// var a=Math.random();
// var x=Math.abs(a);
// document.write("Number : "+ a ,"<br>"); 
// document.write("Absolute value  of : "+ a + " is " + x ,"<br>");

// 4. 
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("Random Dice value is :" + diceRoll )

// 5. 
// var coin_toss = Math.floor( Math.random() * 2 ) +1;
// var heads="Heads";
// var Tails="Tails";
// var result_h=2;
// var result_t=1;
// if (result_h === coin_toss){
//     document.write(coin_toss ,"<br>");
//     document.write("Random coin value is :" + heads);

// }else if(result_t === coin_toss){
//     document.write(coin_toss ,"<br>");
//     document.write("Random coin value is :" + Tails );
// }

// 6. 

// var random_number = Math.floor( Math.random() * 99 ) +1;
// if (random_number >1 && random_number <100){
//     document.write("Random number between 1 and 100 :" + random_number)
// }

// 7.


// var weight=prompt("Enter your weight here :");
// alert("The weight of user is :" + weight);

// 8. 

// var secret=Math.floor( Math.random() * 10 ) +1;
// var input=prompt("Enter a random number between 1 and 10 :");
// if (input===secret){
//     alert("Congratulations your guess is correct")
// }
// else{
//     alert("TRY AGAIN!!", "<br>")
// }

// CHAPTER 30-34 PDF
// 1.

// var date= new Date();
// document.write(date);

// 2. 

// var date= new Date();
// var x=date.toString();
// var y=x.slice(4,7);
// alert("Current month :" + y)

// 3. 

// var date= new Date();
// var x=date.toString();
// var y=x.slice(0,3);
// alert("Today is :" + y)

// 4.

// var date= new Date();
// var x=date.toString();
// var y=x.slice(0,3);
// if (y==="Sat" || y==="Sun"){
//     alert("It's Funday");
// }


// 5. 

// var date= new Date();
// var x=date.toString();
// var y=x.slice(8,10);
// if (y <= 15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// 14. 

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// Numberofunits= 410;
// Chargesperunit =16;
// LatePaymentSurcharge=350;
// var x= Numberofunits * Chargesperunit;
// var y=x + LatePaymentSurcharge
// document.write("<h1>K-ELECTRIC BILL</h1>" , "<br>");
// document.write("Customer name : Sukaina Kashif" , "<br>");
// document.write("Month : May" , "<br>");
// document.write("Number of units :" + Numberofunits , "<br>");
// document.write("Charges per unit : " + Chargesperunit , "<br>");
// document.write("Net Amount payable( within due date) : "+ x , "<br>");
// document.write("Gross Amount Payable (after due date) :" + y  , "<br>")



