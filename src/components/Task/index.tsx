import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';
import styles from './style.module.scss';

export interface TaskProps {
  id: number;
  text: string;
  isCompleted?: boolean;
  onCheckTask?: (taskID: number) => void;
  onDeleteTask?: (taskID: number) => void;
}

function Task(props: TaskProps) {
  return (
    <div className={`${styles.container} ${props.isCompleted ? styles.completed : ''}`}>
      <div>
        <input type="checkbox" title='completitionStatus' onChange={() => props.onCheckTask!(props.id)} checked={props.isCompleted} />
      </div>
      <p>{props.text}</p>
      <button title='Remover' onClick={() => props.onDeleteTask!(props.id)}>
        <Trash/>
      </button>
    </div>
  )
}

export { Task }