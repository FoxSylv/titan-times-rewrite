import { ScrollRestoration, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


export default function Root() {
    return (<>
        <ScrollRestoration />
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>);
}
