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

    const volumeListing = newsRegistry.map((newsData, volumeNum) => {
        return <Link to={`/news/vol${volumeNum + 1}`} key={`headerVol${volumeNum}`} className="hover:bg-zinc-800 focus:bg-zinc-800 transition-all duration-300 h-3/4 mx-3 rounded-md flex items-center" draggable="false">
            <h3 className="w-24 text-center font-header font-bold text-sm m-0">
                {`Volume ${volumeNum + 1}`}
            </h3>
        </Link>
    });

    return (<>
        <Header width="66%" height="3" hasFlares="true" className="mt-4 sticky">
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
                Titan Times, A New Edition
            </h1>
            <article className="mt-8">
                {volume?.route ?? <ErrorPage is404="true" />}
            </article>
        </div>
    </>);
}
