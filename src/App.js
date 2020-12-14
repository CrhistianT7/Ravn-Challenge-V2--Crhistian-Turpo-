import React from 'react'
import styles from './App.css';

import Header from './Components/Header/Header'
import PeopleList from './Components/PeopleList/PeopleList'

//**  */
const App = () => {
  return (
    <div className={styles.App}>
      <Header/>
      <PeopleList/>
    </div>
  );
}

export default App;
