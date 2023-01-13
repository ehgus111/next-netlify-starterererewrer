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
        <Header title="도현이의 사이트에 오신것을 환영합니다" />
        <Header title="인스타 - ehgus_3150 , ehgus_0513" />
        <Header title="배그 - Gyeongsangnam_do" />
    <p className="description">
        
        </p>
      </main>

      <Footer />
    </div>
  )
}
