import { FC, useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


interface AccordionProps {
  activeCategory: string | null
  //setActiveCategory: React.Dispatch<React.SetStateAction<null | string>>
}
const JobAccordion: FC<AccordionProps> = ({ activeCategory}) => {
  const [jobs, setJobs] = useState<null | Array<object>>()
  
  useEffect(() => {
    const BASE = new URL("https://proxy-findwork-api.glitch.me/api/jobs/")
    if (activeCategory) {
      BASE.searchParams.append('search', activeCategory)
    }

    axios.get(BASE.href, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
      }
    }).then((response) => {
      console.log(response.data);
      let arr = response.data.results
      setJobs([...arr])
      
      
    })
    
  
  }, [activeCategory])
  
  
  if (jobs) {
    
    return (
      <>

        {jobs.map((job) => 
          <JobListing job={job} />
        )}
      </>
    )
  }
}


interface JobListingProps {
  job: any
}
const JobListing: FC<JobListingProps> = ({job}) => {
  
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faCaretDown} />}>
        <Typography>{ job.role }</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default JobAccordion
// return (
//   <Box sx={{ height: '100vh', maxWidth: 200, overflowWrap: 'break-word', bgcolor: 'background.paper', boxShadow: 1}}>
//     <nav aria-label='main sidebar'>
//       <List>
//         <MenuItem text = "React" icon = {faReact} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
//         <MenuItem text="Python/Django" icon={faPython} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
//         <MenuItem text="Node.js" icon={faNode} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
//         <MenuItem text="Ruby/Rails" icon={faGem} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
//       </List>
//     </nav>

//   </Box>
// )