// src/pages/index.js
import Head from 'next/head';
import Layout from '@/components/Layout';
import { ReactTyped } from 'react-typed';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home | My Website</title>
                <meta name="description" content="Welcome to the home page of my website." />
            </Head>
            <div className="wrapper px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Text */}
                    <div className="flex flex-col justify-center items-start space-y-4">
                        <span className="text-xl text-gray-600">Hello</span>
                        <h1 className="text-3xl md:text-4xl font-bold">
                            I'm{' '}
                            <span className="text-blue-500">
                                <ReactTyped
                                    strings={['a Web Developer', 'an Artist', 'a Student']}
                                    typeSpeed={100}
                                    backSpeed={50}
                                    backDelay={1000}
                                    loop
                                />
                            </span>
                        </h1>
                        <p className="w-[90%] text-[1.2em] text-[#20262E] font-medium leading-relaxed mb-4">
                            Hi, I'm Biraj Rai, also known as Someone. I'm skilled in web development and music, and I'm passionate about both full-stack development and music.
                        </p>
                        <p className="text-[#20262E] text-lg font-light">
                            Nice to meet you!
                        </p>


                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center items-center">

                        {/* Nothing here */}

                    </div>
                </div>
            </div>
        </Layout >
    );
}
