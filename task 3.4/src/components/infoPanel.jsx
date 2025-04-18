import React from 'react'
import { useGameStore } from '../store/useGameStore'

const InfoPanel = ({ player }) => {
    const { currentPlayer, winner, fullReset } = useGameStore()

    return (
        <div className="info-panel">
            <p>Your turn: <strong>{currentPlayer}</strong></p>
            {winner && <p>🎉 Winner!: {winner}!</p>}
            <button className='reset' onClick={fullReset}>Reset</button>
        </div>
    )
}

export default InfoPanel
