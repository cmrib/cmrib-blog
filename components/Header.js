import React from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


const Header = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    return (
        <header className={styles.header}>
            <Link href='/'>
                <h2>cmrib blog</h2>
            </Link>
            <nav>
                <a href="">Web Development</a>
                <a href="">NextJS</a>
                <button onClick={() => { theme == 'light' ? setTheme('dark') : setTheme('light') }}>Mode</button>
            </nav>
        </header>
    )
}

export default Header