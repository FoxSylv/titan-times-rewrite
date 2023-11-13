import ANO from '../assets/ANO.png';

export default function Index() {
    return (<>
        <div className="mt-16 pb-8 w-full">
            <div className="flex items-center mt-16 max-w-6xl px-8 m-auto">
                <div className="flex-grow md:max-w-lg">
                    <h1 className="text-5xl font-header mb-12">
                        About the Guild
                    </h1>
                    <p>
                        Titans Valor, due to its extensive and rich history as a dominant guild during times of both prosperity and hardship, is an exemplar of perseverance and resilience among guilds.
                        Titans Valor does not crumble in times without territories, nor does it grow stagnant when fortune favors the guild.
                        Rather, Titans Valor consistently remains an active, unrelenting force that persists in spite of the ever-changing guild climate.
                    </p>
                </div>
                <div className="hidden md:inline min-w-[20rem]">
                    <img src={ANO} alt="" />
                </div>
            </div>
        </div>
        <div className="w-full min-h-[100vh] bg-[url(./assets/viking-nations.png)] bg-center bg-cover bg-no-repeat after:bg-[url(./assets/ANO.png)]">
            <div className="mt-16 max-w-6xl pt-32 m-auto text-center">
                <h1 className="text-4xl font-header">
                    Top Weekly Players
                </h1>
                <h2>
                    Note: Unfinished
                </h2>
            </div>
        </div>
        <div style={{height: "200vh", backgroundColor: "black"}}></div> {/* For Testing Scroll-Reliant Features */}
    </>);
}
