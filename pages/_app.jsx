import '@/pages/reset.css'
// Import a theme from the package
import '@/highlight/atom-one-light.css'
import Layout from '@/layouts/Layout.jsx'
import Head from 'next/head'

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="description" content="Quiz" />
                <meta name="keywords" content="Quiz, NextJS, PostgreSQL" />
                <meta name="author" content="UglyGhoulChrist@gmail.com" />
                <meta name="copyright" content="UglyGhoulChrist" />
                <meta name="address" content="Россия, Владимирская область, город Александров" />
                <title>Quiz</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
export default App