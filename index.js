const btn = document.getElementById('btn');
const bmiResult = document.getElementById('bmi-result');
const weightCondition = document.getElementById('weight-condition');

function calculateBMI() {
    const heightValue = document.getElementById('height').value /100
    const weightValue = document.getElementById('weight').value
    const bmiValue = weightValue / (heightValue * heightValue)
    bmiResult.value = bmiValue
    if (bmiValue < 18.5) {
        weightCondition.innerText = "Under Weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightCondition.innerText = "Normal Weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightCondition.innerText = "Over Weight";
    }
    else{
        weightCondition.innerText = "Obesity";
    }
}
btn.addEventListener("click", calculateBMI)