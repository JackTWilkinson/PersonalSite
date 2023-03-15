import {React, useState} from 'react';
import styles from '../styles/Home.module.css';

export default function About() {

    return(
        <div className={styles.container}>
            <section>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </section>
            <Head>
                <title>About Me Page!</title>
            </Head>
            <main>
                <h1 className={styles.title}>
                    Welcome to the about me page!
                </h1>
                <p  className={styles.description}>
                    I'm a software developer based out of Colorado.\n
                    I'm a huge fan of skiing, hiking and all the other activities that Colorado \n
                    has to offer! \n
                    When I get the chance I've traveled abroad and throughout the United States! This included
                    spending a semester abroad in the United Kingdom during my time in University and visiting
                    several other countries.
                    {/* TODO include some artwork and board games examples or something. Maybe a picture of me? */}
                </p>
            </main>

            <footer>
                Created By Jack Wilkinson
            </footer>
        </div>
    );
}