import React from 'react'

import AddCharacter from './AddCharacter';
import Character from './Character';
import Setting from './Setting';
import {Account,getAccount} from './DataManagement';

const localData = window.localStorage;

const Main = () => {
  if(localData.getItem('account') === null) {
    localData.setItem("account",JSON.stringify(Account([],[])));
}
const account = getAccount();
account.addChar("chose");


  return (
    <main className='main'>
      <Setting></Setting>
      <Character name="Main"></Character>      
      <AddCharacter></AddCharacter>
        
    </main>
  )
}

export default Main
