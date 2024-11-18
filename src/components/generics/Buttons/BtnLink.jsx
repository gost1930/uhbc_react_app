import React from "react";
import { Link } from "react-router-dom";
const BtnLink = ({path , titel}) => {
  return (
    <Link to={path} className="text-green-600 text-lg">
      {titel}
    </Link>
  );
};

export default BtnLink;
