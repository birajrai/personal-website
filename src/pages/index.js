// src/pages/index.js
import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home | My Website</title>
                <meta name="description" content="Welcome to the home page of my website." />
            </Head>
            <h1 className="text-3xl font-bold">Welcome to My Website</h1>
            <p className="mt-4">This is the home page.</p>
        </Layout>
    )
}
