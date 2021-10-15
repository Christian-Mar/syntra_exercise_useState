import styles from './Person.module.css';

const Person = ({voornaam, functie, dier, diernaam, style}) => {
  return (
    <div className={styles.personDescription} style={style}>
      <h4>Dit is {voornaam}</h4>
      <p><b>Beroep: </b>{functie}</p>
      {(dier !== null) && (<p><b>Dier:</b> {dier}, die <em>{diernaam}</em> heeft</p>)}
    </div>)
  }




export default Person
