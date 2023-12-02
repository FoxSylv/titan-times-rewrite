import { useParams, useRouteLoaderData } from 'react-router-dom';
import ErrorPage from './ErrorPage';

export default function News() {
    const {newsLink} = useParams();
    const volumes = useRouteLoaderData("root");
    const volumeNum = parseInt(newsLink.slice(3)) - 1; /* All volumes have an address of the form /news/volXX */

    return (<>
        {volumes[volumeNum]?.route ?? <ErrorPage is404="true" />}
    </>);
}
