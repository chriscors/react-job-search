import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNode, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';


export default function MenuBar() {
  function handleClick(
    event: React.MouseEvent,
    index: number,
  ) {
  
}

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label='main sidebar'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeSvgIcon icon = {faReact} />
              </ListItemIcon>
                <ListItemText primary="React" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faPython} />
              </ListItemIcon>
                <ListItemText primary="Python/Django" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faNode} />
              </ListItemIcon>
                <ListItemText primary="Node.js" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faGem} />
              </ListItemIcon>
                <ListItemText primary="Ruby/Rails" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

    </Box>
  )

}