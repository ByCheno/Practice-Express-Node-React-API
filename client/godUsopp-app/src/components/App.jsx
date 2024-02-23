import { useState, useEffect } from "react";

const App = () => {

    const [backendData, setBackendData] = useState([{}]);
    const url = "https://api.api-onepiece.com/v2/characters/en";

    useEffect(() => {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            setBackendData(data);
        })
        .catch(function() {
            console.log("Fetch error");
        });
    }, [])

    if (!backendData || backendData.length === 0) {
        return <div>Error: No data received from backend</div>
    }

    return (
        <>
            <h1 className="title-character">One Piece Characters</h1>
            <div className="row">
                {backendData.map((character, index) => (
                    <div key={index} className="col-lg-3 mt-4">
                        <div className="card" style={{ backgroundColor: character.job === 'Captain' ? 'rgb(186, 228, 255)' : 'white' }}>
                            <div className="card-container">
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text">{character.fruit?.description}</p>
                                    <p className="card-text">Edad: {character.age}</p>
                                    <p className="card-text">Recompensa: {character.bounty}</p>
                                    <p className="card-text">Tripulacion: {character.crew?.name}</p>
                                    <p className="card-text">Fruta: {character.fruit?.name}</p>
                                    <p className="card-text">Puesto: {character.job}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>    
    )
}

export default App;