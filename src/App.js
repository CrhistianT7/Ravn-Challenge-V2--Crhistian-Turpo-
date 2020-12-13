import './App.css';
import {useQuery, gql} from '@apollo/client'
import React, {Fragment} from 'react'

import Header from './Components/Header'
import LeftSideSection from './Components/LeftSideSection'

const STAR_WARS_PEOPLE_QUERY = gql`
{
  allPeople{
    people{
      id
      name
      hairColor
      gender
      height
      
    }
  }
}
`;

const App = () => {

  // const { 
  //   loading: loadingPeople, 
  //   error: errorFilm, 
  //   data: dataFilms } = useQuery(STAR_WARS_PEOPLE_QUERY);

  // if (loadingPeople) return <p>Loading...</p>;
  // if (errorFilm) return <p>There's an error: {errorFilm.message}</p>;

  // //console.dir(dataFilms);

  // const people = dataFilms.allPeople['people'].map(film => (
  //   <div key={film.id}>
  //     <p>
  //       <b>{film.name}</b> - produced by {film.gender} -{" "}
  //       {film.height}
  //     </p>
  //   </div>
  // ));
  // return (
  //   <Fragment>
  //     <h1>Star Wars Films</h1>
  //     {films}
  //   </Fragment>
  // );
  return (
    <div>
      <Header/>
      <LeftSideSection/>
      <br></br>
      <hr></hr>
      <LeftSideSection/>
    </div>
  );
}

export default App;
