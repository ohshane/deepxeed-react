import React, { useState } from 'react';
import {  Button, SvgIcon, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import './MenuDrawer.css';

import DarkmodeSwitch from 'components/DarkmodeSwitch/DarkmodeSwitch';

function MenuDrawer() {
  const [isMenuDrawerOpen, setMenuDrawerOpen] = useState(false);
  
  return (
    <div className="MenuDrawer">
      <Button onClick={() => setMenuDrawerOpen(true)}>
        <SvgIcon component={Menu} />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={isMenuDrawerOpen}
        onOpen={() => setMenuDrawerOpen(true)}
        onClose={() => setMenuDrawerOpen(false)}
      >
        <List>
          <ListItem key="DarkmodeSwitch" className="DarkmodeSwitch">
            <DarkmodeSwitch />
          </ListItem>

          <ListItem button key="test">
            <ListItemIcon>
              <SvgIcon component={Menu} />
            </ListItemIcon>
            <ListItemText primary="asdfasdf" />
          </ListItem>

        </List>
      </SwipeableDrawer>
    </div>
  );
}

export default MenuDrawer;