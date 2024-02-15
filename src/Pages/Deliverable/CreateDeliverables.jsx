import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CHeader from "../../components/CNavbar/CHeader";
import CForm from "../../components/CForm/CForm";
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
    <div style={{ width: '100%' }}>
      <CHeader />
      <CForm />
    </div>
  );
};

export default CreateDeliverables;
