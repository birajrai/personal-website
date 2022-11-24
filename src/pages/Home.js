import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-gray-900 px-10 dark:bg-white md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">biraj</h1>
            <ul className="flex items-center">
              <li>
                <MdOutlineLightMode
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-blue-500 text- to-blue-700 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://discord.gg/n4K3B7pDVF"
                >
                  Discord
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center">
            <div className="text-white">
              <span className="font-bold text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Name{" "}
              </span>
              <span className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Biraj
              </span>
            </div>
            <div className="text-white ">
              <span className="font-bold text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Age{" "}
              </span>
              <span className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                16
              </span>
            </div>
            <div className="text-white ">
              <span className="font-bold text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Location{" "}
              </span>
              <span className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Hetauda, Nepal
              </span>
            </div>
            <div className="text-white">
              <span className="font-bold text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Languages{" "}
              </span>
              <span className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                English, Nepali
              </span>
            </div>
            <div className="text-white">
              <span className="font-bold text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Pronouns{" "}
              </span>
              <span className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                he/him
              </span>
            </div>
            <div className="text-white">
              <span className="font-bold text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Timezone{" "}
              </span>
              <span className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                UTC
              </span>
            </div>
            <div className="text-white">
              <span className="font-bold text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Programming Languages{" "}
              </span>
              <span className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Javascript
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
