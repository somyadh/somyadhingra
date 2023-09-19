import * as React from "react";

export const SIDEBAR = ({ contact, industryKnowledge, toolsAndTechnologies, otherSkills, socials }) => {
  const style = {
    whiteSpace: 'pre-line', // or 'pre-wrap' for additional line wrapping
  };
  return (
    <>
      <div className="SIDEBAR">
        <p className="SIDEBAR_HEADING" style={style}>Contact</p>
        <p style={style}>{contact}</p>
        <br></br>
        <p className="SIDEBAR_HEADING" style={style}>Industry Knowledge</p>
        <p style={style}>{industryKnowledge}</p>
        <br></br>
        <p className="SIDEBAR_HEADING" style={style}>Tools and Technologies</p>
        <p style={style}>{toolsAndTechnologies}</p>
        <br></br>
        <p className="SIDEBAR_HEADING" style={style}>Other Skills</p>
        <p style={style}>{otherSkills}</p>
        <br></br>
        <p className="SIDEBAR_HEADING" style={style}>Socials</p>
        <p style={style}>{socials}</p>
      </div>
    </>
  );
};
