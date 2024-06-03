import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  date: Yup.date().required('Date is required'),
  department: Yup.string().required('Department is required'),
  designation: Yup.string().required('Designation is required'),
  checkin: Yup.string().required('Check In is required'),
  checkout: Yup.string().required('Check Out is required'),
  workinghours: Yup.string().required('Working Hours is required'),
  shift: Yup.string().required('Shift is required'),
  status: Yup.string().required('Status is required'),
});

export default function EmpAttendance() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [selectedProducts, setSelectedProducts] = useState(null);

  useEffect(() => {
    const initialData = [
      {
        id: 1,
        date: "2022-02-21",
        department: "IT",
        designation: "Developer",
        checkin: "09:00 AM",
        checkout: "05:00 PM",
        workinghours: "8 hours",
        shift: "Day Shift",
        status: "Present",
      },
    ];

    setCustomers(initialData);
    setProducts(initialData);
  }, []);

  const onRowEditComplete = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;

    setProducts(_products);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const deleteRow = (rowData) => {
    const updatedProducts = products.filter(
      (product) => product.id !== rowData.id
    );

    setProducts(updatedProducts);
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(editedData, { abortEarly: false });
      setValidationErrors({});
      return true;
    } catch (errors) {
      const errorsMap = {};
      errors.inner.forEach(error => {
        errorsMap[error.path] = error.message;
      });
      setValidationErrors(errorsMap);
      return false;
    }
  };

  const statusBodyTemplate = (product, index) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => openEditModal(product, index)}
          style={{ marginRight: "10px" }}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => deleteRow(product)}
        />
      </>
    );
  };

  const openEditModal = (rowData, rowIndex) => {
    setEditedData({ ...rowData });
    setEditIndex(rowIndex);
    setDisplayModal(true);
  };

  const saveChanges = async () => {
    const isValid = await validateForm();
    
    if (isValid) {
      if (editIndex !== null) {
        setProducts((prevProducts) => {
          const updatedProducts = [...prevProducts];
          updatedProducts[editIndex] = editedData;
          return updatedProducts;
        });
        setDisplayModal(false);
      }
    }
  };


  return (
    <div>
      <h2 className="pb-6 att_sheet">Employee Attendance</h2>
      <div className="card">
        <div className="grid justify-content-between">
          <div className="col-2 col-md-2 p-3">
            <h4 className="">Merlin Smith</h4>
            <p>Software Developer</p>
          </div>
          <div className="col-2 col-md-2 p-3">
            <h4 className="">Employee ID</h4>
            <p>IM062587UT</p>
          </div>
          <div className="col-2 col-md-2 p-3">
            <h4 className="">Joining Date</h4>
            <p>12 January 2015</p>
          </div>
          <div className="col-2 col-md-2 p-3">
            <h4 className="">Department</h4>
            <p>IT</p>
          </div>
          {/* <div className="col-2 col-md-2 p-3">
          <h6 className="att_h6">Designation</h6>
          <p>Software Developer</p>
        </div> */}
        </div>
        {/* <div className="card"> */}
        {/* <ToggleButton
          checked={actionFrozen}
          onChange={(e) => setActionFrozen(e.value)}
          onIcon="pi pi-lock"
          offIcon="pi pi-lock-open"
          onLabel="Edit"
          offLabel="Edit"
          style={{ width: "150px" }}
        /> */}
      </div>

      <DataTable
        stripedRows
        value={customers}
        editMode="row"
        dataKey="id"
        selectionMode="single"
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        onRowEditComplete={onRowEditComplete}
        scrollable
        scrollHeight="500px"
        className="mt-4"
      >
        <Column
          field="date"
          header="Date"
          style={{ minWidth: "150px" }}
          frozen
          className="font-bold"
          headerStyle={{
            borderTopLeftRadius: "14px",
            borderBottomLeftRadius: "14px",
          }}
        ></Column>

        <Column
          field="department"
          header="Department"
          style={{ minWidth: "150px" }}
        ></Column>
        <Column
          field="designation"
          header="Designation"
          style={{ minWidth: "150px" }}
        ></Column>
        <Column
          field="checkin"
          header="Check-In"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          field="checkout"
          header="Check-Out"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          field="workinghours"
          header="Working Hours"
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          field="shift"
          header="Shift"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          field="status"
          header="Status"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          header="Action"
          body={(rowData, rowIndex) => statusBodyTemplate(rowData, rowIndex)}
          style={{ minWidth: "200px" }}

        ></Column>
        {Object.entries(validationErrors).map(([field, error]) => (
          <div key={field} className="p-col-12 validation-error">
            {error}
          </div>
        ))}
      </DataTable>
      {/* Edit modal */}
      <Dialog
        visible={displayModal}
        style={{ width: "50vw" }}
        onHide={() => setDisplayModal(false)}
        header="Edit Employee"
      >
        <div className="p-grid p-fluid">
          <div className="p-col-12">
            <label>Date</label>
            <InputText
              value={editedData.date || ""}
              onChange={(e) =>
                setEditedData({ ...editedData, date: e.target.value })
              }
            />
          </div>
          <div className="p-col-12">
            <label>Department</label>
            <InputText
              value={editedData.department}
              onChange={(e) =>
                setEditedData({ ...editedData, department: e.target.value })
              }
            />
          </div>
          <div className="p-col-12">
            <label>Designation</label>
            <InputText
              value={editedData.designation}
              onChange={(e) =>
                setEditedData({ ...editedData, designation: e.target.value })
              }
            />
          </div>
          <div className="p-col-12">
            <label>Check In</label>
            <InputText
              value={editedData.checkin}
              onChange={(e) =>
                setEditedData({ ...editedData, checkin: e.target.value })
              }
            />
          </div>
          <div className="p-col-12">
            <label>Check Out</label>
            <InputText
              value={editedData.checkout}
              onChange={(e) =>
                setEditedData({ ...editedData, checkout: e.target.value })
              }
            />
          </div>
          <div className="p-col-12">
            <label>Working Hours</label>
            <InputText
              value={editedData.workinghours}
              onChange={(e) =>
                setEditedData({ ...editedData, workinghours: e.target.value })
              }
            />
          </div>
          <div className="p-col-12">
            <label>Shift</label>
            <InputText
              value={editedData.shift}
              onChange={(e) =>
                setEditedData({ ...editedData, shift: e.target.value })
              }
            />
          </div>
          <div className="p-col-12">
            <label>Status</label>
            <InputText
              value={editedData.status}
              onChange={(e) =>
                setEditedData({ ...editedData, status: e.target.value })
              }
            />
             {Object.entries(validationErrors).map(([field, error]) => (
            <div key={field} className="p-col-12 validation-error">
              {error}
            </div>
          ))}
          </div>
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
            onClick={() => setDisplayModal(false)}
          />
        </div>
      </Dialog>
    </div>
  );
}
