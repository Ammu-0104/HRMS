import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import arrow from "../../assets/images/trending.svg";
import { ProductService } from ".././../Datas/ProductService";
import { Chart } from "primereact/chart";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const columns = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ];

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Total Emp", "Present", "Absent"],
      datasets: [
        {
          data: [40, 40, 20],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };
    options.scales = {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div>
      <div className="dashboard">
        <div className="grid">
          <div className="col-3">
            <div className="card">
              <div className="flex justify-content-between">
                <div className="title">
                  <h3>Total Employee</h3>
                  <p>2500</p>
                </div>
                <div
                  className="icon p-2"
                  style={{ background: "#E5E4FF", color: "#8280FF" }}
                >
                  <i class="fi fi-rr-users"></i>
                </div>
              </div>
              <div className="flex">
                <img src={arrow} alt="" />
                <p className="ml-3 text"> 8.5% Up from yesterday</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="flex justify-content-between">
                <div className="title">
                  <h3>Total Present</h3>
                  <p>11</p>
                </div>
                <div
                  className="icon p-2"
                  style={{ background: "#FBF0D4", color: "#ECB634" }}
                >
                  <i class="fi fi-rr-employee-man-alt"></i>
                </div>
              </div>
              <div className="flex">
                <img src={arrow} alt="" />
                <p className="ml-3 text"> 8.5% Up from yesterday</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="flex justify-content-between">
                <div className="title">
                  <h3>Salary</h3>
                  <p>1,50,000</p>
                </div>
                <div
                  className="icon p-2"
                  style={{ background: "#D1FCE7", color: "#23F38B" }}
                >
                  <i class="fi fi-rr-sack-dollar"></i>
                </div>
              </div>
              <div className="flex">
                <img src={arrow} alt="" />
                <p className="ml-3 text"> 8.5% Up from yesterday</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="flex justify-content-between">
                <div className="title">
                  <h3>Project</h3>
                  <p>2</p>
                </div>
                <div
                  className="icon p-2"
                  style={{ background: "#FEE2D7", color: "#FFA989" }}
                >
                  <i class="fi fi-rr-workflow"></i>
                </div>
              </div>
              <div className="flex">
                <img src={arrow} alt="" />
                <p className="ml-3 text"> 8.5% Up from yesterday</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="col-6">
            <div className="card mt-2">
              <h1>Attendance</h1>
              <div className="flex justify-content-center">
                <Chart
                  type="pie"
                  data={chartData}
                  options={chartOptions}
                  className="w-full md:w-30rem "
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card mt-2">
              <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
