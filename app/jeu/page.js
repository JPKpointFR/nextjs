"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'


const jeu = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    useEffect(() => {
        console.log('le nombre à changé');
    }, [number])


    return (
        <>
            <Link href="/cv">CV</Link>
            <div>{number}</div>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </>
    )
}

export default jeu