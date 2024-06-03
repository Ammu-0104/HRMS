import React from "react";
import logo from "../../assets/images/KodukkuLogo.svg";
import html2pdf from "html2pdf.js";

const SalaryCertificate = () => {
  const downloadPdf = () => {
    const element = document.getElementsByClassName("salary-certi")[0];
    html2pdf().from(element).save();
  };

  return (
    <div>
      <div className="salary-certi card p-5 border">
        <div className="title flex align-items-center">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <div className="title mx-3">
            <h2 className="text-4xl " style={{ color: "#68bcff" }}>
              Kodukku Classifieds Private Limited
            </h2>
            <p className="font-semibold">
              253 Thanthai Periyar Nagar, Pallikaranai, Chennai, Tamil Nadu
              600100.
            </p>
          </div>
        </div>
        <h4 className="mt-5 font-semibold">
          Date: <span>25-01-24</span>
        </h4>
        <h4 className="mt-5 font-semibold">To</h4>
        <p className="ml-3">Bank Of India ,</p>
        <p className="ml-3">
          This is to certify that employment details are below
        </p>
        <table
          className="my-8 w-6"
          style={{ border: "1px solid black", borderSpacing: "0" }}
        >
          <tbody>
            <tr>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                NAME
              </td>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                Aravindh
              </td>
            </tr>
            <tr>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                Employee No
              </td>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                EMP123ACB{" "}
              </td>
            </tr>
            <tr>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                Joining Date
              </td>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                13 - 01 - 2023
              </td>
            </tr>
            <tr>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                Department
              </td>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                DEVELOPER
              </td>
            </tr>
            <tr>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                Designation
              </td>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                REACT DEVELOPER
              </td>
            </tr>
            <tr>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                Salary
              </td>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                Rs 15,000
              </td>
            </tr>
            <tr>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                Status
              </td>
              <td
                className="p-2"
                style={{ border: "1px solid black", borderSpacing: "0" }}
              >
                PERMANENT
              </td>
            </tr>
          </tbody>
        </table>
        <p className="my-3">
          This certificate is being issued upon the request of the employee. We
          confirm that the above details are true and accurate to the best of
          our knowledge.
        </p>
        <p className="my-3">Sincerely</p>
        <p className="mt-3">HR NAME</p>
        <p className="">HR DESIGNATION</p>
        <p className="my-3">
          This certificate is issued Electronically hence no sign and stamp
          required .
        </p>
      </div>
      <button onClick={downloadPdf}>Download Pdf</button>
    </div>
  );
};

export default SalaryCertificate;
