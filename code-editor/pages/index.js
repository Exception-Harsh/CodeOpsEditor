import FaqComponent from '@/components/FAQComponent'
import Features from '@/components/Features'
import HeroSection from '@/components/HeroSection'
import Team from '@/components/Team'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>CodeEZ | Online Free Code Editor</title>
        </Head>
        <HeroSection />
        <Features />
        <Team />
        <FaqComponent />
      </div>
    </>
  )
}
