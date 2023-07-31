import logo from "./assets/investment-calculator-logo.png";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { useState } from "react";
import { InvestmentResults } from "./components/InvestmentResults/InvestmentResults";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  return (
    <div>
      <Header logo={logo} />
      <Form setYearlyData={setYearlyData} />
      {!yearlyData || !yearlyData.length ? (
        <p style={{ textAlign: "center" }}>No data available</p>
      ) : (
        <InvestmentResults
          yearlyData={yearlyData}
          initialInvestment={yearlyData}
        />
      )}
    </div>
  );
}

export default App;
