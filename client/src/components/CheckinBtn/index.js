import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import { Button } from 'reactstrap'

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function CheckinBtn(props) {
  return (
    <Link className="btn" to="/barView" onClick={props.checkin} id={props.index}>
    Check-In
  </Link>
  );
}

export default CheckinBtn;
