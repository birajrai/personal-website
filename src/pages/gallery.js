import Head from 'next/head'

export default function Gallery() {
    return (
        <>
            <Head>
                <title>Gallery | Biraj Rai</title>
                <meta name="description" content="Explore our gallery." />
            </Head>
            <div className="relative w-full" style={{ height: "calc(100vh - 100px)" }}>
                <img
                    src="https://backend.nabarajrai.com.np/wp-content/uploads/2024/11/kd-coming-soon.png"
                    alt="Coming Soon!"
                    className="object-cover w-full h-full"
                />
            </div></>
    )
}
