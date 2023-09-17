
const input = document.getElementById('input')
const submitBtn = document.getElementById('submit')
const resultElement = document.getElementById('result')


function isPrimeNumber(inp) {
    const num = Number(inp.value)

    if (num <= 1) {
        return "Число должно быть больше 1";
    }
    const arr = []
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            arr.push(` ${i}`)
        }
    }
    return(arr.length !== 0 ? arr : 'Число простое')
}


function printResult (result){
    resultElement.textContent = result
    if (result.includes('Число должно') === true){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
}

submitBtn.onclick = () => {
    const result = isPrimeNumber(input)
    printResult(result)
}



