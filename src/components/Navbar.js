import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import ANO from '../assets/ANO.png';
import { ReactComponent as Search } from '../assets/search.svg';


function processScroll(setScrollPosition) {
    setScrollPosition(window.scrollY);
}

export default function Navbar() {
    /* Scroll handling (to expand when stickied) */
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        let scrollHandler = () => processScroll(setScrollPosition);
        window.addEventListener('scroll', scrollHandler, {passive: true});
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);


    let [isSubOpen, setIsSubOpen] = useState(false);

    const buttonClasses = "rounded-lg hover:bg-zinc-800 transition-all";
    const navLinkClasses = `px-4 py-1 ${buttonClasses}`;

    return (<>
        {/* TODO: Navigation dropdown for smaller screens */}
        <nav>
        </nav>

        {/* Main header*/}
        <Header height="4.375" hasFlares={scrollPosition <= 24} className="sticky top-0 mt-6">
            <div className="h-full md:pl-4 flex">
                <nav className="h-full flex items-center">
                    <Link to="/" title="Homepage" className={`flex items-center transition-all duration-700 pr-12 ${scrollPosition <= 24 ? "-translate-x-1/4 px-2" : ""}py-1 ${buttonClasses} rounded-2xl`}>
                        <img src={ANO} alt="Titan's Valor logo" className="h-12" />
                        <p className="font-minecraft text-2xl translate-y-[10%]">
                            [ANO]
                        </p>
                    </Link>
                    <div className="hidden md:flex items-center gap-6 mr-8">
                        <Link to="/vol1" className={navLinkClasses}>
                            News
                        </Link>
                        <Link to="/leaderboard" className={navLinkClasses}>
                            Leaderboard
                        </Link>
                        <a href="https://discord.gg/h8XUHkR" title="Titan's Valor Discord" className={navLinkClasses} target="_blank" rel="noopener noreferrer">
                            Apply
                        </a>
                    </div>
                </nav>
                <div className="flex-grow flex flex-row-reverse items-center">
                    <button title="Search" className={`${buttonClasses} p-3 hidden md:inline`} onClick={() => alert("Searching is not yet implemented!\nThe Brilliance Team is working on it")}>
                        <Search width="1.8rem" height="1.8rem" alt="Search Button" />
                    </button>
                    <button title="Navigate" className={`${buttonClasses} p-2 inline md:hidden`} onClick={() => setIsSubOpen(!isSubOpen)}>
                        <svg width="2rem" height="2rem" viewBox="0 0 24 24" alt="Navigate Button">
                            <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </Header >
    </>);
}
