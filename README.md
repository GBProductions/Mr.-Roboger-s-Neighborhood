# _Mr. Roboger's Neighborhood_

#### _Mr. Roboger's wants to welcome you to his neighborhood! The user types a number and a range of 0-the number inputed is returned. When certain numbers return though, they have been relplaced by certain phrases._

#### _Sept. 6th 2020_

#### By _**Garrett Brown**_

## Description

In this program, you can enter in any number, and the program will show an array that ranges from 0 (zero) to that number. 

However, the program has some exceptions:
1. It will first replace any number that contains the digit 1 (one) with the phrase "Beep!"
2. Any number with the digit 2 (two) will be replaced with the phrase "Boop!"
3. Any number with the digit 3 (three) will be replaced with the phrase "Won't you be my neighbor?"

The program also has a hierarchy: the highest number has priority as a rule: so for instance, the number 13 (thirteen) has a 1 and a 3 in it. Since 3 is higher than one, 13 is replaced with "Won't you be my neighbor?"

Below are some expected tests and logic.


Business Logic

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

## Setup/Installation Requirements

* _Clone the "Mr.-Roboger-s-Neighborhood" repository from Github._
* _Navigate to the root directory of the project in the terminal and type 'open index.html' to view project in a browser._
* _Open the project in text editor to view code._



## Known Bugs

_No known errors at this time._

## Support and contact details

_For support, contact Garrett Brown <garrettpaulbrown@gmail.com>_

## Technologies Used

_Used HTML, CSS, and JS. Used arrays and loops to sort and return information._

### License

*Licesnsed under MIT*

Copyright (c) 2020 **_Garrett Brown_**
