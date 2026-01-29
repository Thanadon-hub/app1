import React from 'react';

import Content from './context-content';
import { UserContext } from './context';
function App() {
  return (
    <UserContext.Provider value={'Tom Jerry'}>
      <Content />
    </UserContext.Provider>
  )
}   
export default App;