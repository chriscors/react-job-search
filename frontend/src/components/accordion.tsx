import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNode, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { defineConfig, loadEnv } from 'vite';


interface AccordionProps {
  activeCategory: string | null
  setActiveCategory: React.Dispatch<React.SetStateAction<null | string>>
}
const JobAccordion: FC<AccordionProps> = ({ activeCategory, setActiveCategory }) => {
  
  useEffect(() => {
    const BASE = new URL("https://findwork.dev/api/jobs/")
    if (activeCategory) {
      BASE.searchParams.append('keyword', activeCategory)
      //Other params like location etc

    }
    console.log(import.meta.env.VITE_FINDWORK_API_KEY);
    

    axios.get(BASE.href, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "user-agent": "insomnia/2023.1.0"
      }
    })
  }, [activeCategory])
  
  
  return (
    <>
      {/* Map the results of the axios */}
    </>
  )
}


interface ListingProps {
  activeCategory: string | null
  setActiveCategory: React.Dispatch<React.SetStateAction<null | string>>
}
const JobListing = () => {
  
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faCaretDown} />}>
          <Typography></Typography>
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