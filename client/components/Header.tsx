import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png'
import styles from '../app/page.module.css'

const Header = () => {
  return (
    <nav className={styles.nav}>
        <button type='button'>
            <Image src={Logo} alt={'logo'} />
        </button>
        <button className={styles.contact} type='button'>Free consultation</button>
    </nav>
  )
}

export default Header