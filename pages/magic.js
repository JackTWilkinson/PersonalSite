import Link from 'next/link';
import {React, useState} from 'react';
import CardDetail from '../components/card-details';
import styles from '../styles/Magic.module.css'

export default function Magic() {
    const [searchTerm, setSearchTerm] = useState();
    const [cardImage, setCardImage] = useState('/magic_back.jpg');
    const [searchCompleted, setSearchCompleted] = useState(false);
    const [cardData, setCardData] = useState();
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
                setCardImage(data.image_uris.normal);
                setSearchCompleted(true);
                setCardData(data);
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
                <>
                    <div>
                        <CardDetail cardDetails={cardData}/>
                    </div>
                </>
            }
        </div>
    );
}