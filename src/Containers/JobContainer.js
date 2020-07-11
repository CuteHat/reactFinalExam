import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../conf.json";
import JobList from "../components/JobList";

function JobContainer() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}jobs`).then((res) => setJobs(res.data));
  }, []);

  return <JobList jobs={jobs} />;
}

export default JobContainer;
