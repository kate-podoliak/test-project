import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {

    return (
        <main className='container not-found'>
            <p className='not-found-title'>Sorry, deze pagina kon niet worden gevonden!</p>
            <p className='not-found-text'>Beste gebruikers, de opgevraagde pagina is niet beschikbaar. U kunt terugkeren naar de startpagina.</p>
            <Link to="/" className='nav-list-link'>Huis</Link>
        </main>
    );
}

export default NotFound;
