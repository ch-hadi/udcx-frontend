import React from "react";

const CHeader = () => {
  return <div style={{
    width: "100%", borderBottom: '1px solid rgba(227, 225, 225, 0.5)'
  }}>
    <div className='heading'>
      <div className="heading_content">
        <p style={{ fontStyle: 'italic', fontSize: 40, fontWeight: 500, color: '#2B579A', marginRight: '10px 20px' }}>µDocx</p>
        <p style={{ color: '212529' }}>Create Deliverable</p>
      </div>

      <div><p className="_help">Need Help?</p></div>
    </div>
  </div>;
};

export default CHeader;
