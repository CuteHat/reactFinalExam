import React, { useState, useEffect } from "react";
import Skill from "../Skill";

function SkillList(props) {
  const skills = props.skills;
  console.log(skills);

  return (
    <div style={{ padding: "20px" }} className="row">
      {skills.map((skill, i) => {
        return <Skill key={skill.skill_uuid + i} skill={skill} />;
      })}
    </div>
  );
}

export default SkillList;
