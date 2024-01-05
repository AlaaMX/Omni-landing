import Image from "next/image";
import styles from "./TargetCard.module.css";
import Button from "./Button";
import Link from "next/link";

const TargetCard = ({ target, description, href, androidLink, appleLink, illustration, mockup, hint }) => {
    return (
        <div className={styles.targetCard}>
            <div className={styles.cardTop}>
                <Image alt="" src={mockup} width={136} height={147} />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.topCopy}>
                    <Image alt="" src={illustration} width={167} height={185} style={{ marginTop: -130 }} />
                    <h1 className={styles.header}>{target}</h1>
                    <p className={styles.body}>{description}</p>
                </div>
                <Link href={href} className={styles.cta}>
                    <div>
                        <div className={styles.accent_info}>No Credit Card Required</div>
                        <div className={styles.cta_copy}>Start your <b>30 days</b> free trial.</div>
                    </div>
                    <svg className={styles.arrowIcon} width="25" height="25" viewBox="0 0 25 25" stroke="#0D0D0D" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.25 8.53125L21 12.2812M21 12.2812L17.25 16.0312M21 12.2812H3" strokeWidth="1.5" strokeLinecap="square" strokeLineJoin="round" />
                    </svg>
                </Link>
            </div>
            <div className={styles.cardFooter}>
                <p className={styles.hint}>
                    {hint}
                </p>
                <Link href={androidLink} target="_blank">
                    <Button type="ANDROID" />
                </Link>
                <Link href={appleLink} target="_blank">
                    <Button />
                </Link>
            </div>
        </div>
    );
};

export default TargetCard;