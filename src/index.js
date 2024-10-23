import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc,{One,Two} from './about';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc></Abc>
    <One></One>
    <Two/>
  </React.StrictMode>
);
