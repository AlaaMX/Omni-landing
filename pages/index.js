import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import TopBar from '@/components/TopBar'
import TargetCard from '@/components/TargetCard'
import Footer from '@/components/Footer'






export default function Home() {
  return (
    <>
      <Head>
        <title>Omni-Subsmissions</title>
        <meta name="description" content="Casting powered By AI*" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TopBar />
        <div className={styles.targetCardGroup}>
          <TargetCard target="For Actors" description="Traditional casting is a marathon. Omni turns it into a sprint, with its intuitive system that rapidly connects you with the roles best suited for you." href="/actor" androidLink="https://play.google.com/store" appleLink="https://www.apple.com/us/store" mockup="/actor-phone-target.svg" illustration="/target-illustration-actor.svg" />
          <div className={styles.sparkleConnector}>
            <div className={styles.divider} />
            <Image src="/sparkle.svg" width={40} height={26} />
            <div className={styles.divider} />
          </div>
          <TargetCard target="For Directors" description="In the dynamic world of entertainment, every moment counts. Omni's advanced matching system, introduces relevent actors to your submitted roles swiftly." href="/director" androidLink="https://play.google.com/store" appleLink="https://www.apple.com/us/store" mockup="/director-phone-target.svg" illustration="/target-illustration-director.svg" />
        </div>
        <Footer />
      </main>
    </>
  )
}
