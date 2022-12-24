import { PlusCircle } from 'phosphor-react';

import { Header } from "./components/Header"
import { Task } from "./components/Task"

import styles from './app.module.scss'

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.form}>
          <input type="text" placeholder="Adicione uma nova tarefa" name="task" id="task"/>
          <button>
            Criar
            <PlusCircle size={18}/>
          </button>
        </form>
      </div>
    </>
  )
}

export default App
