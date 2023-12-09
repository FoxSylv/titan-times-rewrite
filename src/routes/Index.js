import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import { newsRegistry } from '../data/newsRegistry.js';
import ANO from '../assets/ANO.png';

export default function Index() {
    const newsPreviews = newsRegistry.map((volData, volNum) => {
        return <div key={`newsPreview${volNum + 1}`} className="w-72 shrink-0 h-96 mx-2 p-5 rounded-md bg-white text-black">
            <p className="text-xs text-left">
                {`📅 ${volData.dateOfPublication}`}
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-0">
                {`Volume ${volNum + 1}`}
            </h2>
            <div className="h-52 overflow-hidden relative">
                <div className="text-left">
                    {volData.route /* Not a great solution, but will always display the preamble since the preamble is always first */}
                </div>
                <div className="w-full h-2/3 absolute bottom-0 bg-gradient-to-t from-white">
                </div>
            </div>
            <Link to={`/news/vol${volNum + 1}`} className="block w-full mt-4 py-3 font-bold text-white rounded-md shadow-sm bg-black hover:bg-slate-800 hover:slate-800 transition-all duration-300" draggable="false">
                Read More
            </Link>
        </div>;
    });

    return (<>
        <section className="mt-16 pb-8 w-full">
            <div className="flex items-center mt-24 max-w-6xl px-8 m-auto">
                <div className="flex-grow md:max-w-lg">
                    <h1 className="text-5xl font-header font-bold mb-12">
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
        </section>
        <section className="w-full min-h-[100vh] bg-[url(./assets/viking-nations.png)] bg-center bg-cover bg-no-repeat relative">
            <div className="mt-16 max-w-6xl pt-32 m-auto text-center">
                <h1 className="text-5xl font-header font-bold">
                    Top Weekly Players
                </h1>
                <h2 className="text-3xl mt-8">
                    Coming Soon!
                </h2>
            </div>
            <div className="w-full h-full absolute left-0 top-0 pointer-events-none bg-gradient-to-b from-white to-10%">
            </div>
            <div className="w-full h-full absolute left-0 bottom-0 pointer-events-none bg-gradient-to-t from-black to-10%">
            </div>
        </section>
        <section className="bg-black text-white p-2 pt-48 w-full text-center relative">
            <h1 className="text-5xl font-header font-bold">
                Titan Times
            </h1>
            <p className="m-auto mt-12 max-w-lg">
                Our guild newspaper! We need more writers for it!
                If you're interested in interviewing members of the guild,
                writing short stories, and informing the rest of the guild about whats going on,
                this is what you should look into!
            </p>
            <Slider className="mt-24">
                {newsPreviews}
            </Slider>
            <div className="w-1/4 h-full absolute left-0 bottom-0 pointer-events-none bg-gradient-to-r from-black to-10%">
            </div>
            <div className="w-1/4 h-full absolute right-0 bottom-0 pointer-events-none bg-gradient-to-l from-black to-10%">
            </div>
        </section>
        <section className="bg-black text-white text-center pt-36">
            <div className="w-full min-h-[100vh] bg-[url(./assets/ano-group-photo.png)] bg-center bg-cover bg-no-repeat relative p-2 pt-24">
                <h1 className="text-5xl font-header font-bold mb-12">
                    Join Our Ranks
                </h1>
                <p>
                    Are you looking to join a fun, interactive guild to spice up your Wynncraft experience?
                </p>
                <p>
                    Join <strong>Titan's Valor [ANO]</strong> today! You can apply on our discord server.
                </p>
                <div className="w-full h-full absolute left-0 top-0 pointer-events-none bg-gradient-to-b from-black to-10%">
                </div>
            </div>
        </section>
    </>);
}
