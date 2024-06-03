export const CustomerService = {
  getData() {
    return [
      {
        Image: "https://example.com/image1.jpg",
        Name: "John Doe",
        LeaveType: "Annual Leave",
        LeaveFrom: "2024-01-15",
        LeaveTo: "2024-01-20",
        NoOfDays: 6,
        Status: "Approved",
        Reason: "Family vacation",
        Actions: "",
        EmpID: "01",
        balance: "2000",
      },
      
    ];
  },
  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  },

  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";

    return fetch(
      "https://www.primefaces.org/data/customers?" + queryParams
    ).then((res) => res.json());
  },
};
