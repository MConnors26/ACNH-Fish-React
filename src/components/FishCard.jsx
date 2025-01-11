import "../css/FishCard.css"

function FishCard({fish}) {

    function FavoriteClick() {
        alert("added to favorites")
    }

    return (
        <div className="fish-card">
            <div className="fish-ind">
                <div className="fish-pic">
                    <img src={fish.imageUrl} alt={fish.title} />
                    <div className="fish-overlay">
                        <button className="favorite-btn" onClick={FavoriteClick}>♥</button>
                    </div>
                </div>
                <div className="fish-info">
                    <h3>{fish.title}</h3>
                    <p>Location: {fish.water}</p>
                    <p>Bells: {fish.bells}</p>
                </div>
            </div>
            

        </div>
    )
}   

export default FishCard
