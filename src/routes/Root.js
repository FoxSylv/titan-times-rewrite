import { ScrollRestoration, Outlet } from 'react-router-dom';

export default function Root() {
    return (<>
        <ScrollRestoration />
        <Outlet />
    </>);
}
