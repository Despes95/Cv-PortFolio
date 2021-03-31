import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Nicolas Pires</h1>
                    <h2>Développeur web junior</h2>
                    <p className="para">Le développement web m'interpelle depuis longtemps déjà. Mais, très impliquée dans mon domaine l'aeronautique, je n'avais jamais eu l'occasion de m'y consacrer aussi pleinement que je l'aurais souhaité.
                    Il y a un an, j'ai décidé de sauter le pas et de prendre le temps de m'auto-former. Depuis, je code quotidiennement. Avec chaque jour davantage de passion.</p>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;