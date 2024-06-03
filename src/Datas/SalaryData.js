import React from "react";
import SalaryCertificate from "../pages/Payroll/SalaryCertificate";
const salaryData = [
  { name: "John Doe", salary: 50000 },
  { name: "Jane Doe", salary: 60000 },
  // Add more salary data as needed
];
const SalaryData = () => {
  return (
    <div>
      <SalaryCertificate salaryData={salaryData} />
    </div>
  );
};

export default SalaryData;
