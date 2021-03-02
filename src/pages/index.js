import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { SectionAbout } from '../components/SectionAbout'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <SectionAbout />
    </div>
  )
}
