
import React, { useState, useRef, useEffect } from "react";
import vrbanner from "../../assets/img/vrbanner.jpg";
import vrbanner_mobile from "../../assets/img/vrbanner_mobile.jpg";
import Topbar from "../../Components/Topbar";

const VrGames = () => {
    return (
        <>
            <Topbar />
        <div>
          <div className="d-flex w-100 p-0 m-0">
            <img
              src={vrbanner}
              alt=""
              className="img-fluid rounded-4 d-none d-sm-block"
            />
          </div>
          <div className="d-flex w-100 container">
            <img
              src={vrbanner_mobile}
              alt=""
              className="img-fluid rounded-4 d-block d-sm-none"
            />
          </div>




        </div>

        </>
    );
}

export default VrGames;