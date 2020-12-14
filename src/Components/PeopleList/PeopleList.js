import styles from './PeopleList.css'
import {useQuery, gql} from '@apollo/client'
import React, {useState} from 'react';

import LoadingCell from './LoadingCell'
import ErrorCell from './ErrorCell'
import PeopleInformation from '../PeopleInformation/PeopleInformation'
// import InfiniteScroll from 'react-infinite-scroll-component';
import { FixedSizeList as List } from "react-window";

const STAR_WARS_PEOPLE_QUERY = gql`
{
    allPeople{
      people{
        id
        name
        species {
          name
        }
        homeworld {
          name
        }
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`;

const missingData = 'm-d' // m-d stands for missing data

const PeopleList = (props) => {

      const { 
        loading: loadingPeople, 
        error: errorPeople, 
        data: dataPeople } = useQuery(STAR_WARS_PEOPLE_QUERY);

      //** Here we load information of a person reciving the index in the list for that */
      const [personInformation, setPersonInformation] = useState([]);

      const showPersonInformation = (personIndex) => {
        const personByIndex = dataPeople.allPeople['people'][personIndex];
        setPersonInformation(
            <span>
                <PeopleInformation data = {personByIndex}/>
            </span>)
      }

      //** Control for Loading and Error on the data */
      if (loadingPeople) return <div className={styles.peopleList}><LoadingCell/></div>;
      if (errorPeople) return <div className={styles.peopleList}><ErrorCell/></div>;
    
      //** Setting for PersonCell */
      //** There is a check out for missin values */
      const people = dataPeople.allPeople['people'].map((person,index) => (
        <div key={person.id} className={styles.personCell}>
            <div className={styles.personCellAtributes}>
              <div className={styles.personName}>{person.name != null ? person.name : missingData}</div>
              <span className={styles.personDescription}>{person.species != null? person.species.name : missingData} from {person.homeworld.name}</span>
            </div>
            <button className={styles.button}  onClick={() => showPersonInformation(index)}> &gt; </button>
        </div>
        ));
        
        //** Row for the React-window */
        const Row = ({index, key, style}) =>(
          <div>
            {people}
          </div>
        )

    return(
        <section className={styles.section}>
            <div className={styles.peopleList} key>
                {/* {people} */}
                <List
                  width={350}
                  height={848}
                  itemCount={100}
                  itemSize={35}
                >
                  {Row}
                </List>
            </div>
            {personInformation}
        </section>
    );
}

export default PeopleList;