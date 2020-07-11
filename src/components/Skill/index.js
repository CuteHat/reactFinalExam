import React, { useState, useEffect } from "react";

function Skill(props) {
  const skill = props.skill;

  return (
    <div className="col-md-6 col-sm-12">
      <div className="job border rounded">
        <p>{skill.skill_name}</p>
        <p>{skill.skill_type}</p>
        <p>{skill.description}</p>
        <p>{skill.importance}</p>
      </div>
    </div>
  );
}

export default Skill;
