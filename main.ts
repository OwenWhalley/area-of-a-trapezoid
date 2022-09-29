game.splash("Calculate the area of a trapezoid in cm")
// Created by: Owen Whalley
// Created on: 2022/09/29
// 
// These three blocks of code ask for the dimensions of the trapezoid and gives these values to the variables, Base A, Base B, and Height.
let Height = game.askForNumber("Enter Height (cm)")
let Base_A = game.askForNumber("Enter Base A (cm)")
let Base_B = game.askForNumber("Enter Base B (cm)")
// Created by: Owen Whalley
// Created on: 2022/09/29
// 
// These three blocks evaluate these dimensions to get the area of the trapezoid. The formula is (a+b)/2 x h.
let Base_A__B = Base_A + Base_B
let Base_A__B2 = Base_A__B / 2
let Final = Base_A__B2 * Height
// Created by: Owen Whalley
// Created on: 2022/09/29
// 
// This block shows the final answer for the area of the trapezoid on the screen. 
game.splash("The area of the trapezoid is", Final)
