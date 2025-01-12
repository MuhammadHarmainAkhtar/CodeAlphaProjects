document.getElementById("calculate-btn").addEventListener("click", () => {
  console.log("BY MUHAMMAD HARMAIN AKHTAR");
  const dateOfBirth = document.getElementById("dob").value;

  if (!dateOfBirth) {
    alert("Please Select Valid Date of Birth");
    return;
  }

  const dobDate = new Date(dateOfBirth);
  const presentDay = new Date();

  let age = presentDay.getFullYear() - dobDate.getFullYear();
  const monthDifference = presentDay.getMonth() - dobDate.getMonth();
  const dayDifference = presentDay.getDate() - dobDate.getDate();

  //TO CHECK IF BIRTHDAY HAS PASSED IN THE PRESENT YEAR OR NOT, TO INCREMENT THE AGE!

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  const calculatedAge = document.getElementById("result");
  calculatedAge.textContent = `You are ${age} years old.`;
});
