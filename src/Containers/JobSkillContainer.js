import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../conf.json";
import SkillList from "../components/SkillList";

function JobSkillContainer(props) {
  const jobId = props.jobId;
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}jobs/${jobId}/related_skills`)
      .then((res) => setSkills(res.data.skills));
  }, []);

  return <SkillList skills={skills} />;
}

export default JobSkillContainer;
