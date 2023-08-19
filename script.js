import kural from './allKural.json' assert {type: 'json'};
const random = Math.floor(Math.random() * (1331 - 0 + 1) + 0)
document.getElementById("firstLine").innerHTML = random + 1 + '. ' + kural.allKural[random].line1
document.getElementById("secondLine").innerHTML = kural.allKural[random].line2
document.getElementById("pal-iyal").innerHTML = kural.allKural[random].pal + ' - ' + kural.allKural[random].iyal
document.getElementById("adikaram").innerHTML = kural.allKural[random].adikaram
document.getElementById("mu_varatha").innerHTML = '**' + kural.allKural[random].mu_varatha[0] + '**' + ': ' + kural.allKural[random].mu_varatha[1] + `${kural.allKural[random].mu_varatha[2] ? kural.allKural[random].mu_varatha[2] : ''}`
document.getElementById("parimela").innerHTML = '**' + kural.allKural[random].parimela[0] + '**' + ': ' + kural.allKural[random].parimela[1] + `${kural.allKural[random].parimela[2] ? kural.allKural[random].parimela[2] : ''}`
document.getElementById("mu_karu").innerHTML = '**' + kural.allKural[random].mu_karu[0] + '**' + ': ' + kural.allKural[random].mu_karu[1] + `${kural.allKural[random].mu_karu[2] ? kural.allKural[random].mu_karu[2] : ''}`
document.getElementById("salaman").innerHTML = '**' + kural.allKural[random].salaman[0] + '**' + ': ' + kural.allKural[random].salaman[1] + `${kural.allKural[random].salaman[2] ? kural.allKural[random].salaman[2] : ''}`
document.getElementById("manikudavar").innerHTML = '**' + kural.allKural[random].manikudavar[0] + '**' + ': ' + kural.allKural[random].manikudavar[1] + kural.allKural[random].manikudavar[2] + `${kural.allKural[random].manikudavar[2] ? kural.allKural[random].manikudavar[2] : ''}`
document.getElementById("v_munusami").innerHTML = '**' + kural.allKural[random].v_munusami[0] + '**' + ': ' + kural.allKural[random].v_munusami[1] + `${kural.allKural[random].v_munusami[2] ? kural.allKural[random].v_munusami[2] : ''}`

