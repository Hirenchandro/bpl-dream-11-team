import Players from "../Players/Players";


const Availableplayers = () => {
    return (
        <div>
            <div className="flex justify-between p-4 mx-56">
                <h1 className="text-3xl font-semibold">Available Players</h1>
                <div className="border border-black">
                <button className=" bg-white p-2">Available</button>
                <button className="ml-2 border-l border-black bg-white p-2">Selected</button>
                </div>
                
            </div>
            <Players></Players>
        </div>
    );
};

export default Availableplayers;