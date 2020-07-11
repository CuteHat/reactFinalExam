import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import JobSkillContainer from "../../Containers/JobSkillContainer";

function DetailedJob(props) {
  let history = useHistory();
  let location = useLocation();
  const job = location.state ? location.state.job : "";
  const [jobValue, setJobValue] = useState(job);

  return (
    <div className="col-md-12 col-sm-12">
      <div className="job border rounded">
        <h4 className="job-title">{job.title}</h4>
      </div>
      <JobSkillContainer jobId={job.uuid} />
    </div>
  );
}

export default DetailedJob;
