import { useRouteError } from "react-router-dom";

export default function ErrorPage(props) {
    const error = useRouteError();
    var err = (props.is404 ? "404" : error.statusText);
    var msg = (props.is404 ? "Page not found" : error.message);

    return (<>
        <div className="text-center">
            <h1>
                An error has occurred!
            </h1>
            <h2>
                Please send this to the Brilliance Team!
            </h2>
            <p>
                {err}
                <br />
                {msg}
            </p>
        </div>
    </>);
}
