import Link from 'next/link';
// import {NextPage} from 'next'; TODO may need to convert some things to typescript
import {React, useState} from 'react';
import '../styles/Magic.module.css';

export default function Magic() {
    const [cardName, setCardName] = useState();
    const [cardPrice, setCardPrice] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [cardImage, setCardImage] = useState(() => {
        const initialState = '/magic__back';
    });
    // useState can also manage elements, may be a way to create an array and reusable hooks to populate a form
    const delayInMilliseconds = 60;

    // const handleBarChange = (event) => {
    //     event.preventDefault;
    //     console.log(event);
    //     searchTerm = event.target.value;
    //     console.log(cardName);
    // }
    // Will likely need to be switched to this later in order to provide checking and management to input text
    // If this happens and it is lengthy enough may be worth breaking out into a new file for helpers

    function flipCard() {
        // this.classList.toggle("");
    }

    const submitSearch = async (event) => {
        event.preventDefault();
        console.log(event);
        try {
            //50-100 ms delay is needed to prevent ip ban
            await new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
            await fetch('https://api.scryfall.com/cards/named?fuzzy=' + searchTerm + '/', {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Here is the data: ');
                console.log(data);
                setCardName(data.name);
                setCardImage(data.image);
                setCardPrice(data.prices.usd != null ? data.prices.usd : 'Couldn\'t retrieve a price');
                console.log(JSON.stringify(data.prices));
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <section>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </section>
            <h1>Here is the search bar for magic cards!</h1>
            <form onSubmit={submitSearch}>
              <label>Card Name: </label>
              <input required type="text" id="cName" name="cName" onChange={e => setSearchTerm(e.target.value)} />
              <button type="submit">Submit</button>
            </form>
            <p>Here is the price I found:</p>
            <p>{cardPrice}</p>
            <p>Here is the card name I found:</p>
            <p>{cardName}</p>
            <p>Here is the art of the card I found:</p>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img
                            src='/magic_back.jpg'
                            alt='The image for the queried card1'
                        />
                    </div>
                    <div class="flip-card-back">
                        <img
                            src='/magic_front.jpg'
                            alt='The image for the queried card2'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}