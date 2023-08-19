import kural from './allKural.json' assert {type: 'json'};
const random = Math.floor(Math.random() * (1331 - 0 + 1) + 0)
document.getElementById("firstLine").innerHTML = random + '. ' + kural.allKural[random].line1 
document.getElementById("secondLine").innerHTML = kural.allKural[random].line2