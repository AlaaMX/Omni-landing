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
                <title>Omni | For-Actors</title>
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
                            <h1 className={styles.header}>Revolutionize Your Acting Journey.</h1>
                            <p className={styles.body}>
                                Omni understands and grows with you. It's not just about showcasing talent; it's about aligning it with the right opportunities, ensuring a seamless fit every time.
                            </p>
                        </section>
                        <section className={styles.leftBottom}>
                            <section className={styles.leftBottomLeft}>
                                <div>
                                    <div className={styles.accent_info}>*No Credit Card Required</div>
                                    <div className={styles.cta_copy}>Start your <b>30 days</b> free trial.</div>
                                </div>
                                <p className={styles.hint}>
                                    Unlock opportunities to seamlessly connect with roles that align with your aspirations. (No risk. No credit card required.)
                                </p>
                                <Button type="ANDROID" />
                                <Button />
                            </section>
                            <section className={styles.leftBottomRight}>
                                <Image src="/actor-phone-illustration.svg" width={172} height={286} />
                            </section>
                        </section>
                    </section>
                    <section className={styles.right}>
                        <div className={styles.featuresIllustration} style={{ position: "relative", width: "100%", aspectRatio: 3 }}>
                            <Image src="/actor-features-illustration.svg" fill />
                        </div>

                        <h1 className={styles.featureHeading}>Say Goodbye To Endless Searches.</h1>
                        <div>
                            <div className={styles.featureTop}>
                                <h3 className={styles.featureNumber}>1/</h3>
                                <div>
                                    <h4 className={styles.featureHeadline}>Create your profile</h4>
                                    <p className={styles.featureBody}>
                                        Highlight specific info, attributes, and reel photos to showcase your talent and enhance casting opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.featureTop}>
                                <h3 className={styles.featureNumber}>2/</h3>
                                <div>
                                    <h4 className={styles.featureHeadline}>Upload your resume</h4>
                                    <p className={styles.featureBody}>
                                        Empower your journey: Upload your resume and let it work for you, unlocking new opportunities
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.featureTop}>
                                <h3 className={styles.featureNumber}>3/</h3>
                                <div>
                                    <h4 className={styles.featureHeadline}>Get instant matches</h4>
                                    <p className={styles.featureBody}>
                                        Get instant audition invites or trigger matches, enabling you to request auditions effortlessly and efficiently.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: "relative", width: "100%", aspectRatio: 2.23, marginTop: 16 }}>
                            <Image src="/actor-ui-illustration.svg" fill />
                        </div>
                    </section>
                </div>
                <Footer />
            </main>
        </>
    )
}
