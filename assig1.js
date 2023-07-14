var num1 = 34 ;
var num2 = 56 ;
var num3 = 45 ;
var num4 = 85 ;

if (num1 === num3)
{
    console.log("tRUE")
}
else{
    console.log("Please check the values")

}

console.log(num2 == num4);
console.log( num4 != num1);
console.log(num1 + num3);
console.log(num2 % num4);
console.log(num4/ num2);
console.log (num1 === num4  );


var a = Number(prompt("Enter a number a"))
var b =  Number(prompt("Enter a number b"))
 var c =  Number(prompt("Enter a number c"))
 
alert(  "addition of A&B = " +      (a+b));
 alert("iNCREMENT OPERATOR  OF Value A = "  +  ++a);
alert("DECREMNET OPERATOR OF C = " + --b);

// Logical operators
var p = true;
var q = false;

console.log("Logical AND:", p && q);
console.log("Logical OR:", p || q);
console.log("Logical NOT:", !p);

// String concatenation
var firstName = "Abbhiraj";
var lastName = "Batch8";

var fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);
// Assignment operators
var a = 10;
var b = 5;

a += b;
console.log("Add and Assign:", a);

a -= b;
console.log("Subtract and Assign:", a);

a *= b;
console.log("Multiply and Assign:", a);

a /= b;
console.log("Divide and Assign:", a);

a %= b;
console.log("Modulus and Assign:", a);