/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import LivePlan from './components/LivePlan.jsx';


ReactDOM.render(<LivePlan queryId={121}  isEmbedded={false}/>, document.getElementById('live-plan'));
