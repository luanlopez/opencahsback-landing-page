import Head from 'next/head'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Partners } from '@/components/sections/Partners'
import { Impact } from '@/components/sections/Impact'
import { Results } from '@/components/sections/Results'
import { Benefits } from '@/components/sections/Benefits'
import { Integrators } from '@/components/sections/Integrators'

export default function Home() {
  return (
    <>
      <Head>
        <title>Opencashback</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <Partners />
        <Impact />
        <Results />
        <Integrators />
        <Benefits />
      </main>
    </>
  )
}
