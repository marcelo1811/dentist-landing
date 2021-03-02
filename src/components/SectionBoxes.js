import { SingleBox } from "./SingleBox";

import styles from '../styles/components/SectionBoxes.module.css' 

export function SectionBoxes() {
  return (
    <div className={styles.SectionBoxesContainer}>
      <SingleBox
        icon='icone'
        title='Qualified Doctors'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <SingleBox
        icon='icone'
        title='Emergency Care'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <SingleBox
        icon='icone'
        title='Operation Theater'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <SingleBox
        icon='icone'
        title='24 Hours Service'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
    </div>
  )
}