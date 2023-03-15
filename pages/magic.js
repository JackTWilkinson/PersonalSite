import Link from 'next/link';
import {React, useState} from 'react';
import styles from '../styles/Magic.module.css'

export default function Magic() {
    const [cardName, setCardName] = useState();
    const [cardPrice, setCardPrice] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [cardImage, setCardImage] = useState('/magic_back.jpg');
    const [searchCompleted, setSearchCompleted] = useState(false);
    const delayInMilliseconds = 60;

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
                setCardImage(data.image_uris.normal);
                setCardPrice(data.prices.usd != null ? data.prices.usd : 'Couldn\'t retrieve a price');
                console.log('Here is the prices: ');
                console.log(JSON.stringify(data.prices));
                setSearchCompleted(true);
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles.container}>
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
              {/* TODO add additional filtering */}
              {/* TODO add data storage of some way to add collection functionality */}
              {/* <button type="">Clear</button> TODO add clearing */}
            </form><br/>
            <img
                src={cardImage}
                alt="Card Art"
            />
            {
                searchCompleted &&
                <div>
                    <p>Here is the price I found:</p>
                    <p>{cardPrice}</p>
                    <p>Here is the card name I found:</p>
                    <p>{cardName}</p>
                    <p>Here is the art of the card I found:</p>
                </div>
            }
        </div>
    );
}