import React from 'react';
import Slots from "../components/Slots";

function Playroom() {

    return (
        <main className='container'>
            <section className='game section'>
                <div>
                    <h2 className="game-title">Spelkamer</h2>
                </div>
                <Slots/>
            </section>
        </main>
);
}

export default Playroom;
