import React from 'react'
import data from './data/data.json'
import { Card } from './Card'
import styles from '../app/page.module.css'

export const Message = () => {
    const getRandomIndex = (arrLength: number) => Math.floor(Math.random()*arrLength)

  return (
    <div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Card list={data.astrology} title="The stars message for you today" />
        </div>
        <div className={styles.card}>
          <Card
            list={data.inspirational}
            title="In case you need some inspiration"
          />
        </div>
        <div className={styles.card}>
          <Card list={data.jokes} title="or a reason to smile" />
        </div>
      </div>
      
    </div>
  );
}
