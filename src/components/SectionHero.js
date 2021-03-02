import styles from '../styles/components/SectionHero.module.css';

export function SectionHero() {
  return (
    <div className={styles.SectionHeroContainer}>
      {/* TODO: ADD CAROUSEL */}
      <div className={styles.HeroContent}>
        <h1>
          Providing Quality Health Care. Your Health is Our Top Priority with <span>Comprehensive</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        {/* TODO: ADD BUTTON ANIMATION */}
        <button>APPOINTMENT NOW</button>
      </div>
      <div className={styles.HeroImage}>
        {/* TODO: ADD IMAGE */}
        <h1>Imagem legal</h1>
      </div>
    </div>
  )
}