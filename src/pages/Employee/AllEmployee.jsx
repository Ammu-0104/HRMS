//employee
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";

export default function AllEmployee() {
  const initialProducts = [
    {
      id: 1,
      code: "EMP001",
      name: "John Doe",
      department: "IT",
      designation: "Developer",
      mobile: "7085442346",
      email: "abc@gmail.com",
      joiningdate: "01-01-2024",
    },
    {
      id: 2,
      code: "EMP002",
      name: "Rakesh",
      department: "IT",
      designation: "Tester",
      mobile: "7083427928",
      email: "abc@gmail.com",
      joiningdate: "01-02-2024",
    },
    
  ];

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [displayModal, setDisplayModal] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  const openEditModal = (rowData, rowIndex) => {
    setEditedData({ ...rowData });
    setEditIndex(rowIndex);
    setDisplayModal(true);
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

      setDisplayModal(false);
    }
  };

  const deleteRow = (rowData) => {
    const updatedProducts = products.filter(
      (product) => product.id !== rowData.id
    );
    setProducts(updatedProducts);
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
  const editBodyTemplate = (employee, index) => {
    return (
      <>
      <Link to="/AddEmployee">

     
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          style={{ marginRight: "10px" }}
        />
         </Link>
      </>
    );
  };

  return (
    <div>
      <h1 style={{ color: "black" }}>Employee</h1>
      <div className="card">
        <div className="flex justify-content-center align-items-center mb-4 gap-2"></div>
        <DataTable
          key={JSON.stringify(products)}
          value={products}
          selectionMode={rowClick ? null : "checkbox"}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "2rem" }}
          ></Column>
          <Column field="name" header="Name"></Column>
          <Column field="code" header="Emp Id"></Column>
          <Column field="department" header="Department"></Column>
          <Column field="designation" header="Designation"></Column>
          <Column field="mobile" header="Mobile"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="joiningdate" header="Joining Date"></Column>
          <Column
            header="Action"
            body={(rowData, rowIndex) => statusBodyTemplate(rowData, rowIndex)}>  
          </Column>
          <Column header="Edit" body={(rowData, rowIndex) => editBodyTemplate(rowData, rowIndex)} />
        </DataTable>
      </div>

      {/* Edit Modal */}
      <Dialog
        visible={displayModal}
        style={{ width: "50vw" }}
        onHide={() => setDisplayModal(false)}
        header="Edit Employee"
      >
        <div className="p-grid p-fluid">
          <div className="p-col-12">
            <label>Name</label>
            <InputText
              value={editedData.name || ""}
              onChange={(e) =>
                setEditedData({ ...editedData, name: e.target.value })
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
            <label>Mobile</label>
            <InputText
              value={editedData.mobile}
              onChange={(e) =>
                setEditedData({ ...editedData, mobile: e.target.value })
              }
            />
          </div>
          <div className="p-col-12">
            <label>Email</label>
            <InputText
              value={editedData.email}
              onChange={(e) =>
                setEditedData({ ...editedData, email: e.target.value })
              }
            />
          </div>
          <div className="p-col-12">
            <label>Joining Date</label>
            <InputText
              value={editedData.joiningdate}
              onChange={(e) =>
                setEditedData({ ...editedData, joiningdate: e.target.value })
              }
            />
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
