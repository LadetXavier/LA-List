import React from 'react'

import AddCharacter from './AddCharacter';
import Character from './Character';
import Setting from './Setting';

const Main = () => {
  return (
    <main className='main'>
      <Setting></Setting>
      <Character name="Main"></Character>      
      <AddCharacter></AddCharacter>
        
    </main>
  )
}

export default Main
