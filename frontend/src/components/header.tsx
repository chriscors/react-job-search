import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from "@mui/material/Paper";
import '/src/styles/header.css'


export default function Header() { 
  return (
    <>  <Paper elevation={3}>
          <header>
              <h1><FontAwesomeIcon icon={faCodeBranch} /> Job Search</h1>
          </header>
        </Paper></>
  )
}
