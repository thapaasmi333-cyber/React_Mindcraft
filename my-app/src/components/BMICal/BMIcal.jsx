import { useState } from "react";

export default function BMICal() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();

    const heightInMeters = height / 100;
    const result = weight / (heightInMeters * heightInMeters);

    setBmi(result.toFixed(2));
  };
  const getCategory = () => {
    if (bmi < 40) {
      return "underweight";
    } else if (bmi < 60) {
      return "normal weight";
    } else if (bmi < 80) {
      return "over weight";
    } else {
      return "Obese";
    }
  };
  return (
    <>
      <h1> BMI CALCULATOR</h1>

      <form onSubmit={calculateBMI}>
        <input
          type="number"
          placeholder="Height in CM"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <br></br>
        <input
          type="number"
          placeholder="Weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br></br>
        <button type="submit"> Calculate BMI </button>
      </form>

      {bmi && (
        <>
          <h2>BMI : {bmi}</h2>
          <p>Category : {getCategory()}</p>
        </>
      )}
    </>
  );
}
