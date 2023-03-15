import {React, useState} from 'react';
import styles from '../styles/Home.module.css';

export default function WorkExperience() {

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
                <title>Prior Work Experience</title>
            </Head>
            <main>
                {/* TODO maybe a grid? Idk how best to layout these,  probably just stacked on top of each other */}
                <div>
                    <h3>Hy-vee Internship</h3><br/>
                    <p className={styles.description}>
                        Work Description Goes here
                    </p>
                    <div>
                        <p>Date Started</p>
                        <p>Date Ended</p>
                    </div>
                </div>
                {/* TODO create a component for each of the experience */}
            </main>
            <footer>
                Created By Jack Wilkinson
            </footer>
        </div>
    );
}