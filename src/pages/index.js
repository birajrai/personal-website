import Head from 'next/head';
import Layout from '@/components/Layout';
import { ReactTyped } from 'react-typed';

// Utility function to calculate days until next birthday
const calculateDaysUntilBirthday = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    // Set the next birthday's year to the current year
    birthDateObj.setFullYear(today.getFullYear());

    // If the birthday has already passed this year, set the next birthday to the following year
    if (birthDateObj < today) {
        birthDateObj.setFullYear(today.getFullYear() + 1);
    }

    const timeDifference = birthDateObj.getTime() - today.getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
};

const Home = () => {
    const birthDate = '2006-10-31'; // Your actual birthdate
    const daysLeft = calculateDaysUntilBirthday(birthDate);

    return (
        <Layout>
            <Head>
                <title>Biraj Rai | Software Developer</title>
                <meta name="description" content="Welcome to my personal website!" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="flex items-center justify-center bg-gray-50 text-gray-900 overflow-hidden">
                <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row-reverse justify-between items-center space-y-8 md:space-y-0">

                    {/* Left Column - Image */}
                    <div className="flex flex-col items-center mb-4 md:mb-0">
                        <div className="w-40 h-40 bg-white rounded-full shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="/path-to-your-image.jpg"
                                alt="Portrait of Biraj Rai, a software developer based in Bagmati, Nepal"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right Column - Intro */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <span className="text-xs font-medium text-gray-600">Hello, I'm</span>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                            Biraj Rai
                        </h1>
                        <span className="text-gray-600">
                            <ReactTyped
                                strings={['a Software Developer', 'based in Bagmati, Nepal']}
                                typeSpeed={80}
                                backSpeed={40}
                                backDelay={1000}
                                loop
                            />
                        </span>
                        <p className="text-base text-gray-600 mb-4 max-w-lg mx-auto md:max-w-none">
                            I specialize in creating fast, responsive, and scalable web applications.
                        </p>
                        <p className="text-xs text-gray-600">
                            My next birthday is in {daysLeft} days! 🎉
                        </p>
                        <a
                            href="/about"
                            className="inline-block mt-4 px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all"
                        >
                            Learn More About Me
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
