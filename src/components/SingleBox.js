import styles from  '../styles/components/SingleBox.module.css';

export function SingleBox({ icon, title, description }) {
  return (
    <div className={styles.SingleBoxContainer}>
      <p>{icon}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}