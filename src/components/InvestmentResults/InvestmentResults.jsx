import styles from "./InvestmentResults.module.css";

export const InvestmentResults = ({ yearlyData, initialInvestment }) => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((yearData) => {
          const totalInterest = yearData.savingsEndOfYear - yearData.yearlyContribution * yearData.year;
          const totalInvestedCapital = yearData.yearlyContribution * yearData.year;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearData.yearlyInterest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
