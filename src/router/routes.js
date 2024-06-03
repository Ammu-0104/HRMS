import React from "react";
import { useRoutes } from "react-router-dom";
// import Home from "../pages/Home";
import Login from "../pages/login/index";
import Register from "../pages/register/index";
import Dashboard from "../pages/Dashboard/Dashboard";
import Project from "../pages/Projects/index";
import { ROUTE_CONSTANTS } from "../constants/routeConstants";
import PrivateRoute from "../PrivateRoute";
import AttendanceSheet from "../pages/Attendence/AttendanceSheet";
import EmpAttendance from "../pages/Attendence/EmpAttendance";
import TodayAttendance from "../pages/Attendence/TodayAttendance";
import AllLeaveRequest from "../pages/LeaveManagement/AllLeaveRequest";
import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
import ApplyHistory from "../pages/LeaveManagement/ApplyHistory";
import ApplyPending from "../pages/LeaveManagement/ApplyPending";
import LeaveBalance from "../pages/LeaveManagement/LeaveBalance";
import LeaveApply from "../pages/LeaveManagement/LeaveApply";
import AddEmployee from "../pages/Employee/AddEmployee";
import PaySlip from "../pages/Payroll/PaySlip";
import EmpPayslip from "../pages/Payroll/EmpPayslip";
import AllEmployee from "../pages/Employee/AllEmployee";
import SalaryCertificate from "../pages/Payroll/SalaryCertificate";
import Onboarding from "../pages/OnBoarding/Onboarding";
import Leave from "../pages/MyLeave/Leave";
const routes = [
  {
    path: ROUTE_CONSTANTS.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_CONSTANTS.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTE_CONSTANTS.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTE_CONSTANTS.PROJECT,
        element: <Project />,
      },
      {
        path: ROUTE_CONSTANTS.ATTENDANCESHEET,
        element: <AttendanceSheet />,
      },
      {
        path: ROUTE_CONSTANTS.EMPATTENDANCE,
        element: <EmpAttendance />,
      },
      {
        path: ROUTE_CONSTANTS.TODAYATTENDANCE,
        element: <TodayAttendance />,
      },
      {
        path: ROUTE_CONSTANTS.ALLLEAVEREQUEST,
        element: <AllLeaveRequest />,
      },
      {
        path: ROUTE_CONSTANTS.APPLYLEAVE,
        element: <ApplyLeave />,
      },
      {
        path: ROUTE_CONSTANTS.APPLYHISTORY,
        element: <ApplyHistory />,
      },
      {
        path: ROUTE_CONSTANTS.APPLYPENDING,
        element: <ApplyPending />,
      },
      {
        path: ROUTE_CONSTANTS.LEAVEBALANCE,
        element: <LeaveBalance />,
      },
      {
        path: ROUTE_CONSTANTS.LEAVEAPPLY,
        element: <LeaveApply />,
      },
      {
        path: ROUTE_CONSTANTS.ADDEMPLOYEE,
        element: <AddEmployee />,
      },
      {
        path: ROUTE_CONSTANTS.PAYSLIP,
        element: <PaySlip />,
      },
      {
        path: ROUTE_CONSTANTS.EMPPAYSLIP,
        element: <EmpPayslip />,
      },
      {
        path: ROUTE_CONSTANTS.ALLEMP,
        element: <AllEmployee />,
      },
      {
        path: ROUTE_CONSTANTS.SALARYCERTI,
        element: <SalaryCertificate />,
      },
      {
        path: ROUTE_CONSTANTS.ONBOARD,
        element: <Onboarding />,
      },
      {
        path: ROUTE_CONSTANTS.LEAVE,
        element: <Leave/>,
      },
      // {
      //   path: ROUTE_CONSTANTS.APPLYLEAVE,
      //   element: <ApplyLeave />,
      // },
    ],
  },
];

function Routes() {
  const content = useRoutes(routes);
  return content;
}

export default Routes;
