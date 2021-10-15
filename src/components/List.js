import { useState } from 'react';
import Person from './Person.js';
import styles from './List.module.css';



const List = () => {
  const people = [{'voornaam': 'Brecht', 'functie': 'developer', 'dier': null, 'diernaam': null}, 
  {'voornaam': 'Jonas', 'functie': 'fotograaf', 'dier': 'hond', 'diernaam': 'carnaval' }, 
  {'voornaam': 'Kim', 'functie': 'niet bekend', 'dier': null, 'diernaam': null}, 
  {'voornaam': 'Isabeau', 'functie': 'start-up', 'dier': 'kat', 'diernaam': 'poes'}, 
  {'voornaam': 'Hans', 'functie': 'designer', 'dier': 'goudvis', 'diernaam': 'blub'}];
  
  const [person, setPerson] = useState(
    {'voornaam': '', 
    'functie': '', 
    'dier': '', 
    'diernaam': '',
    });
  const [showPerson, setShowPerson] = useState(false);

  

  const listItems = people.map((person, index) =>
    <li key={index} className={styles.li} onClick={() => {setPerson(person); setShowPerson(true)}}> {person.voornaam}</li>
  );

  

  return (
    <div>
      <ul>{listItems}</ul>
      <Person voornaam={person.voornaam} functie={person.functie} dier={person.dier} diernaam={person.diernaam} style={{ display: showPerson ? "block" : "none"}}/>      
      </div>
  )
}

export default List;
