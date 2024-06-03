import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";

export default function AllLeaveRequest() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedLeaveRequest, setSelectedLeaveRequest] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([
    {
      firstname: "John Doe",
      empid: "12345",
      fromdate: "2024-02-21",
      todate: "2024-02-25",
      noOfdays: 5,
      leavetype: "Vacation",
      reason: "Family trip",
      status: "pending",
    },
  ]);
  const Mystyle = {
    width: "20vw",
    fontSize: "18px !important",
    fontWeight: 600,
  };

  const [leaveTypes, setLeaveTypes] = useState([
    { label: "Vacation", value: "Vacation" },
    { label: "Sick Leave", value: "Sick Leave" },
    { label: "Personal Leave", value: "Personal Leave" },
    { label: "Loss of pay", value: "Loss of pay" },
    { label: "Comp - Off", value: "Comp - Off" },
    { label: "Casual Leave", value: "Casual Leave" },
    { label: "Quarantine leave", value: "Quarantine leave" },
    { label: "Marriage leave", value: "Marriage leave" },
    { label: "Work From Home", value: "Work From Home" },
    { label: "Maternity Leave", value: "Maternity Leave" },
    { label: "Privilege Leave", value: "Privilege Leave" },
    { label: "Jury Duty Leave", value: "Jury Duty Leave" },
    { label: "Military Leave", value: "Military Leave" },
    { label: "Others", value: "Others" },
  ]);

  const getStatusColor = (rowData) => {
    switch (rowData.status) {
      case "pending":
        return "#ffbf00";
      case "approved":
        return "#4caf50";
      case "rejected":
        return "#f44336";
      default:
        return "#ffbf00";
    }
  };

  const handleApprove = (rowData) => {
    rowData.status = "approved";
    setLeaveRequests([...leaveRequests]);
  };

  const handleReject = (rowData) => {
    rowData.status = "rejected";
    setLeaveRequests([...leaveRequests]);
  };

  const handleEdit = (rowData) => {
    setSelectedLeaveRequest(rowData);
    setShowEditModal(true);
  };

  const actionTemplate = (rowData) => {
    const isApproved = rowData.status === "approved";
    const isRejected = rowData.status === "rejected";

    return (
      <div className="flex items-center">
        {!isApproved && !isRejected ? (
          <>
            <Button
              className="icon-button"
              icon="pi pi-check"
              style={{
                border: "none",
                background: "#22c55e",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "10px",
                color: "#fff",
              }}
              onClick={() => handleApprove(rowData)}
            />
            <Button
              className="icon-button ml-2"
              icon="pi pi-times"
              style={{
                border: "none",
                background: "#ff3d32",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "10px",
                color: "#fff",
              }}
              onClick={() => handleReject(rowData)}
            />
          </>
        ) : null}
        <Button
          className="icon-button ml-2"
          icon="pi pi-pencil"
          style={{
            border: "none",
            background: "rgb(22,119,255)",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "10px",
            color: "#fff",
          }}
          onClick={() => handleEdit(rowData)}
        />
      </div>
    );
  };

  return (
    <div className="AllleaveReq">
      <DataTable
        value={leaveRequests}
        scrollable
        scrollHeight="400px"
        className=""
      >
        <Column
          field="firstname"
          header="Name"
          style={{ minWidth: "100px" }}
          frozen
          className="font-bold"
        ></Column>
        <Column
          field="empid"
          header="Emp ID"
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="fromdate"
          header="Leave From"
          style={{ minWidth: "120px" }}
        ></Column>
        <Column
          field="todate"
          header="Leave To"
          style={{ minWidth: "120px" }}
        ></Column>
        <Column
          field="noOfdays"
          header="No Of Days"
          style={{ minWidth: "120px" }}
        ></Column>
        <Column
          field="leavetype"
          header="Leave Type"
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="reason"
          header="Reason"
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="status"
          header="Status"
          style={{ minWidth: "100px" }}
          body={(rowData) => (
            <span
              style={{
                backgroundColor: getStatusColor(rowData),
                padding: "6px 12px",
                borderRadius: "4px",
                color: "#fff",
              }}
            >
              {rowData.status}
            </span>
          )}
        />
        <Column
          field="action"
          header="Action"
          body={actionTemplate}
          style={{ minWidth: "100px" }}
        ></Column>
      </DataTable>
      {showEditModal && (
        <Dialog
          visible={showEditModal}
          onHide={() => setShowEditModal(false)}
          header="Edit Leave Request"
          style={Mystyle}
        >
          <div>
            <label
              htmlFor="editLeaveType"
              style={{
                fontWeight: 600,
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Leave Type:
            </label>
            <Dropdown
              id="editLeaveType"
              options={leaveTypes}
              value={selectedLeaveRequest?.leavetype || ""}
              onChange={(e) =>
                setSelectedLeaveRequest({
                  ...selectedLeaveRequest,
                  leavetype: e.value,
                })
              }
              placeholder="Select Leave Type"
              style={{ marginBottom: "30px", fontWeight: 600, width: "80%" }}
            />
          </div>

          <div className="p-dialog-footer text-center" style={{ padding: 0 }}>
            <Button
              style={{
                padding: "8px 10px",
                fontWeight: 500,
                fontsize: "13px",
              }}
              label="Save"
              className="p-button-success"
              onClick={() => {
                setShowEditModal(false);
              }}
            />
            <Button
              style={{
                padding: "8px 10px",
                fontWeight: 500,
                fontsize: "13px",
              }}
              label="Cancel"
              className="p-button-danger"
              onClick={() => setShowEditModal(false)}
            />
          </div>
        </Dialog>
      )}
    </div>
  );
}
