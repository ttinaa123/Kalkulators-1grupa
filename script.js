const plusins = document.querySelector('.js-plus');
const multiply = document.querySelector('.js-multiply');
const minus = document.querySelector('.js-minus');
const divide = document.querySelector('.js-divide');
const inputins1 = document.querySelector('.js-input1');
const inputins2 = document.querySelector('.js-input2');
const answer = document.querySelector('.js-result');

let firstValue = inputins1.value
let secondValue = inputins2.value

const Add = (cipars1, cipars2) => {
    return cipars1 + cipars2
}

const Subtract = (cipars1, cipars2) => {
    return cipars1 - cipars2
}

const Multiply = (cipars1, cipars2) => {
    return cipars1 * cipars2
}

const Divide = (cipars1, cipars2) => {
    return cipars1 / cipars2
}

const clear = () => {
    inputins1.value = ""
    inputins2.value = ""
}

plusins.addEventListener
('click', () => {
    answer = Add(parseInt(inputins1.value),
    parseInt(inputins2.value))


    inputins1.value = ""
    inputins2.value = ""

    clear()

})

minus.addEventListener('click',
() => {
   answer.textContent = Subtract
   (parseInt(inputins1.value),
   parseInt(inputins2.value))

   clear()
})


multiply.addEventListener('click',
() => {
    answer.textContent - Multiply
    (parseInt(inputins1.value),
    parseInt(inputins2.value))

    clear()
})


divide.addEventListener('click',
() => {
answer.textContent = Divide
(parseInt(inputins1.value),
parseInt(inputins2.value))

})
