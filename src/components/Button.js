import { useState } from 'react';
import Image from './Image';
import styles from './Button.module.css';


const Button = (props) => {
  
  const [photo, setPhoto] = useState('https://picsum.photos/400');
  
  
  return (
    <div>
      <Image randomImage={photo}/>
      <button className={styles.button} onClick={() => setPhoto(`https://picsum.photos/400?random=${Math.random()}`)}>{props.text}</button>
    </div>
  )
}

export default Button;
