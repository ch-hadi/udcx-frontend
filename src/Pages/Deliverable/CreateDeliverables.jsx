import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CHeader from "../../components/CNavbar/CHeader";
const CreateDeliverables = (props) => {
  // console.log(props);
  const navigate = useNavigate();
  const handleBack = () => {
    props.setDeliverable(false);
    navigate("/");
  };
  useEffect(() => {
    props.setDeliverable(true);
  }, []);
  return (
    <div>
      <CHeader />
    </div>
  );
};

export default CreateDeliverables;
