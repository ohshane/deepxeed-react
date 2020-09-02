import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, SvgIcon } from '@material-ui/core';
import { Brightness2, Brightness7 } from '@material-ui/icons';
import './DarkmodeSwitch.css';

import { store, darkmodeSlice } from 'components/redux';

function DarkmodeSwitch() {
  const isDarkmode = useSelector(state => state.darkmode.isDarkmode);
  return (
    <div className="DarkmodeSwitch">
      <SvgIcon component={Brightness7} fontSize="small" />
      <Switch checked={isDarkmode} onChange={() => store.dispatch(darkmodeSlice.actions.toggle())} size="medium" />
      <SvgIcon component={Brightness2} fontSize="small" />
    </div>
  );
}

export default DarkmodeSwitch;