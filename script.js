// Function to calculate the day of the week
function calculateDayOfWeek(birthdate) {
    const dob = new Date(birthdate);
    const CC = parseInt(dob.getFullYear().toString().slice(0, 2));
    const YY = parseInt(dob.getFullYear().toString().slice(2));
    const MM = dob.getMonth() + 1;
    const DD = dob.getDate();
  
    const dayOfWeekIndex = ( ( (CC/4) - 2*CC - 1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) % 7;
    return Math.floor(dayOfWeekIndex);
  }
  
  // Function to get Akan name based on gender and day of the week
  function getAkanName(dayOfWeekIndex, gender) {
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    if (gender === "male") {
      return maleNames[dayOfWeekIndex];
    } else {
      return femaleNames[dayOfWeekIndex];
    }
  }
  
  // Function to display result
  function displayResult(akanName) {
    document.getElementById('result').innerText = `Your Akan name is ${akanName}`;
  }
  
  // Form submission event listener
  document.getElementById('akanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
  
    const dayOfWeekIndex = calculateDayOfWeek(birthdate);
    const akanName = getAkanName(dayOfWeekIndex, gender);
    displayResult(akanName);
  });
  