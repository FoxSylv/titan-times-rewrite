import TriviaPose from '../assets/triviapose.png';

export default function TriviaFact(props) {
    return (<>
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div className="w-[calc(100%-2rem)] m-auto border-t-[0.5rem] border-black">
                </div>
                <div className="w-[calc(100%-1rem)] m-auto h-2 border-x-[0.5rem] border-black">
                </div>
                <div className="w-full border-x-[0.5rem] border-black p-4 font-minecraft text-blue-900 text-xl">
                    {props.children}
                </div>
                <div className="w-[calc(100%-1rem)] m-auto h-2 border-x-[0.5rem] border-black">
                </div>
                <div className="w-[calc(100%-2rem)] m-auto flex flex-row">
                    <div className="w-[calc(100%-5.5rem)] border-t-[0.5rem] border-black">
                    </div>
                    <div className="w-12">
                    </div>
                    <div className="w-10 border-t-[0.5rem] border-black">
                    </div>
                </div>
                <div className="w-16 h-2 border-x-[0.5rem] border-black ml-[calc(100%-7rem)]">
                </div>
                <div className="w-16 h-2 border-x-[0.5rem] border-black ml-[calc(100%-7rem)]">
                </div>
                <div className="w-[4.5rem] h-2 border-x-[0.5rem] border-black ml-[calc(100%-7rem)]">
                </div>
                <div className="w-[4.5rem] h-2 border-x-[0.5rem] border-black ml-[calc(100%-6.5rem)]">
                </div>
                <div className="w-16 border-t-[0.5rem] border-black ml-[calc(100%-6rem)]">
                </div>
                <div className="w-full h-0 hidden lg:inline">
                    <div className="ml-auto w-40 -translate-y-12 translate-x-24 relative -z-10">
                        <img src={TriviaPose} alt="" width="100%" />
                        <div className="w-full h-full absolute left-0 top-0 pointer-events-none bg-gradient-to-t from-white to-20%">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
