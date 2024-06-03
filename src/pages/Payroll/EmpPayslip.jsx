//payslip
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { jsPDF } from "jspdf";
// import './Salary.css';
import { Link } from "react-router-dom";

export default function EmpPayslip() {
  const initialPayslips = [
    {
      id: 1,
      employeeName: "John Doe",
      empid: "EMP001",
      email: "abc@gmail.com",
      department: "IT",
      designation: "Developer",
      Salary: 20000,
    },
  ];
  const [payslips, setPayslips] = useState([]);
  const [selectedPayslips, setSelectedPayslips] = useState(null);
  useEffect(() => {
    setPayslips(initialPayslips);
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Employee Payslip", 20, 10);
    doc.text("---------------------", 20, 20);

    payslips.forEach((payslip, index) => {
      const yPosition = 30 + index * 40;
      doc.text(`Employee: ${payslip.employeeName}`, 20, yPosition);
      doc.text(`Basic Salary: ${payslip.basicSalary}`, 20, yPosition + 10);
      doc.text(`Allowance: ${payslip.allowance}`, 20, yPosition + 20);
      doc.text(`Deduction: ${payslip.deduction}`, 20, yPosition + 30);
      doc.text(`Net Salary: ${payslip.netSalary}`, 20, yPosition + 40);
      doc.text("-----------------------", 20, yPosition + 150);
    });

    doc.save("Employee_Payslip.pdf");
  };
  return (
    <div>
      <h1 style={{ color: "black" }}>Employee Payslip</h1>
      <div className="card">
        <DataTable
          value={payslips}
          selectionMode="single"
          selection={selectedPayslips}
          onSelectionChange={(e) => setSelectedPayslips(e.value)}
          dataKey="id"
        >
          <Column field="employeeName" header="Employee Name"></Column>
          <Column field="empid" header="Emp Id"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="department" header="Department"></Column>
          <Column field="designation" header="Designation"></Column>
          <Column field="Salary" header="Salary"></Column>
          <Column
            header="Payslip"
            body={(rowData, rowIndex) => (
              <>
                <div className="flex justify-content-start align-items-center">
                  <Link to="/PaySlip">
                    <Button
                      className="p-button-primary"
                      style={{ borderRadius: "50%", padding: "12px 15px" }}
                      // onClick={downloadPDF}
                    >
                      <i class="fi fi-rr-eye"></i>
                    </Button>
                  </Link>
                </div>
              </>
            )}
          ></Column>
          <Column
            header="Salarycertificate"
            body={(rowData, rowIndex) => (
              <div className="flex justify-content-start align-items-center">
                <Link to="/SalaryCertificate">
                  <Button
                    className="p-button-primary"
                    style={{ borderRadius: "50%", padding: "12px 15px" }}
                  >
                    <i class="fi fi-rs-diploma"></i>
                  </Button>
                </Link>
              </div>
            )}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
