let scores=[12,7,84,94,6,1,2,9]

let newMappedScores=scores.map(score=>score*2)

console.log(newMappedScores)

let total=newMappedScores.reduce((sum,score)=>sum+score,0)

console.log(total)