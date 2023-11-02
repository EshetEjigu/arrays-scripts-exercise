"use strict"

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
]

function findClassAverage(studentsArray) {
    let scoreTally = 0
    let scoreSum = 0
   
  
    for (let studentIndex = 0; studentIndex < studentsArray.length; studentIndex += 1) {
        const student = studentsArray[studentIndex]
        
        scoreTally += student.scores.length

        for (let scoresIndex = 0; scoresIndex < student.scores.length; scoresIndex += 1) {
            
           const score = student.scores[scoresIndex]
           scoreSum += score

        }

    }
    const mean = scoreSum / scoreTally
   

    return Number(mean.toFixed(2))
}

const classAverage = findClassAverage(students)
console.log(`The class average is ${classAverage}`)

// console.log(students[s].scores.length)




