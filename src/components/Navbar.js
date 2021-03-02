import styles from '../styles/components/Navbar.module.css'

export function Navbar() {
  return (
    <div className={styles.HeaderContainer}>
      <h1>Logo</h1>
      <div className={styles.LinksContainer}>
        <div>
          <a href=''>About</a>
          <a href=''>Department</a>
          <a href=''>Home</a>
          <a href=''>Service</a>
          <a href=''>Gallery</a>
          <a href=''>Price</a>
          <a href=''>Blog</a>
          <a href=''>Contact</a>
        </div>
        <a href=''>Appointment</a>
      </div>
    </div>
  )
}