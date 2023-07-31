import styles from "./Form.module.css";
import { FormActions } from "../FormActions";
import { useState } from "react";

const initialFormData = {
  currentSavings: 0,
  yearlyContribution: 0,
  expectedReturn: 0,
  duration: 0,
};

export const Form = ({ setYearlyData }) => {
  const [formData, setFormData] = useState(initialFormData);

  const calculateHandler = (userInput) => {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    const investmentsData = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const newData = {
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      };

      investmentsData.push(newData);
    }

    setYearlyData(investmentsData);
  };
  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevFormData) => {
      const modifiedData = { ...prevFormData };
      modifiedData[id] = +value;

      return modifiedData;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    calculateHandler(formData);
  };
  const handleReset = () => {
    setFormData({
      currentSavings: 0,
      yearlyContribution: 0,
      expectedReturn: 0,
      duration: 0,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="currentSavings">Current Savings ($)</label>
          <input
            type="number"
            id="currentSavings"
            value={formData.currentSavings}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearlyContribution"
            value={formData.yearlyContribution}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expectedReturn">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expectedReturn"
            value={formData.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </p>
      </div>
      <FormActions handleReset={handleReset} />
    </form>
  );
};
