function p01Func() {
  /* in Ex1, set message text and image sources for problem01*/
  document.getElementById("problem").innerHTML = "receives two natural numbers and then calls sub-program function multiply(m, n) to compute their multiplication. For instance, if the inputs are 5 and 6, the function should output 30. multiply() should be a recursive function"
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/1fw.jpg";
  document.getElementById("js").src = "images/1js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;




}
function p02Func() {
  document.getElementById("problem").innerHTML = "receives a natural number and then call sub-program function count3or7(n) to count how many digits in the number are equal to 3 or 7."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/2fw.jpg";
  document.getElementById("js").src = "images/2js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p03Func() {
  document.getElementById("problem").innerHTML = "creates an array of numbers and then call two recursive sub functions to calculate the sum of values in the array. Thinking recursively, the idea is that the sum can be calculate by adding first element with the sum of the rest of the array (which is a smaller version of problem and assume we have such a solution)."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/3fw.jpg";
  document.getElementById("js").src = "images/3js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p04Func() {
  document.getElementById("problem").innerHTML = "creates an array of numbers and then call three sub-program functions to find the max value in the array. One function is iterative, the other two are recursive. You are to implement both of them."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/4fw.jpg";
  document.getElementById("js").src = "images/4js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p05Func() {
  document.getElementById("problem").innerHTML = "receives a string and call a sub-program reverse(s) to compute its reverse. For instance, if the input is CSisFUN, the function should output NUFsiSC. The sub-program function reverse(s) is a recursive function."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/5fw.jpg";
  document.getElementById("js").src = "images/5js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p06Func() {
  document.getElementById("problem").innerHTML = "creates an sorted array of 20 non-descending numbers exists, and it receives a number from user and then call a sub-program find() to determine if that number exists in the array or not."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/6fw.jpg";
  document.getElementById("js").src = "images/6js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p07Func() {
  document.getElementById("problem").innerHTML = "Trace the following flowchart for when input is 25 and complete the trace table. Then, trace with 13. Complete the 2nd table. Also, write pre- post- conditions for this flowchart. Assume input is a."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/7fw.jpg";
  document.getElementById("js").src = "images/7js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p08Func() {
  document.getElementById("problem").innerHTML = "Trace the following flowchart for when input values are -12, 3, -3, 6, -11, 14, 1,10, 3, 2, 6,0 and complete the trace table. Also, write pre- post-conditions for this flowchart. Not that the algorithm stop early so may not take all the inputs."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/8fw.jpg";
  document.getElementById("js").src = "images/8js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p09Func() {
  document.getElementById("problem").innerHTML = "Trace the following flowchart for when input value is 9 and complete the trace table. Also, write pre- post-conditions for this flowchart. The algorithm receives a positive whole number and output its binary representation. For more information about binary representation and conversion see the provided pdf file “Number Systems” or search the web. To convert from decimal number to its binary (base 2) representation, we keep on dividing the number by 2, and list the reminders (which is either 0 or 1) from right to left. The process repeats until the number is reduced to 0."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/9fw.jpg";
  document.getElementById("js").src = "images/9js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p10Func() {
  document.getElementById("problem").innerHTML = "Trace the following flowchart for when input values are 12, 3, -3, 6, 11, 3, -1, -2 and complete the trace table. Also, write pre- post-conditions for this flowchart."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/10fw.jpg";
  document.getElementById("js").src = "images/10js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p11Func() {
  document.getElementById("problem").innerHTML = "Devise an algorithm that scans a given array a of n elements, and get the sum of even values stored in the even position of the array. Assume the array index starts from 0 (so even position are index 0,2,4,6.. Trace your algorithm by assume the array is 3,1,6,4,8,12. In this case the sum is 6+8=14."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/11fw.jpg";
  document.getElementById("js").src = "images/11js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p12Func() {
  document.getElementById("problem").innerHTML = "This exercise uses sub-algorithms. Trace it for when input value is 6 and complete the trace tables. Also note that there are two variables name num, one in the main algorithm and another in the sub-algorithm. Assume input is a positive integer. Write pre- post-conditions for each of these algorithms (the main one and the sub-algorithm). Note that the prime sub-algorithm is similar to the algorithm in Ex 1) but instead of reading input and producing outputs, it has a parameter num, and it returns the result."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/12fw.jpg";
  document.getElementById("js").src = "images/12js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p13Func() {
  document.getElementById("problem").innerHTML = "Devise an algorithm to scan an input array a of n elements, and output all prime numbers in the array that contain digit 7. For example, given"
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/13fw.jpg";
  document.getElementById("js").src = "images/13js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p14Func() {
  document.getElementById("problem").innerHTML = "draw a flowchart for a computer program to receive two numbers as sides of a rectangle and output the rectangle\'s perimeter, in the form of “Perimeter: x” where x is the perimeter."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/14fw.jpg";
  document.getElementById("js").src = "images/14js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p15Func() {
  document.getElementById("problem").innerHTML = "draw a flowchart for a computer program to receive three numbers and store them in memory spaces called a, b, and c as three semi-axes of an ellipsoid, and calculate and output the volume of this ellipsoid, in the form of “volume: x” where x is the volume."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/15fw.jpg";
  document.getElementById("js").src = "images/15js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p16Func() {
  document.getElementById("problem").innerHTML = "draw a flowchart for a computer program to receive three floating point numbers and store them in memory spaces called a, b, and c, and return the largest number of the three, in the form of “largest: x” where x is the largest value. Assume the three number are all different."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/16fw.jpg";
  document.getElementById("js").src = "images/16js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p17Func() {
  document.getElementById("problem").innerHTML = "draw a flowchart to receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers, output “it has 2 distinct roots”, “its roots are identical”, “it has no roots in real numbers” respectively."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/17fw.jpg";
  document.getElementById("js").src = "images/17js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p18Func() {
  document.getElementById("problem").innerHTML = "assume there is a webpage containing an HTML input of type text and a button. When the button is clicked, a function named divisibleBy6 is called. Draw a flowchart for the function, that receive a number, and first check whether the input is divisible by 6 or not, outputting “divisible by 6” or “not divisible by 6”, respectively."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/18fw.jpg";
  document.getElementById("js").src = "images/18js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p19Func() {
  document.getElementById("problem").innerHTML = "draw a flowchart to receive a number from 0~100, and map it to a letter grade based on York standard. Use if .. else if .. else if … You may need to look at this reference:"
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/19fw.jpg";
  document.getElementById("js").src = "images/19js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p20Func() {
  document.getElementById("problem").innerHTML = "draw a flowchart to receive a number from 0~100, and map it to a letter grade based on York standard. Use the “many case” style shown in class (which corresponds to switch cases struct in JS programming language). Again assume no letter grade E."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/20fw.jpg";
  document.getElementById("js").src = "images/20js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p21Func() {
  document.getElementById("problem").innerHTML = "Devise a flowchart to keep on receiving an integer number from user and output whether the number is positive or negative. The process repeats until a 0 is entered, then output “program ended” and ends."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/21fw.jpg";
  document.getElementById("js").src = "images/21js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p22Func() {
  document.getElementById("problem").innerHTML = "Devise a flowchart to receive a positive integer number and output each digit separately. For instance, if the input is 692, the program should output 6, 9, 2. Another example, if the number is 135429 the program should output 1, 3, 5, 4, 2 and 9. F"
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/22fw.jpg";
  document.getElementById("js").src = "images/22js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p23Func() {
  document.getElementById("problem").innerHTML = "Devise a flowchart to receive a positive integer number and output how many of its digits are equal to 3 or 7. For instance, if the input is 772, the program should output 2, because there are two 7 there. In another example, if the input is 14367, the program should output 2 as there is a 3 and a 7 in it."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/23fw.jpg";
  document.getElementById("js").src = "images/23js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p24Func() {
  document.getElementById("problem").innerHTML = "Devise a flowchart to receive a positive integer number and output \"yes\" if it's equal to its reverse; otherwise, output \"no\". For instance, if the input is 63936, the program should output \"yes\", because if you read the digits from left to right or from right to left, it's the same number. But, if the input is 632, the program should output \"no\" because 632 is not the same as 236."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/24fw.jpg";
  document.getElementById("js").src = "images/24js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p25Func() {
  document.getElementById("problem").innerHTML = "Devise an algorithm to receive a positive integer number, as n, and output n! (n Factorial). At the end the algorithm output “x! = y” where x is the input value and y is the factorial value . For example, for input 6, the factorial is calculated by 6* 5* 4 *3 * 2*1 = 720, so the output should d be output “6! = 720”."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/25fw.jpg";
  document.getElementById("js").src = "images/25js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p26Func() {
  document.getElementById("problem").innerHTML = "Devise an algorithm to receive a positive integer number, as n, and output n! (n Factorial). Use while loop. Although for loop, as you did in part A, fit this question well, here we use while loop to implement (every for loop can be rewritten to a while loop)"
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/26fw.jpg";
  document.getElementById("js").src = "images/26js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p27Func() {
  document.getElementById("problem").innerHTML = "Devise an algorithm to input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence. In Fibonacci sequence, the first two values are 0 and 1 and other values are sum of the two values preceding it. For instance, if the input is 4, the program should print 0, 1, 1, 2,. As another example, if the input is 9, the program should output 0, 1, 1, 2, 3, 5, 8, 13, 21,."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/27fw.jpg";
  document.getElementById("js").src = "images/27js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p28Func() {
  document.getElementById("problem").innerHTML = "Devise an algorithm to input a positive integer, n, – and by using [ and ] characters – output the figure below that has n rows and each row k has k pairs of []."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/28fw.jpg";
  document.getElementById("js").src = "images/28js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p29Func() {
  document.getElementById("problem").innerHTML = "In this problem, develop an algorithm that, given an unsorted array, creates a new array which is the sorted version of the given array."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/29fw.jpg";
  document.getElementById("js").src = "images/29js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}
function p30Func() {
  document.getElementById("problem").innerHTML = "In this problem, develop an algorithm to search a key in a sorted array.Given an input array and a key, one general approach to searching the key in the array is to scan the array, comparing each element against the search key, until one element matches the key, or no match is found till the end of the array. In the latter case the algorithm concludes that the key is not in the array."
  document.getElementById("flowchart").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("flowchart").src = "images/30fw.jpg";
  document.getElementById("js").src = "images/30js.jpg";
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;

}


function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {

    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {

    document.getElementById("js").style.display = "inline";
  } else {

    document.getElementById("js").style.display = "none";
  }
}
function zoomIn1() {
  document.getElementById("flowchart").style.width = "200%";
}
function zoomOut1() {
  document.getElementById("flowchart").style.width = "100%";
}
function zoomIn2() {
  document.getElementById("js").style.width = "200%";
}
function zoomOut2() {
  document.getElementById("js").style.width = "100%";
}



