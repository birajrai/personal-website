// src/pages/gallery.js
import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Gallery() {
    return (
        <Layout>
            <Head>
                <title>Gallery | My Website</title>
                <meta name="description" content="Explore our gallery." />
            </Head>
            <h1 className="text-3xl font-bold">Gallery</h1>
            <p className="mt-4">Explore our gallery.</p>
        </Layout>
    )
}
