import styles from '../styles/components/SectionWhyChooseUs.module.css';

export function SectionWhyChooseUs() {
  return (
    <div className={styles.SectionWhyChooseUsContainer}>
      <div>
        {/* TODO: ADD IMAGE */}
        <div className={styles.WhyChooseUsImage}>Imagem</div>
      </div>
      <div>
        <div className={styles.SectionTitle}>
          <h3>Why Choose Us</h3>
          <span>Read About Us</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        <ul>
          <li>We provide high-quality services for the whole family.</li>
          <li>Risus commodo viverra maecenas</li>
          <li>Your health is our top priority</li>
          <li>Affordable medical, dental and women's health care.</li>
          <li>Quis ipsum suspendisse ultrices gravida.</li>
          <li>We provide high-quality services for the whole family.</li>
        </ul>
      </div>
    </div>
  )
}