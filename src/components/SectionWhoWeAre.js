import  styles from '../styles/components/SectionWhoWeAre.module.css'

export default function SectionWhoWeAre() {
  return (
    <div className={styles.SectionWhoWeAreContainer}>
      <div className={styles.RowBoxes}>
        <div className={styles.BoxImage} />
        <div className={styles.BoxImage} />
        <div className={styles.BoxImage} />
      </div>
      <div className={styles.RowBoxes}>
        <div className={styles.BoxImage} />
        <div className={styles.BoxImage} />
        <div className={styles.BoxImage} />
      </div>
      <div className={styles.RowBoxes}>
        <div className={styles.BoxImage} />
        <div className={styles.BoxImage} />
        <div className={styles.BoxImage} />
      </div>
    </div>
  )
}