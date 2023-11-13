const flareRatio = 0.6666666;

//Using `style` is a terrible solution, but it's the only way I could think of to allow for variable heights.
//We need this because the main header and news subheader are different heights.
//Height is assumed to be given in rem units

function Flare(props) {
    const flareClasses = `border-box border-x-transparent border-y-zinc-950 transition-all duration-700`;
    const flareStyles = {width: `${props.width}rem`, borderWidth: `${props.height / 2}rem ${props.width}rem`};
    return <div className={flareClasses.concat(` ${props.className}`)} style={flareStyles}></div>;
}

export default function Header(props) {
    const flareHeight = props.height ?? 0;
    const flareWidth = flareHeight * flareRatio / 2;

    const headerClasses = "m-auto bg-zinc-950 text-white transition-all duration-700 flex align-center";
    return (
        <header className={headerClasses.concat(` ${props.className}`)} style={{width: props.hasFlares ? `calc(100% - 4 * ${flareWidth}rem)` : "100%", height: `${flareHeight}rem`}}>
            <Flare width={props.hasFlares ? flareWidth : 0} height={flareHeight} className="float-left -translate-x-1/2" />
            <div className={`flex-grow transition-all duration-700 ${props.hasFlares ? "-mx-8" : ""}`}>
                {props.children}
            </div>
            <Flare width={props.hasFlares ? flareWidth : 0} height={flareHeight} className="float-right translate-x-1/2" />
        </header>
    );
}
