import Link from 'next/link';
import Script from 'next/Script';
import { PrismaClient } from '@prisma/client';
import {React, useState} from 'react';
import CardDetail from '../components/card-details';
import styles from '../styles/Magic.module.css';
import AddScreen from '../components/AddScreen';
import DisplayScreen from '../components/DisplayScreen';

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
    const cards = await prisma.cardEntry.findMany()
    return {
      props: {
        initialCards: cards
      }
    }
  }

  const delCard = async (card) => {
    if (window.confirm("Do you want to delete this card?")) {
        await fetch('/api/deleteCard', {
          method: 'POST',
          body: JSON.stringify({
            id: card.id
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf8'
          }
        })
        console.log("response", card)
      }
  }

  const saveCard = async (card) => {
    const response = await fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json; charset=utf8'
      }
    })
  
    console.log("response", card)
  
    if (!response.ok) {
      throw new Error(response.statusText)
    }
  
    return await response.json()
  }

export default function Magic({ initialCards }) {
    const [cards, setCards] = useState(initialCards);
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
            <Script type="module" strategy='beforeInteractive' src="/sql-loader.js"/>
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

            <div class="grid md:grid-cols-3">
            <AddScreen cards = { initialCards } AddCardFormProps = {async (data, e) => {
                try {
                  await saveContact(data)
                  setCards([...cards, data])
                  e.target.reset()
                } catch (error) {
                  console.log(error);
                }
            }} />
            <DisplayScreen cards = { initialCards } delContact = { delCard } />
            </div>
        </div>
    );
}