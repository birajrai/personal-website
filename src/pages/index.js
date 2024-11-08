import Head from 'next/head';
import { ReactTyped } from 'react-typed';
import { useState, useEffect } from 'react';

// Utility function to calculate time until next birthday
const calculateTimeUntilBirthday = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    // Set the next birthday's year to the current year
    birthDateObj.setFullYear(today.getFullYear());

    // If the birthday has already passed this year, set the next birthday to the following year
    if (birthDateObj < today) {
        birthDateObj.setFullYear(today.getFullYear() + 1);
    }

    const timeDifference = birthDateObj - today;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

const Home = () => {
    const [timeLeft, setTimeLeft] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Track loading state for the countdown
    const birthDate = '2006-10-31'; // Your actual birthdate

    useEffect(() => {
        // Update the time every second
        const interval = setInterval(() => {
            const time = calculateTimeUntilBirthday(birthDate);
            setTimeLeft(time);
            setIsLoading(false); // Set loading to false once time is calculated
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [birthDate]);

    return (
        <>
            <Head>
                <title>Biraj Rai | Software Developer</title>
                <meta name="description" content="Welcome to my personal website!" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="flex items-start justify-start bg-gray-50 text-gray-900 overflow-hidden">
                <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-start items-start space-y-8 md:space-y-0">
                    <div className="flex flex-col items-start text-center md:text-left space-y-4">
                        <span className="text-xs font-medium text-gray-600">Hello, I'm</span>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                            Biraj Rai{" "}
                            <span className="text-gray-600">
                                <ReactTyped
                                    strings={['a Software Developer', 'based in Bagmati, Nepal']}
                                    typeSpeed={80}
                                    backSpeed={40}
                                    backDelay={1000}
                                    loop
                                />
                            </span>
                        </h1>
                        <p className="text-base text-gray-600 mb-4">
                            I specialize in creating fast, responsive, and scalable web applications.
                        </p>
                        <p className="text-xs text-gray-600">
                            {/* Only show loading for the countdown */}
                            {isLoading
                                ? 'My next birthday is in x days, x hours, x minutes, and x seconds! 🎉'
                                : `My next birthday is in ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, and ${timeLeft.seconds} seconds! 🎉`
                            }
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
        </>
    );
};

export default Home;
