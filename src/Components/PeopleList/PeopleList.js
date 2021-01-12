import styles from './PeopleList.css'
import {useQuery, gql} from '@apollo/client'
import { offsetLimitPagination } from "@apollo/client/utilities";
import React, {useState} from 'react';

import LoadingCell from './LoadingCell'
import ErrorCell from './ErrorCell'
import PeopleInformation from '../PeopleInformation/PeopleInformation'
// import { FixedSizeList as List } from "react-window";

const STAR_WARS_PEOPLE_QUERY = gql`
query ($endCursor: String){
  allPeople (first: 5, after: $endCursor){
    pageInfo{
      endCursor
    }
    edges{
      node{
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
}
`;

const missingData = 'm-d' /** m-d stands for missing data */

const PeopleList = () => {

      const { 
        loading: loadingPeople, 
        error: errorPeople, 
        data: dataPeople,
        fetchMore: fetchMore} = useQuery(STAR_WARS_PEOPLE_QUERY, {variables: {after: null}});

      const [personInformation, setPersonInformation] = useState([]);

      const showPersonInformation = (personIndex) => {
        const personByIndex = dataPeople.allPeople.edges[personIndex].node;
        setPersonInformation(
            <span>
                <PeopleInformation data = {personByIndex}/>
            </span>)
      }

      if (loadingPeople) return <div className={styles.peopleList}><LoadingCell/></div>;
      if (errorPeople) return <div className={styles.peopleList}><ErrorCell/></div>;
    
      const people = dataPeople.allPeople.edges.map((person,index) => (
        <div key={person.node.id} className={styles.personCell}>
            <div className={styles.personCellAtributes}>
              <div className={styles.personName}>{person.node.name != null ? person.node.name : missingData}</div>
              <span className={styles.personDescription}>{person.node.species != null? person.node.species.name : missingData} from { person.node.homeworld.name}</span>
            </div>
            <button className={styles.button}  onClick={() => showPersonInformation(index)}> &gt; </button>
        </div>
        ));
        
        //** Row for the React-window */
        // const Row = ({index, key, style}) =>(
        //   <div style={style}>
        //     {people}
        //   </div>
        // )

    return(
        <section className={styles.section}>
            <div className={styles.peopleList}>
                {people}
                {/* <List
                  height={848}
                  itemCount={1}
                  itemSize={80}
                  width={350}
                >
                  {Row}
                </List> */}
                <button onClick={() => {
                  const {endCursor} = dataPeople.allPeople.pageInfo;
                  fetchMore({
                    variables: { endCursor: endCursor},
                    updateQuery: (prevResult, {fetchMoreResult}) => {
                      fetchMoreResult.allPeople.edges = [
                        ...prevResult.allPeople.edges,
                        ...fetchMoreResult.allPeople.edges
                      ];
                      return fetchMoreResult;
                    }
                  })
                }}>Load more</button>
            </div>
            {personInformation}
        </section>
    );
}

export default PeopleList;