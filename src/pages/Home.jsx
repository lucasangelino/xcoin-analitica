import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css'; // Asegúrate de que el CSS está siendo importado correctamente

function Home() {
    const navbarLinks = [
        { path: '/', label: 'Cerrar sesion' }
    ];

    return (
        <div className="Home-container">
            <Navbar links={navbarLinks} />
            <div className="powerbi-iframe-container">
                <iframe
                    title="XCoin-XWallet"
                    width="600"
                    height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNDhkZDBkMTItNjBjZi00ZDRhLTg2ODItZDZiNzM2Y2JlODM2IiwidCI6IjFjZmQyZGRmLThjMjctNDljZi1hNzU2LWI5NWQ4YzhmZTc3MyJ9&pageName=9ee961e09605e1963126"
                    frameborder="0"
                    allowFullScreen="true">

                </iframe>

            </div>
            <Footer />
        </div>
    );
}

export default Home;
