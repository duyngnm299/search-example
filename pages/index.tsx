import Head from 'next/head'
import Search from '@/components/Search'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative h-screen'>
        <Search />
      </main>
    </>
  )
}
