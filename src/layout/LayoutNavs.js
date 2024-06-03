import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  CalendarOutlined,
  CheckOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { FaMoneyBill } from "react-icons/fa6";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { FaSheetPlastic } from "react-icons/fa6";

import { ROUTE_CONSTANTS } from "../constants/routeConstants";
const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Outline"
    viewBox="0 0 24 24"
    width="14"
    height="14"
    style={{ width: "14px", fill: "#99a2aa", marginRight: "7px" }} // Convert CSS to inline styles
  >
    <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" />
    <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
  </svg>
);
const Request = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="14"
    height="14"
    style={{ width: "14px", fill: "#99a2aa", marginRight: "7px" }}
  >
    <path d="M19,2h-1V1c0-.552-.447-1-1-1s-1,.448-1,1v1H8V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM5,4h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3V10H22v9c0,1.654-1.346,3-3,3Zm-1.168-8.848c.384,.397,.372,1.031-.025,1.414l-4.74,4.568c-.553,.553-1.307,.866-2.108,.866s-1.555-.312-2.121-.879l-2.252-2.092c-.404-.376-.428-1.009-.052-1.413,.378-.405,1.01-.427,1.413-.052l2.278,2.117c.433,.43,1.063,.402,1.439,.026l4.754-4.582c.398-.383,1.03-.371,1.414,.026Z" />
  </svg>
);

const Balance = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="14"
    height="14"
    style={{ width: "14px", fill: "#99a2aa", marginRight: "7px" }}
  >
    <path d="m21,17h-1V4c0-2.206-1.794-4-4-4H3.5C1.57,0,0,1.57,0,3.5v.5c0,1.654,1.346,3,3,3h2v13.5c0,1.929,1.569,3.499,3.499,3.5h12.001c1.93,0,3.5-1.57,3.5-3.5v-.5c0-1.654-1.346-3-3-3ZM3,5c-.551,0-1-.449-1-1v-.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v1.5h-2Zm7,15v.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-5.5h4c.552,0,1-.448,1-1s-.448-1-1-1h-4v-6h3c.552,0,1-.448,1-1s-.448-1-1-1h-3v-1.5c0-.539-.133-1.044-.351-1.5h9.351c1.103,0,2,.897,2,2v5h-3c-.553,0-1,.448-1,1s.447,1,1,1h3v6h-5c-1.654,0-3,1.346-3,3Zm12,.5c0,.827-.673,1.5-1.5,1.5h-8.838c.216-.455.338-.963.338-1.5v-.5c0-.551.449-1,1-1h8c.552,0,1,.449,1,1v.5Z" />
  </svg>
);

const layoutNavs = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Dashboard",
    path: ROUTE_CONSTANTS.DASHBOARD,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "Projects",
    path: ROUTE_CONSTANTS.PROJECT,
  },
  {
    key: "3",
    icon: <UserOutlined />,
    label: "All Employee",
    path: ROUTE_CONSTANTS.ALLEMP,
    header: "Employee",
  },

  {
    key: "4",
    icon: <EditIcon />,
    label: "EmpAttendance",
    path: ROUTE_CONSTANTS.EMPATTENDANCE,
    header: "Attendance",
  },
  {
    key: "5",
    icon: <UserOutlined />,
    label: "Add Employee",
    path: ROUTE_CONSTANTS.ADDEMPLOYEE,
    header: "Employee",
  },
  {
    key: "6",
    icon: <CalendarOutlined />,
    label: "AttendanceSheet",
    path: ROUTE_CONSTANTS.ATTENDANCESHEET,
    header: "Attendance",
  },
  {
    key: "7",
    icon: <CheckOutlined />,
    label: "TodayAttendance",
    path: ROUTE_CONSTANTS.TODAYATTENDANCE,
    header: "Attendance",
  },
  {
    key: "8",
    icon: <FieldTimeOutlined />,
    label: "Apply Leave",
    path: ROUTE_CONSTANTS.LEAVEAPPLY,
    header: "Leave",
  },
  {
    key: "9",
    icon: <Request />,
    label: "All Leave Request",
    path: ROUTE_CONSTANTS.ALLLEAVEREQUEST,
    header: "Leave",
  },
  {
    key: "10",
    icon: <Balance />,
    label: "Leave Balance",
    path: ROUTE_CONSTANTS.LEAVEBALANCE,
    header: "Leave Approvals",
  },

  {
    key: "11",
    icon: <FaMoneyBill />,
    label: "SalaryDetails",
    path: ROUTE_CONSTANTS.SALARYCERTI,
    header: "Payroll",
  },
  {
    key: "12",
    icon: <BsFileEarmarkSpreadsheet />,
    label: "PaySlip",
    path: ROUTE_CONSTANTS.PAYSLIP,
    header: "Payroll",
  },

  {
    key: "13",
    icon: <FaSheetPlastic />,
    label: "Employee Payslip",
    path: ROUTE_CONSTANTS.EMPPAYSLIP,
    header: "Payroll",
  },

  {
    key: "14",
    icon: <FaSheetPlastic />,
    label: "OnBoarding",
    path: ROUTE_CONSTANTS.ONBOARD,
    // header: "Employee",
  },
  {
    key: "15",
    icon: <Balance />,
    label: "Leave",
    path: ROUTE_CONSTANTS.LEAVE,
    header: "MyLeave",
  },
  // {
  //   key: "16",
  //   icon: <Balance />,
  //   label: "ApplyLeave",
  //   path: ROUTE_CONSTANTS.APPLYLEAVE,
  //   header: "MyLeave",
  // },
];

export default layoutNavs;
