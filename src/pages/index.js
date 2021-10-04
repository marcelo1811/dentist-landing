import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { SectionBoxes } from '../components/SectionBoxes'
import { SectionHero } from '../components/SectionHero'
import SectionWhoWeAre from '../components/SectionWhoWeAre'
import { SectionWhyChooseUs } from '../components/SectionWhyChooseUs'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <SectionHero />
      <SectionBoxes />
      <SectionWhyChooseUs />
      <SectionWhoWeAre />
    </div>
  )
}
