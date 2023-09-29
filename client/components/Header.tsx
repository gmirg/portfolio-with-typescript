import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png'
import styles from '../app/page.module.css';
import { Toggle } from './Toggle';
const Header = () => {
  return (
    <nav className={styles.nav}>
        <button type='button'>
            <Image src={Logo} alt={'logo'} />
        </button>
        <Toggle/>
        <button className={styles.contact} type='button'>Connect with me</button>
    </nav>
  )
}

export default Header