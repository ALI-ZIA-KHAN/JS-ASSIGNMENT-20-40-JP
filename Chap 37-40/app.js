// FUNCTIONS:

// 1

// var x=new Date();
// document.write(x);

// 2. 

// var x=prompt("Enter first name");
// var y=prompt("Enter last name");
// function greet(){
//     alert("HELLO! "+ x +y);
// }
// greet();

// 3. 

// var num1=parseInt(prompt("Enter num 1"));
// var num2=parseInt(prompt("Enter num 2"));
// function sum(){
//     var add=num1 + num2;
//     alert(add);
// }
// sum();

// 4. Calculator:
// 


// var num1=parseInt(prompt("Enter num 1"));
// var num2=parseInt(prompt("Enter num 2"));
// var opr = prompt("Enter an operator")
// function calculator(num1, num2, opr){
//     if(opr === "+"){
//         var x=(num1+num2)
//         return x;
//     }
//     else if(opr === "-"){
//         var x=(num1-num2)
//         return x;
// }
// else if(opr === "*"){
//     var x=(num1*num2)
//     return x;
// }
// else if(opr === "/"){
//     var x=(num1/num2)
//     return x;

// }
// }
// var y=calculator(num1,num2,opr);
// document.write("Result is : " + y);

// 5..

// var num=parseInt(prompt("Enter any number:"))
// function square(num){
//     var x = num**2
//     return x

// }
// var c = square(num)
// alert(c)

// 6. 

// var num=parseInt(prompt("Enter any number "));
// var ans=num;
// function fact(n){
//     if (n===0 || n===1){
//         return 1;
//     }
//     else{
//         for (i=n-1;i>=1;i--){
//           var ans=ans*i;
//           return ans;
    
//     }

//     }
// }
// var c=fact(num);
// alert(c)

// 7. 

// function number(start_num, end_num){
//     for(var i = start_num; i <= end_num; i++){
//         var x=document.write(i + "<br>")
        
//     }
// }
// var c = number(10,30)
// document.write(c)

// 8.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// var x;
// var y;
// var x=base**2;
// var y=perpendicular**2;
// var h=x+y;
// var s=Math.sqrt(h)
// var base=+prompt("Enter base:")
// var perpendicular=+prompt("Enter perpendicular:")
// function calculateHypotenuse(base,perpendicular){
//     function calculateSquare(base,perpendicular){
//         var x=base**2;
//         var y=perpendicular**2;
//         alert("Square of base is: " +x + "Square of perpendicular is: "+ y);

//     }
//     calculateSquare(base,perpendicular)
// }
// alert("Hypotnuse is: "+ s);
// calculateHypotenuse(base,perpendicular);


// 9. 
// i. Arguments as value
// function area(x,y){
//       var A=x*y;
//       return A;

// }
// var c=area(2,2)
// alert(c);

// ii. Arguments as variables
// var x=parseInt(prompt("Enter width:"))
// var y=parseInt(prompt("Enter height:"))
// function area(x,y){
//       var A=x*y;
//       return (A);

// }
// var x=area(x,y)
// alert(x);

// 10. 

// var x=prompt("Enter first string");
// var z;
// function palindrome(){
//     var str=x.split('');
//     var y=str.reverse();
//     z=y.join('');
//     if (x === z){
//         alert("A plaindrome")
//     }
//     else if(x !=z){
//         alert("Not a palindrome")
//     }
// }
    
// palindrome();

// 11.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// var x=prompt("Enter str here :");
// function uppercase(x){
//     // var str=x.split('')
//     for (var i=0;i=x.length();i++){
//         if (x[i]===0){
//             var y=x.uppercase();
//             var m=x.slice(1,x.length())
//             alert("Converted string is : "+ y + m);
//         }
//     }
// }
// var c=uppercase(x)
// alert(c);


// 13. 
// Sample arguments : 'JSResourceS.com', 'o'
// var x=("JSResources.com")
// var count=0;
// function occurrences(a,b){
//     for (var i=0;i<=a.length;i++){
//         if (a[i]===b){
//             count+=1;
           

//         }
//     }
//     return count;
// }
// var f=occurrences(x,"u");
// alert(f)

// 14. 
// Circumference of circle = 2πr
// Area of circle = πr2
// var radius=+prompt("Enter radius here:")
// pi=3.142;
// function calcCircumference(radius){
//     var c=2*pi*radius
//     alert("Circumference of circle: " +c);

// }
// function calcArea(radius){
//     var a=pi*radius**2
//     alert("Area of circle: " +a);

// }
// calcCircumference(radius);
// calcArea(radius);






