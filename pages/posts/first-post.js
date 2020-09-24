import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'

const FirstPost = () => {
    return (
     <Layout>
        <Head>
            <title>Next</title>
        </Head>
        <h1>
            Hello posts
        </h1>
        <h2>
            <Link href="/">
               Home
            </Link>
        </h2>
     </Layout>
    )
}

export default FirstPost