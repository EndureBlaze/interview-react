import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { useRouter } from 'next/router'
import { useWindowSize } from '../../utils/use-window-size'
import { useMousePosition } from '../../utils/use-mouse-position'
import { useDate } from '../../utils/use-date'
import { useIpAddress } from '../../utils/use-ip-address'
import { Grid, GridItem } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const router = useRouter()
  const { id } = router.query

  const { width, height } = useWindowSize()
  const { coords } = useMousePosition()
  const { date } = useDate()
  const { ipAddress } = useIpAddress()

  return (
    <div className={styles.container}>
      <Grid h="auto" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem rowSpan={2} colSpan={1} bg="tomato">
          <h1 className={styles.title}>
            {t('nav.welcome')} {t('nav.home')}, {id}
          </h1>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <LanguageSwitcher />
        </GridItem>
        <GridItem colSpan={2} bg="blue.500">
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Status 1 &rarr;</h2>
              <p>
                {t('status.1.height')} {height} px
              </p>
              <p>
                {t('status.1.width')}: {width} px
              </p>
            </a>

            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Status 2 &rarr;</h2>
              <p>
                {t('status.2.position')}: x {coords.x}, y {coords.y}
              </p>
            </a>
          </div>
        </GridItem>
        <GridItem colSpan={4} bg="tomato">
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Status 3 &rarr;</h2>
              <p>
                {t('status.3.date')}: {date.toLocaleString()}
              </p>
            </a>

            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Status 4 &rarr;</h2>
              <p>
                {t('status.4.ip')}: {ipAddress}
              </p>
            </a>
          </div>
        </GridItem>
      </Grid>

      <main
      // className={styles.main}
      ></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  // this is to ensure server return the right content based on language in the query string.
  // updateLanguage(ctx)
  return { props: {} }
}
