"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100]
let yourScores = [82, 98, 94, 88, 92, 100, 100]



function calcAverag(numbers) {
    let sum = 0

    for (let index = 0; index < numbers.length; index += 1) {

        sum += numbers[index]


    }
    const mean = sum / numbers.length

    return mean
}
const myAverage = calcAverag(myScores)
console.log(`My average Score is ${myAverage}`)


const yourAverage = calcAverag(yourScores)
console.log(`Your average Score is ${yourAverage}`)




