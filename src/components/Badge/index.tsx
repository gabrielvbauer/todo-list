import styles from './style.module.scss';

interface BadgeProps {
  content: string | number;
}

function Badge({ content }: BadgeProps) {
  return (
    <div className={styles.container}>
      {content}
    </div>
  )
}

export { Badge };