// import * as React from 'react';
import { FC, useState } from 'react';
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
import { IconProp } from '@fortawesome/fontawesome-svg-core';


export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState(null)
  return (
    <Box sx={{ height: '100vh', maxWidth: 200, overflowWrap: 'break-word', bgcolor: 'background.paper', boxShadow: 1}}>
      <nav aria-label='main sidebar'>
        <List>
          <MenuItem text = "React" icon = {faReact} />
          <MenuItem text = "Python/Django" icon = {faReact} />
          <MenuItem text = "Node.js" icon = {faNode} />
          <MenuItem text = "Ruby/Rails" icon = {faGem} />
        </List>
      </nav>

    </Box>
  )

}

interface MenuProps {
  text: string;
  icon: IconProp
}
 
const MenuItem: FC<MenuProps> = ({ text, icon }) => {
  function handleClick(
    event: React.MouseEvent,
  ) {
  }

  return (<>
          <ListItem disablePadding>
            <ListItemButton onClick={(e) => handleClick(e)}>
              <ListItemIcon>
                <FontAwesomeIcon icon = {icon} />
              </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
  </>);
}
