const DisplayScreen = ({ cards, delCard }) => {
    console.log(cards)
    return (
        <div className="px-16 bg-gray-100 md:col-span-2 h-screen">
            <h1 className="font-bold text-slate-800">All Cards</h1>
            {
                cards.map(card => (
                    <div key={card.id} className="bg-white rounded-md overflow-hidden shadow p-3 my-3 grid grid-cols-3 gap-3">
                        <div className="md:col-span-2">
                            <h1>{ card.cardName }</h1>
                            <h1>{ card.copies }</h1>
                            <span className="text-sm font-bold">{ card.owner }</span>
                        </div>
                        <div className="md:col-span-1">
                            <button className="bg-red-500 text-white p-2 rounded-md hover:scale-125 hover:opacity-80" onClick={
                                () => delCard(card)
                            }>Del</button>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}

export default DisplayScreen;