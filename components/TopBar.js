import Image from "next/image";
import styles from "./TopBar.module.css";
import Link from "next/link";

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <Link href="/">
                <Image className={styles.logoIcon} alt="" src="/logo.svg" width={52} height={52} />
            </Link>
            <div className={styles.labels}>
                <Link href="/" className={styles.label}>Home</Link>
                <Link href="/actor" className={styles.label}>For Actors</Link>
                <Link href="/director" className={styles.label}>For Directors</Link>
            </div>
        </div>
    );
};

export default TopBar;
