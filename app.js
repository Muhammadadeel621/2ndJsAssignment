// CHANGING CASE
// TASK 1
// var a = prompt("Enter the Name : ");
// var b = a.toUpperCase();
// document.write(b)

// TASK 2
// var Name = prompt("Enter you name");
// var space = Name.indexOf(" ")
// var firstName = Name.slice(0, space)
// var secondName = Name.slice(space + 1, )
// document.write(firstName[0].toUpperCase() + firstName.slice(1) + " ")
// document.write(secondName[0].toUpperCase() + secondName.slice(1))

// MEASUR5ING LENGTHS AND ECTRACTING PARTS
// TASK 1
// var mobileProduct = prompt("Enter your Favourite Mobile Model : ")
// document.write("My favourite Mobile Model Length is : " + mobileProduct.length)


// TASK 2
// var lastchar = prompt("Enter your Name");
// var num = lastchar.length;
// document.write(lastchar.charAt(num - 1))


//FINDING SEGMENTS
// TASK 1
// var word = "Pakistan";
// var index = word.indexOf("n");
// document.write("The Index of Letter n is : " + index)

// TASK 2
// var UserChar = prompt("enter userName ");
// var specialChar = UserChar;
// var sp;
// for (var i = 0; i <= specialChar.length - 1; i++) {
//     sp = specialChar[i];
//     if (sp >= "A" && sp <= "Z" || sp >= "a" && sp <= "z") {
//         document.write(sp);
//     } else {
//         alert("ERROR!!! enter correct name please")
//     }
// }


//FINDING A CHARACTER AT A LOCATION

// TASK 1
// var character = "pakistani";
// document.write(character.charAt(3));


                 //REPLACING CHARACTERS

// TASK 1
// var word = "Hyderabad";
// var rep = word.replace("Hyder" , "Islam")
// document.write(word + "<br>")
// document.write("The New Result Will Be : " + rep)


// TASK 2
// var a = "ali and Sajjad and faisal and raheel and adeel and basit are best friends"
// var replace = a.replace(/and/g , "&")
// document.write(a + "<br>")
// document.write("<h5>The New Result Will be : </h5>" + replace)

                  //ROUNDING NUMBERS


// TASK 1
// var intNum = prompt("enter the Possitive Value = ");
// var round = Math.round(intNum);
// var ceil = Math.ceil(intNum);
// var floor = Math.floor(intNum);
// document.write("The Number is : " + intNum + "<br>")
// document.write("The Number After Round is : " + round + "<br>")
// document.write("The Number After Ceil is : " + ceil  + "<br>")
// document.write("The Number After Floor is : " + floor + "<br>")

// TASK 1
// var intNum = prompt("enter the Negative Value = ");
// var round = Math.round(intNum);
// var ceil = Math.ceil(intNum);
// var floor = Math.floor(intNum);
// document.write("The Number is : " + intNum + "<br>")
// document.write("The Number After Round is : " + round + "<br>")
// document.write("The Number After Ceil is : " + ceil  + "<br>")
// document.write("The Number After Floor is : " + floor + "<br>")


                  //GENERATING RANDOM NUMBERS

// TASK 1
// var a = Math.random() * 5;
// var b = Math.round(a);
// if (b === 0) {
//     document.write("One")
// }
// else if (b === 1) {
//     document.write("Two")
// }
// else if (b === 2) {
//     document.write("Three")
// }
// else if (b === 3) {
//     document.write("Four")
// }
// else if (b === 4) {
//     document.write("Five")
// }
// else if (b === 5) {
//     document.write("Six , Now Your Turn To Flip the Dice Again")
// }

// TASK 2
// var a = Math.random() * 1;
// var b = Math.round(a);
// if (b === 0) {
//     document.write("Tails")
// }
// else if (b === 1) {
//     document.write("Heads")
// }


// TASK 3
// var a = 7;
// var b = Math.random() * 10;
// var c = Math.round(b);
// if (c === a){
//     alert("Congralulation! you have choosed right")
// }
// else{
//     alert("Soory! Try Later")
// }

                //CONVERTING STRINGS TO INTEGERS AND DECIMALS

// TASK 1

// var userWeight = ("87")
// var finalWeight = parseInt(userWeight)
// document.write(finalWeight, " Kilograms" + "</br>")

              //CONVERTNG STRINGS TO NUMBERS , NUMBERS TO STRINGSI

// TASK 1
// var string = prompt("")
// document.write("Before Conversion " + string + "</br>")
// document.write(typeof string + "<br>")
// var finalSting = Number(string);
// document.write("After Conversion " + finalSting + "<br>");
// document.write(typeof finalSting)

// TASK 2
// var user = (35.36);
// var a = user.toString()
// document.write(a + "</br>")
// document.write(typeof a + "</br>")
// document.write(parseInt(user))

   //CONVERTNG THE LENGTH OF THE DECIMALS

// TASK 1
// var v = +prompt("enter decimale value")
// document.write(v.toFixed(2));
