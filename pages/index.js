import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>도현!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="도현이의 사이트에 오신것을 환영합니" />
        <p className="description">
        
        </p>
      </main>

      <Footer />
    </div>
  )
}
