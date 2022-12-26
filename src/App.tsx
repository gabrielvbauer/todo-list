import { PlusCircle } from 'phosphor-react';

import { Header } from "./components/Header"
import { Task, TaskProps } from "./components/Task"

import styles from './app.module.scss'
import { Badge } from './components/Badge';

import { ChangeEvent, FormEvent, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskText, setTaskText] = useState('')
  const [completedTasksAmount, setCompletedTasksAmount] = useState(0)

  function onChangeTaskTextInput(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value)
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    if (!taskText) {
      return;
    }

    const newTask: TaskProps = {
      id: tasks.length + 1,
      text: taskText,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
    setTaskText('')
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleAddNewTask}>
          <input 
            name="task" 
            id="task" 
            type="text"
            placeholder="Adicione uma nova tarefa" 
            value={taskText} 
            onChange={(e) => onChangeTaskTextInput(e)}
          />
          <button>Criar<PlusCircle size={18}/></button>
        </form>

        <div className={styles.taskListContainer}>
          <div className={styles.taskListHeader}>
            <span className={styles.createdTasks}>
              Tarefas criadas
              <Badge content={tasks.length} /> 
            </span>

            <span className={styles.concludedTasks}>
              Concluídas
              <Badge content='2 de 5' />
            </span>
          </div>
          
          <div className={styles.taskList}>
            {tasks.map((task) => {
              return (
                <Task 
                  id={task.id}
                  text={task.text}
                  isCompleted={task.isCompleted}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
