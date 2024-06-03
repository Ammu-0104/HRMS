import React, { useState } from "react";
import avatar from "../../assets/images/avatar.webp";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Onboarding = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="onboarding">
        <div className="card  flex justify-content-start p-5">
          <div className="cards">
            <div className="img flex align-items-center ">
              <img
                src={avatar}
                alt=""
                style={{
                  borderRadius: "50%",
                  width: "5rem",
                  boxShadow: "rgb(198 5 255 / 10%) 0px 9px 30px",
                }}
              />
              <p className="font-semibold ml-3">Ashok</p>
              <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ outline: "0" }}
                className="mx-3"
              />
              <div className="">
                <Button label="">ADD</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
