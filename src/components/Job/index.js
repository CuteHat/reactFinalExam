import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Job(props) {
  const job = props.job;

  return (
    <div className="col-md-6 col-sm-12">
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          padding: "0px",
          margin: "0px",
        }}
        to={{
          pathname: `/jobs/${job.uuid}`,
          state: { job },
        }}
      >
        <div className="job border rounded">
          <h4 className="job-title">{job.title}</h4>
        </div>
      </Link>
    </div>
  );
}

export default Job;
