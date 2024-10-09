import React from 'react';
import game_1 from "../assets/img/game_1.jpeg";
import game_2 from "../assets/img/game_2.jpeg";

function Slots() {

    return (
        <>
            <div className='game-text p-text text-18-14'>
                <p>De speelruimte is elegant ingericht en biedt een uitgebreide selectie aan speelautomaten en spellen.
                    Gasten kunnen genieten van hun favoriete spellen in een levendige en spannende omgeving zonder hun
                    kamer te hoeven verlaten.</p>
                <p>De speelruimte is uitgerust met alle moderne gemakken voor een comfortabel verblijf. De kamer
                    beschikt over een luxe bed, een flatscreen-tv, gratis WiFi en een minibar. Bovendien zijn er was- en
                    strijkservices beschikbaar voor extra gemak.</p>
                <p>Wij bieden uitstekende mogelijkheden voor het spelen van blackjack. De speeltafels zijn uitgerust met
                    geavanceerde technologie en worden bemand door ervaren dealers, die een opwindende en meeslepende
                    speelervaring garanderen.</p>
            </div>
            <div className='block-img'>
                <div className='img'>
                    <img src={game_1} alt="Game 1"/>
                </div>
                <div className='img'>
                    <img src={game_2} alt="Game 2"/>
                </div>
            </div>
        </>
    );
}

export default Slots;
