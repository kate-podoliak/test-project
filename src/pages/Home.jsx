import '../assets/styles/Home.scss';
import home_1 from '../assets/img/home_1.jpg';
import home_2 from '../assets/img/home_2.jpg';
import star_1 from '../assets/img/star_1.svg';
import star_2 from '../assets/img/star_2.svg';
import star_3 from '../assets/img/star_3.svg';
import about_1 from '../assets/img/about_1.jpg';
import accomm_1 from '../assets/img/accomm_1.jpg';
import accomm_2 from '../assets/img/accomm_2.jpg';
import accomm_3 from '../assets/img/accomm_3.jpg';
import accomm_4 from '../assets/img/accomm_4.jpg';
import rest_1 from '../assets/img/rest_1.jpg';
import art_1 from '../assets/img/art_1.jpg';
import art_2 from '../assets/img/art_2.jpg';
import Slots from "../components/Slots";
import React, { useEffect } from "react";

function Home() {
    const handleScroll = () => {
        const sections = document.querySelectorAll('.section');

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom >= 0;

            if (inView) {
                section.classList.add('fade-in');
                section.classList.remove('fade-out');

                section.classList.add(`fade-in-${section.id}`);
            } else {
                section.classList.remove('fade-in');
                section.classList.add('fade-out');
                section.classList.remove(`fade-in-${section.id}`);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className='main container'>
            <section className='home section'>
                <div className="home-img img-container1">
                    <img src={home_1} alt="Home 1" className="home-img" />
                </div>
                <div className="home-title">
                    <div className="stars">
                        <div className="item-star">
                            <img src={star_1} width="32" height="32" alt="Star" />
                        </div>
                        <div className="item-star">
                            <img src={star_2} width="32" height="32" alt="Star" />
                        </div>
                        <div className="item-star">
                            <img src={star_3} width="32" height="32" alt="Star" />
                        </div>
                    </div>
                    <h1>Landgoed Huize De Vries met Speelcasino l Culinair Genot</h1>
                </div>
                <div className="home-img img-container2">
                    <img src={home_2} alt="Home 2" className="home-img" />
                </div>
            </section>
            <section className='about section fade-out' id="about">
                <div>
                    <h2 className="section-title">Over ons</h2>
                </div>
                <div className='about-block'>
                    <div className='about-container-1 text-18-14'>
                        <p>Landgoed De Eik met casino speeltafel is gelegen op het terrein van een eeuwenoud kasteel dat
                            teruggaat tot de 15e eeuw. Dit casinohotel behoudt zorgvuldig de authentieke charme en
                            architectonische elementen.</p>
                        <p>Een weelderig landhuis in Nederland, nabij de stad Utrecht. Dit hotel, gevestigd in een
                            historisch gebouw, beschikt over een uitgestrekt terrein en biedt bezoekers een
                            onvergetelijke ervaring.</p>
                    </div>
                    <div className='about-container-2'>
                        <img src={about_1} alt="About" />
                    </div>
                </div>
            </section>
            <section className='accomm section fade-out' id="accommodation">
                <div>
                    <h2 className="section-title">Accommodatie & casino</h2>
                </div>
                <div className='section-text text-18-14'>
                    <p>Dit hotel biedt stijlvolle kamers en suites die zijn ingericht met hoogwaardige materialen en
                        hedendaagse voorzieningen. Sommige kamers bieden een schitterend panorama van de omliggende
                        natuur of de zorgvuldig aangelegde tuinen.</p>
                    <p>Het landgoed is omgeven door adembenemende natuur, met uitgestrekte bossen, schilderachtige paden
                        en serene vijvers, wat het een perfecte plek maakt voor zowel ontspannende wandelingen als
                        actieve buitenactiviteiten.</p>
                </div>
                <div className='accomm-img'>
                    <div className='accomm-img-container'>
                        <img src={accomm_1} alt="Accommodation 1" />
                    </div>
                    <div className='accomm-img-container'>
                        <img src={accomm_2} alt="Accommodation 2" />
                    </div>
                    <div className='accomm-img-container'>
                        <img src={accomm_3} alt="Accommodation 3" />
                    </div>
                    <div className='accomm-img-container'>
                        <img src={accomm_4} alt="Accommodation 4" />
                    </div>
                </div>
            </section>
            <section className='rest section fade-out' id="restaurants">
                <div>
                    <h2 className="section-title">Restaurants en Culinair</h2>
                </div>
                <div className='rest-container'>
                    <div className='rest-text-1 text-18-14'>
                        <p>Landgoed De Eikenboom staat bekend om zijn rijke gastronomische traditie. Het hotel herbergt
                            verschillende restaurants waar gasten kunnen genieten van verfijnde gerechten, bereid met
                            seizoensgebonden en lokale producten. Dit maakt het een perfecte bestemming voor culinaire
                            liefhebbers.</p>
                    </div>
                    <div className="rest-img-container">
                        <img src={rest_1} alt="Restaurants" />
                    </div>
                    <div className='rest-text-2 text-18-14'>
                        <p>Landgoed De Eikenboom met casino lounge biedt een unieke kans om jezelf onder te dompelen in
                            een sfeervolle en historische ambiance, waar je kunt genieten van voortreffelijke culinaire
                            hoogstandjes te midden van een prachtig natuurdecor. Dit maakt het een ideale plek voor
                            romantische uitjes, evenementen en onvergetelijke vieringen.</p>
                    </div>
                </div>
            </section>
            <section className='art section fade-out' id="art">
                <div>
                    <h2 className="section-title">Kunst & casino</h2>
                </div>
                <div className='section-text text-18-14'>
                    <p>Het hotel biedt kunsttentoonstellingen en culturele evenementen, waardoor het ideaal is voor
                        kunstliefhebbers.</p>
                    <p>Landgoed Eikenhof met casino lounge biedt de mogelijkheid om diverse evenementen te hosten,
                        waaronder huwelijksceremonies en zakelijke bijeenkomsten, in sfeervolle, historisch
                        geïnspireerde zalen en schilderachtige buitenruimtes.</p>
                    <p>Gelegen nabij Utrecht, biedt het hotel gemakkelijke toegang tot de stad en haar vele attracties.
                    </p>
                </div>
                <div className='block-img'>
                    <div className='img'>
                        <img src={art_1} alt="Art 1" />
                    </div>
                    <div className='img'>
                        <img src={art_2} alt="Art 2" />
                    </div>
                </div>
            </section>
            <section className='game section fade-out' id="game">
                <div>
                    <h2 className="game-title">Spelkamer casino</h2>
                </div>
                <Slots />
            </section>
        </main>
    );
}

export default Home;
