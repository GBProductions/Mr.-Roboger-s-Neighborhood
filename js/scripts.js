/*

SPECS

Spec: When user inputs a number (userNumber), a range of 0 to UserNumber should be returned.
Input: "4"
Output: "0, 1, 2, 3, 4"

Spec: All numbers that contain the digit "1" will replace all characters with the phrase "Beep!"
Input: "3"
Output: "O, Beep!, 2, 3"

Spec: All numbers tht contain the digit "2" will replace all characters with the phrase "Boop!"
Input: "3"
Output: "0, Beep!, Boop!, 3"

Spec: All numbers that contain the digit "3" will replace all characters with the phrase "Won't you be my neighbor?"
Input: "3"
Output: "0, Beep!, Boop!, Won't you be my neighbor?"

Spec: When a number contains a "1" and a "2", the inputted number will return "Boop," because the rules for the input of "2" take prescedent.
Input: "12"
Output: Boop!,

Spec: When a number contains a "1" or "2", and a "3", the inputted number will return "Won't you be my neighbor?", because the rules for the input of "3" take prescedent.
Input: "13"
Output: "Won't you be my neighbor?",



TEST

Test: User enters in 0 and returns 0.
Input: "0"
Output: "0"

Test: User enters 10 and returns 0-10 with the affected specs.
Input: "10"
Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!"

Test: User enters 11 and returns 0-11 with the affected specs.
Input: "11"
Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep! Beep!"

Test: User enters 12 and returns 0-12 with the affected specs.
Input: "12"
Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep! Beep! Boop!"

Test: User enters 13 and returns 0-13 with the affected specs.
Input: "13"
Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep! Beep! Boop! Won't you be my neighbor?"

Test: User enters 20 and returns 0-20 with the affected specs.
Input: "20"
Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep! Beep! Boop! Won't you be my neighbor?, 14, 15, 16, 17, 18, 19, Boop!"

*/

//BUSINESS LOGIC


function Range(userRange) {
  this.userRange = userRange
};

function loop() {
  let results = [];
  for (let i = 0; i <= userRange; i ++) {
    results.push(i + (" "))
  }
};

function replace(){
  const newArray = [];
  for (let i = 0; i <= userRange; i ++) {
    if ([i].toString().includes(3)) {
      newArray.push(" Won't you be my neighbor? ")
      } else if ([i].toString().includes(2)) {
      newArray.push(" Boop! ")
      } else if ([i].toString().includes(1)) {
      newArray.push(" Beep" )
      } else {
      newArray.push([i].toString())
      } 
    }
    return finalString = newArray.join("") 
};





//UI LOGI

$(document).ready(function(){
  $("form#form").submit(function(event) {
    event.preventDefault();

    let userRange = parseInt($("input#userNumber").val());
    const userRange1 = userRange;

debugger
    (loop(Range(userRange1)));
    (replace(Range(userRange1)));


  $(".result").text(finalString);
  $("#result").show();
  });
});
