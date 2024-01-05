import React from 'react'
import styles from "./Footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <Image src="/frameless-logo.svg" width={40} height={30} style={{ marginTop: -15 }} />
            <ul className={styles.navigation}>
                <Link href="/" className={styles.label}>Home</Link>
                <li>-</li>
                <Link href="/actor" className={styles.label}>Actors</Link>
                <li>-</li>
                <Link href="/director" className={styles.label}>Directors</Link>
            </ul>
            <p className={styles.hint}>By utilizing our product, you acknowledge and agree to abide by our <Link href="https://drive.google.com/file/d/1S9jx-lMcRG5tCIFSAPlvlQWmNBy0AetL/view?usp=drive_link" target="_blank" className={styles.label} >terms of service</Link > and <Link target="_blank" href="https://drive.google.com/file/d/1btblTUda-6E7nxmtrVpbCpNk1eTkCpIx/view?usp=sharing" className={styles.label}>privacy policy.</Link></p>
        </footer>
    )
}

export default Footer