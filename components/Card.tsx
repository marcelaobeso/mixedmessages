'use client'
import React, { useEffect, useMemo, useState } from 'react'
import styles from '../app/page.module.css'

interface CardProps {
    list: string[], 
    title: string
}
export const Card = ({list, title}: CardProps) => {
    const [message, setMessage] = useState('')
    const changeMessage = () => {
        const index = Math.floor(Math.random()*list.length)
        setMessage(list[index])
    }
    useEffect(()=>{
        changeMessage()
    }, [])
  return (
    <div>
        <h3>
            {title}
        </h3>
        <br/>
        <p>
            {message}
        </p>
        <div className={styles.container}>
        <button className={styles["button-50"]} onClick={changeMessage}>New message</button>
      </div>
    </div>
  )
}
