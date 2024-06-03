import React, { useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import logo from "../../assets/images/KodukkuLogo.svg";
import html2pdf from "html2pdf.js";

const PaySlip = () => {
  const [date, setDate] = useState(null);
  //   const [visible, setVisible] = useState(false);
  const downloadPdf = () => {
    const element = document.getElementsByClassName("payslipmodal")[0];
    html2pdf().from(element).save();
  };

  return (
    <div>
      <div className="card" style={{ padding: "15px 20px " }}>
        <div className="payslip">
          <div className="payslip-header">
            <div
              className="icons m-3 flex justify-content-end"
              style={{
                borderBottom: "2px solid #f0f0f0",
                paddingBottom: "20px",
              }}
            >
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                view="month"
                dateFormat="mm/yy"
                style={{ width: "10%" }}
                className="mr-3"
                placeholder="Date"
              />
              {/* <Button
                icon="fi fi-rs-eye"
                onClick={() => setVisible(true)}
                className="btn-button mx-2"
              /> */}
              <Button
                onClick={downloadPdf}
                icon="fi fi-rr-download"
                className="px-3 btn-button"
              ></Button>
            </div>
          </div>
        </div>

        <div className="payslipmodal px-3">
          <div
            className="modal-headers flex justify-content-between"
            id="modal-headers"
          >
            <div className="flex align-items-center">
              <img src={logo} alt="" style={{ width: "5rem" }} />
              <div className="head ml-4">
                <h1 className="m-head" style={{ color: "#3694ED" }}>
                  Kodukku Classifieds Private Limited
                </h1>
                <p
                  className="m-addres font-semibold"
                  style={{ fontSize: "14px" }}
                >
                  253 Thanthai Periyar Nagar, Pallikaranai, Chennai, Tamil Nadu
                  600100.
                </p>
              </div>
            </div>
          </div>
          <div className="m-body">
            <h3 className="text-center my-4 fs-5">Payslip February ,2023</h3>
            <h3>Employee details</h3>
            <div className="grid mt-3">
              <div className="col-6">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td className="border">Aravindh</td>
                    </tr>
                    <tr>
                      <td className="top">Employee No</td>
                      <td className="border">EMP123ACB </td>
                    </tr>
                    <tr>
                      <td className="top">Joining Date</td>
                      <td className="border">13 - 01 - 2023</td>
                    </tr>
                    <tr>
                      <td className="top">Bank Name</td>
                      <td className="border">HDFC BANK </td>
                    </tr>
                    <tr>
                      <td className="top">Bank Account No</td>
                      <td className="border">1564613213211621</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-6">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Department</td>
                      <td>DEVELOPER</td>
                    </tr>
                    <tr>
                      <td>Designation</td>
                      <td>React Js Developer</td>
                    </tr>
                    <tr>
                      <td>Total Days</td>
                      <td>30 DAYS</td>
                    </tr>
                    <tr>
                      <td>Worked Days</td>
                      <td>26 DAYS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid mt-3">
              <div className="col-6">
                <table className="tables">
                  <thead>
                    <tr>
                      <th className="t-l">Earnings</th>
                      <th className="t-r">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BASIC</td>
                      <td>7,521.00</td>
                    </tr>
                    <tr>
                      <td>HRA</td>
                      <td>7,521.00</td>
                    </tr>
                    <tr>
                      <td>CONVEYANCE</td>
                      <td>7,521.00</td>
                    </tr>
                    <tr>
                      <td>MEDICAL ALLOWANCE</td>
                      <td>7,521.00</td>
                    </tr>
                    <tr>
                      <td>SPECIAL ALLOWANCE</td>
                      <td>7,521.00</td>
                    </tr>
                    <tr>
                      <td className="b-l">Total</td>
                      <td className="b-r">7,521.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-6">
                <table className="tables">
                  <thead>
                    <tr>
                      <th className="t-l">Deductions</th>
                      <th className="t-r">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PF</td>
                      <td>7,521.00</td>
                    </tr>
                    <tr>
                      <td>ESI</td>
                      <td>7,521.00</td>
                    </tr>
                    <tr>
                      <td>PROF TAX</td>
                      <td>7,521.00</td>
                    </tr>
                    <tr>
                      <td className="b-l">Total</td>
                      <td className="b-r">7,521.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="font-semibold mt-3">
              NetPay <span>Rs : 15,000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaySlip;
