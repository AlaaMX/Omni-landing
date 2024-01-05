import Head from 'next/head'
import Image from 'next/image'
import TopBar from '@/components/TopBar'
import styles from '@/styles/Target.module.css'
import Footer from '@/components/Footer'
import Button from '@/components/Button'


export default function Home() {
    return (
        <>
            <Head>
                <title>Omni | For-Directors</title>
                <meta name="description" content="Casting powered By AI*" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <TopBar />
                <div className={styles.content}>
                    <section className={styles.left}>
                        <section className={styles.leftTop}>
                            <Image src="/megaphone-illustration.svg" width={132} height={113} />
                            <h1 className={styles.header}>Empower Your Casting Journey</h1>
                            <p className={styles.body}>
                                Submit roles effortlessly, our AI-driven app ensures precise matches, connecting actors to roles that resonate for a seamless audition experience.
                            </p>
                        </section>
                        <section className={styles.leftBottom}>
                            <section className={styles.leftBottomLeft}>
                                <div>
                                    <div className={styles.accent_info}>*No Credit Card Required</div>
                                    <div className={styles.cta_copy}>Start your <b>30 days</b> free trial.</div>
                                </div>
                                <p className={styles.hint}>
                                    Unlock opportunities to seamlessly connect with actors that align with your submitted roles. (No risk. No credit card required.)
                                </p>
                                <Button type="ANDROID" />
                                <Button />
                            </section>
                            <section className={styles.leftBottomRight}>
                                <Image src="/director-phone-illustration.svg" width={172} height={286} />
                            </section>
                        </section>
                    </section>
                    <section className={styles.right}>
                        <div className={styles.featuresIllustration} style={{ position: "relative", width: "100%", aspectRatio: 3 }}>
                            <Image src="/director-features-illustration.svg" fill />
                        </div>

                        <h1 className={styles.featureHeading}>No More Manual Talents Digging.</h1>
                        <div>
                            <div className={styles.featureTop}>
                                <h3 className={styles.featureNumber}>1/</h3>
                                <div>
                                    <h4 className={styles.featureHeadline}>Launch your production.</h4>
                                    <p className={styles.featureBody}>
                                        Start your production with essential details and key production information, ensuring a successful launch.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.featureTop}>
                                <h3 className={styles.featureNumber}>2/</h3>
                                <div>
                                    <h4 className={styles.featureHeadline}>Clarify Positions</h4>
                                    <p className={styles.featureBody}>
                                        Define roles, ensure clarity, foster teamwork, and set the stage for coordinated success and productivity.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.featureTop}>
                                <h3 className={styles.featureNumber}>3/</h3>
                                <div>
                                    <h4 className={styles.featureHeadline}>Curate With Ease</h4>
                                    <p className={styles.featureBody}>
                                        Evaluate and select actors from a tailored list of matches, extending invitations for a seamless audition.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: "relative", width: "100%", aspectRatio: 2.23, marginTop: 16 }}>
                            <Image src="/director-ui-illustration.svg" fill />
                        </div>
                    </section>
                </div>
                <Footer />
            </main>
        </>
    )
}
