// src/pages/about.js
import Head from 'next/head'
import Layout from '@/components/Layout'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About | My Website</title>
                <meta name="description" content="Learn more about us on this page." />
            </Head>
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="mt-4">Learn more about us on this page.</p>
        </Layout>
    )
}
