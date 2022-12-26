import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';
import styles from './style.module.scss';

export interface TaskProps {
  id?: number;
  text: string;
  isCompleted?: boolean;
}

function Task(props: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  function handleCheckbox() {
    setIsCompleted(!isCompleted);
  }

  return (
    <div className={`${styles.container} ${isCompleted ? styles.completed : ''}`}>
      <div>
        <input type="checkbox" title='completitionStatus' onClick={handleCheckbox} checked={isCompleted} />
      </div>
      <p>{props.text}</p>
      <button title='Remover'>
        <Trash/>
      </button>
    </div>
  )
}

export { Task }