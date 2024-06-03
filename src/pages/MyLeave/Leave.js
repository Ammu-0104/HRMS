import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import * as yup from 'yup';


export default function Leave() {
  const [products, setProducts] = useState([]);
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [displayAddModal, setDisplayAddModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({
    LeaveFrom: "",
    LeaveTo: "",
    NoOfDays: 0, 
  });
  

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

  const calculateNoOfDays = () => {
    const from = new Date(editedData.LeaveFrom);
    const to = new Date(editedData.LeaveTo);
  
    const fromUTC = Date.UTC(
      from.getFullYear(),
      from.getMonth(),
      from.getDate()
    );
    const toUTC = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  
    const timeDiff = Math.abs(toUTC - fromUTC);
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; 
  
    setEditedData((prevData) => ({ ...prevData, NoOfDays: diffDays }));
  };
  
  useEffect(() => {
    calculateNoOfDays();
  }, [editedData.LeaveFrom, editedData.LeaveTo]);
  
  const initialProducts = [
    {
      Name: "John Doe",
      EmpID: "EMP001",
      LeaveFrom: "2024-03-01",
      LeaveTo: "2024-03-05",
      NoOfDays: 5,
      LeaveType: "Vacation",
      Reason: "Family trip",
      Status: "approved",
    },
  ];

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  const openEditModal = (rowData, rowIndex) => {
    setEditedData({ ...rowData });
    setEditIndex(rowIndex);
    setDisplayEditModal(true);
  };

  const openAddModal = () => {
    setEditedData({
      Name: "",
      EmpID: "",
      LeaveFrom: "",
      LeaveTo: "",
      NoOfDays: 0, 
      LeaveType: "",
      Reason: "",
    });
    setDisplayAddModal(true);
  };

  const saveChanges = () => {
    if (editIndex !== null) {
      console.log("Edited Data:", editedData);

      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[editIndex] = editedData;
        console.log("Updated Products:", updatedProducts);
        return updatedProducts;
      });

      setDisplayEditModal(false);
    } else {
     
      setProducts((prevProducts) => [...prevProducts, editedData]);
      setDisplayAddModal(false);
    }
  };

  const deleteRow = (rowData) => {
    const updatedProducts = products.filter(
      (product) => product.id !== rowData.id
    );
    setProducts(updatedProducts);
  };

  const getStatusColor = (rowData) => {
    return "";
  };

  const today = new Date().toISOString().split("T")[0];

  const actionTemplate = (rowData) => {
    return (
      <div className="flex items-center">
       <button
                 icon="pi pi-pencil"
 className="p-button-rounded p-button-success p-mr-2"
 style={{ marginRight: "10px" }}

  onClick={() => openEditModal(rowData)}
>
  <i className="pi pi-pencil" style={{ fontSize: '1rem' }}></i>
</button>

<button
  className="icon-button p-2"
  style={{ background: "none", border: "none" }}
  onClick={() => deleteRow(rowData)}
>
  <i className="pi pi-trash" style={{ fontSize: '1rem' }}></i>
</button>

      </div>
    );
  };

  return (
    <div className="card">

      <div className="flex align-item-end justify-content-end m-2">
        <Button
          // icon="pi pi-plus"
          className="p-button-primary p-datatable p-datatable-thead"
          label="Apply Leave"
          onClick={openAddModal}
        />
      </div>
    

      <DataTable value={products} scrollable scrollHeight="400px" className="">
        <Column field="LeaveFrom" header="Date From" style={{ minWidth: "120px" }} />
        <Column field="LeaveTo" header="Date To" style={{ minWidth: "120px" }} />
        <Column field="NoOfDays" header="No of Days" style={{ minWidth: "120px" }} />
        <Column field="LeaveType" header="Leave Type" style={{ minWidth: "100px" }} />
        <Column field="Reason" header="Reason" style={{ minWidth: "100px" }} />
        <Column
          field="Status"
          header="Status"
          style={{ minWidth: "100px" }}
          body={(rowData) => (
            <span style={{ color: getStatusColor(rowData) }}>
              {rowData.Status}
            </span>
          )}
        />
        <Column
          field="Action"
          header="Action"
          body={actionTemplate}
          style={{ minWidth: "100px" }}
        />
      </DataTable>

      {/* Edit Modal */}
      <Dialog
        visible={displayEditModal}
        style={{ width: "50vw" }}
        onHide={() => setDisplayEditModal(false)}
        header="Edit Employee"
      >
       <div>
  <label htmlFor="leaveFrom">Date From:</label>
  <input
    type="date"
    disabled
    id="leaveFrom"
    value={editedData?.LeaveFrom || ""}
    onChange={(e) => {
      setEditedData({ ...editedData, LeaveFrom: e.target.value });
    }}
    min={today}
  />
</div>
<div>
  <label htmlFor="leaveTo">Date To:</label>
  <input
    type="date"
    id="leaveTo"
    value={editedData?.LeaveTo || ""}
    onChange={(e) => {
      setEditedData({ ...editedData, LeaveTo: e.target.value });
    }}
    min={today}
  />
</div>
<div>
  <label htmlFor="noOfDays">No Of Days:</label>
  <input
    type="number"
    id="noOfDays"
    value={editedData?.NoOfDays || ""}
    onChange={(e) =>
      setEditedData({ ...editedData, NoOfDays: e.target.value })
    }
    disabled
  />
</div>

        <div>
          <label htmlFor="leaveType">Leave Type:</label>
          <input
            type="text"
            id="leaveType"
            value={editedData?.LeaveType || ""}
            onChange={(e) =>
              setEditedData({ ...editedData, LeaveType: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <input
            type="text"
            id="reason"
            value={editedData?.Reason || ""}
            onChange={(e) =>
              setEditedData({ ...editedData, Reason: e.target.value })
            }
          />
        </div>

        <div className="p-dialog-footer">
          <Button
            label="Save"
            className="p-button-success"
            onClick={saveChanges}
          />
          <Button
            label="Cancel"
            className="p-button-danger"
            onClick={() => setDisplayEditModal(false)}
          />
        </div>
      </Dialog>

      {/* Add Modal */}
      <Dialog
        visible={displayAddModal}
        style={{ width: "50vw" }}
        onHide={() => setDisplayAddModal(false)}
        header="Add Employee"
      >
       <div>
  <label htmlFor="leaveFrom">Date From:</label>
  <input
    type="date"
    id="leaveFrom"
    value={editedData?.LeaveFrom || ""}
    onChange={(e) => {
      setEditedData({ ...editedData, LeaveFrom: e.target.value });
    }}
    min={today}
  />
</div>
<div>
  <label htmlFor="leaveTo">Date To:</label>
  <input
    type="date"
    id="leaveTo"
    value={editedData?.LeaveTo || ""}
    onChange={(e) => {
      setEditedData({ ...editedData, LeaveTo: e.target.value });
    }}
    min={today}
  />
</div>
<div>
  <label htmlFor="noOfDays">No Of Days:</label>
  <input
    type="number"
    id="noOfDays"
    value={editedData?.NoOfDays || ""}
    onChange={(e) =>
      setEditedData({ ...editedData, NoOfDays: e.target.value })
    }
    disabled
  />
</div>

        <div>
          <label htmlFor="leaveType">Leave Type:</label>
          <Dropdown
            id="leaveType"
            value={editedData?.LeaveType || ""}
            options={leaveTypes}
            onChange={(e) => setEditedData({ ...editedData, LeaveType: e.value })}
            placeholder="Select Leave Type"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <input
            type="text"
            id="reason"
            value={editedData?.Reason || ""}
            onChange={(e) =>
              setEditedData({ ...editedData, Reason: e.target.value })
            }
          />
        </div>

        <div className="p-dialog-footer">
          <Button
            label="Save"
            className="p-button-success"
            onClick={saveChanges}
          />
          <Button
            label="Cancel"
            className="p-button-danger"
            onClick={() => setDisplayAddModal(false)}
          />
        </div>
      </Dialog>
    </div>
  );
}
