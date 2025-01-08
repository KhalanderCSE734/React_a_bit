import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Basics from './components/Basics.jsx';
import BackgroundChanger from './components/BackgroundChanger.jsx';
import React from 'react';
/*

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Basics />
  </StrictMode>,
)

*/

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
  {/* <App/> */}
  <Basics />
  {/* <BacckgroundChanger /> */}
  {/* <BackgroundChanger /> */}
  </>
)
