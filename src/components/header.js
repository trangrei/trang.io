import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

export default function Header() {
	return (
		<div className={styles.header}>
	        <div className={styles.initials}><Link to="/" className={styles.linkStyle}>TRL</Link></div>
	        <div className={styles.pages}>
	          <body><Link to="/about" className={styles.linkStyle}>About</Link></body>
	          <body><Link to="/projects" className={styles.linkStyle}>Projects</Link></body>
	          <body><Link to="/resume" className={styles.linkStyle}>Resume</Link></body>
	        </div>
	    </div>
    )
}