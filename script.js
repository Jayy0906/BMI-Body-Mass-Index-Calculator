function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const resultDiv = document.getElementById("result");
  
    // Clear previous result
    resultDiv.innerHTML = "";
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDiv.innerHTML = `<p class="text-danger">Please enter valid inputs!</p>`;
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(1);
    let feedback = "";
    let feedbackClass = "";
  
    if (bmi < 18.5) {
      feedback = "Underweight";
      feedbackClass = "result-underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      feedback = "Normal weight";
      feedbackClass = "result-normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      feedback = "Overweight";
      feedbackClass = "result-overweight";
    } else {
      feedback = "Obese";
      feedbackClass = "result-obese";
    }
  
    resultDiv.innerHTML = `
      <p>Your BMI is: <strong>${bmi}</strong></p>
      <p class="${feedbackClass}">${feedback}</p>
    `;
  }
  