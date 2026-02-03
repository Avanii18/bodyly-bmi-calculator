const form = document.querySelector("form");
const resultSection = document.getElementById("result");
const resultText = document.querySelector(".result-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    
    if (!weight || !heightCm) {
        resultText.textContent = "Please enter both height and weight.";
        resultSection.style.backgroundColor = "#ffffff";
        return;
    }
    
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const bmiValue = bmi.toFixed(2);
    
    let message = "";
    
    if (bmi < 18.5) {
        message = "This BMI falls in a lower range. Your body may need a little extra care.";
        resultSection.style.backgroundColor = "#DFF5E1";
    } else if (bmi >= 18.5 && bmi < 25) {
        message = "This BMI is within a healthy range. Keep nurturing your body.";
        resultSection.style.backgroundColor = "#C9F3E0";
    } else if (bmi >= 25 && bmi < 30) {
        message = "This BMI falls in a higher range. Small mindful steps can make a difference.";
        resultSection.style.backgroundColor = "#FFF7C0";
    } else {
        message = "This BMI is in a very high range. Support and guidance can be helpful.";
        resultSection.style.backgroundColor = "#F9D7D7";
    }

    resultText.textContent = `Your BMI is ${bmiValue}. ${message}`;
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
    form.reset();
    resultText.textContent = "Enter your details to see your BMI.";
    resultSection.style.backgroundColor = "#ffffff"; 
});

