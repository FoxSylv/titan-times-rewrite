import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import ANO from '../assets/ANO.png';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Arrow } from '../assets/arrow.svg';


function SearchButton(props) {
    /* TODO: Implement searching */
    return (
        <button title="Search" className={props.className ?? ""} onClick={() => alert("Searching is not yet implemented!\nThe Brilliance Team is working on it")}>
            <Search width={props.width ?? "1.8rem"} height={props.height ?? "1.8rem"} alt="Search Button" />
        </button>
    );
}

function NavLinks(props) {
    return (
        <nav className={props.className}>
            <Link to="/vol1" className={props.linkClassName}>
                News
            </Link>
            <Link to="/leaderboard" className={props.linkClassName}>
                Leaderboard
            </Link>
            <a href="https://discord.gg/h8XUHkR" title="Titan's Valor Discord" className={props.linkClassName} target="_blank" rel="noopener noreferrer">
                Apply
            </a>
        </nav>
    );
}

export default function Navbar() {
    /* Scroll handling (to expand when stickied) */
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        let scrollHandler = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', scrollHandler, {passive: true});
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);


    let [isSubOpen, setIsSubOpen] = useState(false);
    const buttonClasses = "rounded-lg hover:bg-zinc-800 transition-all";


    return (<>
        {/* Navigation sidebar for smaller screens */}
        <div className="sticky top-0 left-0 w-0 h-0 z-40">
            <div className={`w-[100vw] h-[100vh] backdrop-blur-sm bg-white/30 transition-all transition-duration-700 ${isSubOpen ? "bg-transparent" : "hidden"}`}>
            </div>
        </div>
        <div className="sticky top-0 left-0 w-0 h-0 z-50">
            <div className={`min-w-[75vw] xs:min-w-[50vw] h-[100vh] bg-zinc-950 transition-all transition-duration-700 ${isSubOpen ? "" : "-translate-x-[100%]"}`}>
                <div className="p-6 flex">
                    <button onClick={() => setIsSubOpen(!isSubOpen)}>
                        <Arrow width="1.8rem" height="1.8rem" alt="Return Button" className="invert rotate-90 transition-all hover:-translate-x-1" />
                    </button>
                    <div className="flex-grow flex flex-row-reverse">
                        <SearchButton className={`p-2 ${buttonClasses}`} />
                    </div>
                </div>
                <NavLinks className="mt-4 flex flex-col" linkClassName="p-4 font-header font-semibold text-white text-2xl odd:bg-zinc-900 hover:bg-zinc-800 transition-all" />
            </div>
        </div>

        {/* Main header*/}
        <Header height="4.375" hasFlares={scrollPosition <= 24} className="sticky top-0 mt-6 shadow-xl">
            <div className="h-full md:pl-4 flex text-white">
                <div className="h-full px-4 flex items-center font-header font-semibold">
                    <Link to="/" title="Homepage" className={`flex items-center transition-all duration-700 pr-0 xs:pr-12 mr-2 ${scrollPosition <= 24 ? "px-2" : ""}py-1 ${buttonClasses} rounded-2xl`}>
                        <img src={ANO} alt="Titan's Valor logo" className="h-12" />
                        <p className="font-minecraft text-2xl translate-y-[10%] hidden xs:inline">
                            [ANO]
                        </p>
                    </Link>
                    <NavLinks className="hidden md:flex items-center gap-6 mr-8" linkClassName={`px-4 py-1 ${buttonClasses}`} />
                </div>
                <div className="flex-grow flex flex-row-reverse items-center">
                    <SearchButton className={`${buttonClasses} p-3 mr-2 hidden md:inline`} />
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
