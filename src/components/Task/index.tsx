import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';
import styles from './style.module.scss';

function Task() {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleCheckbox() {
    setIsCompleted(!isCompleted);
  }

  return (
    <div className={styles.container}>
      <div>
        <input type="checkbox" title='completitionStatus' onClick={handleCheckbox} />
        <label>
          {/* <Check size={12} /> */}
        </label>
      </div>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button title='Remover'>
        <Trash/>
      </button>
    </div>
  )
}

export { Task }