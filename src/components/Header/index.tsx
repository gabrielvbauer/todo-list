import Logo from '../../assets/logo.svg';

import styles from './style.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="ToDo" />
    </div>
  )
}

export { Header }