import { FC, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import moment from "moment";

import "/src/styles/accordion.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import parse from "html-react-parser";

const JobAccordion = ({
  activeCategory,
}: {
  activeCategory: string | null;
}) => {
  const [jobs, setJobs] = useState<null | Array<object>>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const BASE = new URL("https://proxy-findwork-api.glitch.me/api/jobs/");
    if (activeCategory) {
      BASE.searchParams.append("search", activeCategory);
    }
    const controller = new AbortController();
    if (loading) {
      controller.abort;
    }

    axios
      .get(BASE.href, {
        signal: controller.signal,
        //looks like this allows me to abort the request if you interrupt it by clicking a button
        headers: {
          Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
        },
      })
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        let arr = response.data.results;
        setJobs([...arr]);
      });
  }, [activeCategory]);

  if (loading || !jobs) {
    return (
      <div className="centered-children">
        <h1>
          <FontAwesomeIcon icon={faSpinner} spin />
        </h1>
      </div>
    );
  }
  return (
    <>
      <AccordionHeader />
      {jobs.map((job) => (
        <JobListing job={job} />
      ))}
    </>
  );
};

interface JobListingProps {
  job: any;
}
const JobListing: FC<JobListingProps> = ({ job }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<FontAwesomeIcon icon={faCaretDown} className="expand" />}
      >
        <Typography sx={{ width: "50%", flexShrink: 0 }}>{job.role}</Typography>
        <Typography
          sx={{
            width: "25%",
            flexShrink: 0,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          {job["company_name"]}
        </Typography>
        <Typography
          sx={{
            width: "25%",
            flexShrink: 0,
            textAlign: "right",
            color: "text.secondary",
          }}
        >
          {moment(job["date_posted"]).format("MM/D/YYYY")}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ mb: 0.5 }}>
          <Keywords tags={job.keywords} />
        </Typography>
        <Typography>Details: {parse(job.text)}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

function AccordionHeader() {
  return (
    <>
      <AccordionSummary expandIcon={true}>
        <Typography sx={{ width: "50%", flexShrink: 0, fontWeight: "bold" }}>
          Title
        </Typography>
        <Typography
          sx={{
            width: "25%",
            flexShrink: 0,
            textAlign: "center",
            fontWeight: "bold",
            marginLeft: "-16px",
          }}
        >
          Company
        </Typography>
        <Typography
          sx={{
            width: "25%",
            flexShrink: 0,
            textAlign: "right",
            fontWeight: "bold",
            marginLeft: "-10px",
          }}
        >
          Date Posted
        </Typography>
      </AccordionSummary>
    </>
  );
}

function Keywords({ tags }: { tags: Array<string> }) {
  return (
    <>
      <div className="tags">
        {tags.map((tag) => (
          <li className="tag">{tag}</li>
        ))}
      </div>
    </>
  );
}

export default JobAccordion;
