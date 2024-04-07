import * as React from "react";

export const EXPERIENCE = ({ role, companyName, timeLine, responsibilities }) => {
  const style = {
    whiteSpace: 'pre-line', // or 'pre-wrap' for additional line wrapping
  };
  return (
    <>
      <p className="SECTION_ROLE" style={style}>{role}</p>
      <p className="SECTION_COMPANY_NAME" style={style}>{companyName}</p>
      <p className="SECTION_TIMELINE" style={style}>{timeLine}</p>
      <p className="SECTION_RESPONSIBILITIES" style={style}>{responsibilities}</p>
      <br></br>
    </>
  );
};
