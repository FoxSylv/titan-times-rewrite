import { Link, useParams, useRouteLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import ErrorPage from './ErrorPage';
import Header from '../components/Header';
import Slider from '../components/Slider';
import { newsRegistry } from '../data/newsRegistry.js';

export default function News() {
    const {newsLink} = useParams();
    const volumes = useRouteLoaderData("root");
    const volumeNum = parseInt(newsLink.slice(3)) - 1; /* All volumes have an address of the form /news/volXX */
    const volume = volumes[volumeNum];

    useEffect(() => {
        document.title = `Volume ${volumeNum + 1} - Titan Times`;
    }, [volumeNum]);

    const volumeListing = newsRegistry.map((newsData, volNum) => {
        return <Link to={`/news/vol${volNum + 1}`} key={`headerVol${volNum}`} className={`${volumeNum === volNum ? "bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 border-zinc-600" : "hover:bg-zinc-800 focus:bg-zinc-800 border-transparent"} border-2 transition-all duration-300 min-w-[6rem] h-3/4 mx-3 rounded-md flex items-center`} draggable="false">
            <h3 className="w-full text-center font-header font-bold text-sm m-0">
                {`Volume ${volNum + 1}`}
                <div className="w-full m-auto h-0">
                    <div className={`${volumeNum === volNum ? "w-1 h-1 border-4 border-transparent border-t-white" : "w-0 h-0"} m-auto transition-all duration-300`}>
                    </div>
                </div>
            </h3>
        </Link>
    });

    return (<>
        <Header width="66%" height="3" hasFlares="true" className="mt-4 sticky top-20">
            <nav className="h-full">
                <Slider className="h-full">
                    {volumeListing}
                </Slider>
            </nav>
            <div className="w-full h-full absolute left-0 bottom-0 pointer-events-none bg-gradient-to-r from-zinc-950 to-30%">
            </div>
            <div className="w-full h-full absolute right-0 bottom-0 pointer-events-none bg-gradient-to-l from-zinc-950 to-30%">
            </div>
        </Header>
        <div className="max-w-3xl m-auto px-4">
            <h4 className="font-normal mt-4 mb-0">
                {`Volume ${volumeNum + 1}`}
            </h4>
            <h5 className="mt-0 font-normal text-sm">
                {volume.dateOfPublication}
            </h5>
            <h1 className="mt-12">
                Titan Times, A New Edition {volumeNum > 2 ? "📰" : ""}
            </h1>
            <article className="mt-8 mb-32">
                {volume?.route ?? <ErrorPage is404="true" />}
            </article>
        </div>
    </>);
}
