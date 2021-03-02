import styles from '../styles/components/SectionAbout.module.css';

export function SectionAbout() {
  return (
    <div className={styles.SectionAboutContainer}>
      <div className={styles.HeroContet}>
        <h1>
          Providing Quality Health Care. Your Health is Our Top Priority with <span>Comprehensive</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <button>APPOINTMENT NOW</button>
      </div>
      <div className={styles.HeroImage}>
        <h1>Imagem legal</h1>
      </div>
    </div>
  )
}