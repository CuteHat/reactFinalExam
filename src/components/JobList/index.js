import React, { useState, useEffect } from "react";
import Job from "../Job";

function JobList(props) {
  const jobs = props.jobs;

  return (
    <div style={{ padding: "20px" }} className="row">
      {jobs.map((job, i) => {
        return <Job key={job.uuid + i} job={job} />;
      })}
    </div>
  );
}

export default JobList;
