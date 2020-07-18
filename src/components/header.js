import React from "react"
import styles from '../styles/components/header.module.css'
import { Link, graphql } from "gatsby"

const Header = ({ menus }) => {
    return (
    <header className={styles.main}>
        <nav className={styles.nav}>
            <ul className={styles.navUl}>
                {
                    menus.map(menu => (
                        <li key={menu.name}>
                            <Link className={styles.navAnchor} to={menu.link}>{menu.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </header>
    )
}

export default Header
