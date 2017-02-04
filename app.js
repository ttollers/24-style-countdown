/*global document */

import React from 'react'
import { render } from 'react-dom'
import Root from "./component/index"

render(
  <Root end={new Date(endTime)}/>,
  document.getElementById('app')
);
