import FishCard from "../components/FishCard"
import {useState} from "react"
import "../css/Home.css"

function SaltHome() {
    const [searchQuery, setSearchQuery] = useState("");
    
    const saltFish = [
        {id: 1, title: "Anchovy", water: "sea", bells: "200", imageUrl:"/images/Anchovy_(Fish)_NH_Icon.png"},
        {id: 5, title: "Barred knifejaw", water: "sea", bells: "5,000", imageUrl:"/images/Barred_Knifejaw_NH_Icon.png"},
        {id: 6, title: "Barreleye", water: "sea", bells: "15,000", imageUrl:"/images/Barreleye_NH_Icon.png"},
        {id: 10, title: "Blowfish", water: "sea", bells: "5,000", imageUrl:"/images/Blowfish_NH_Icon.png"},
        {id: 11, title: "Blue marlin", water: "pier", bells: "10,000", imageUrl:"/images/Blue_Marlin_NH_Icon.png"},
        {id: 13, title: "Butterfly fish", water: "sea", bells: "1,000", imageUrl:"/images/Butterfly_Fish_NH_Icon.png"},
        {id: 18, title: "Clown fish", water: "sea", bells: "650", imageUrl:"/images/Clown_Fish_NH_Icon.png"},
        {id: 19, title: "Coelacanth", water: "sea", bells: "15,000", imageUrl:"/images/Coelacanth_NH_Icon.png"},
        {id: 22, title: "Dab", water: "sea", bells: "300", imageUrl:"/images/Dab_NH_Icon.png"},
        {id: 25, title: "Football fish", water: "sea", bells: "2,500", imageUrl:"/images/Football_Fish_NH_Icon.png"},
        {id: 30, title: "Giant trevallyy", water: "pier", bells: "4,500", imageUrl:"/images/Giant_Trevally_NH_Icon.png"},
        {id: 33, title: "Great white shark", water: "sea", bells: "15,000", imageUrl:"/images/Great_White_Shark_NH_Icon.png"},
        {id: 35, title: "Hammerhead shark", water: "sea", bells: "8,000", imageUrl:"/images/Hammerhead_Shark_NH_Icon.png"},
        {id: 36, title: "Horse mackerel", water: "sea", bells: "150", imageUrl:"/images/Horse_Mackerel_NH_Icon.png"},
        {id: 41, title: "Mahi-Mahi", water: "pier", bells: "6,000", imageUrl:"/images/Mahi-Mahi_NH_Icon.png"},
        {id: 43, title: "Moray eel", water: "sea", bells: "2,0200", imageUrl:"/images/Moray_Eel_NH_Icon.png"},
        {id: 44, title: "Napoleanfish", water: "sea", bells: "10,000", imageUrl:"/images/Napolean_Fish_NH_Icon.png"},
        {id: 47, title: "Oarfish", water: "sea", bells: "9,000", imageUrl:"/images/Oarfish_NH_Icon.png"},
        {id: 48, title: "Ocean sunfish", water: "sea", bells: "4,000", imageUrl:"/images/Ocean_Sunfish_NH_Icon.png"},
        {id: 49, title: "Olive flounder", water: "sea", bells: "800", imageUrl:"/images/Olive_Flounder_NH_Icon.png"},
        {id: 55, title: "Puffer fish", water: "sea", bells: "250", imageUrl:"/images/Puffer_Fish_NH_Icon.png"},
        {id: 58, title: "Ray", water: "sea", bells: "3,000", imageUrl:"/images/Ray_NH_Icon.png"},
        {id: 59, title: "Red snapper", water: "sea", bells: "3,000", imageUrl:"/images/Red_Snapper_NH_Icon.png"},
        {id: 60, title: "Ribbon eel", water: "sea", bells: "600", imageUrl:"/images/Ribbon_Eel_NH_Icon.png"},
        {id: 63, title: "Saw shark", water: "sea", bells: "12,000", imageUrl:"/images/Saw_Shark_NH_Icon.png"},
        {id: 64, title: "Sea bass", water: "sea", bells: "400", imageUrl:"/images/Sea_Bass_NH_Icon.png"},
        {id: 65, title: "Sea butterfly", water: "sea", bells: "1,000", imageUrl:"/images/Sea_Butterfly_NH_Icon.png"},
        {id: 66, title: "Sea horse", water: "salt", bells: "200", imageUrl:"/images/Sea_Horse_NH_Icon.png"},
        {id: 69, title: "Squid", water: "sea", bells: "500", imageUrl:"/images/Squid_NH_Icon.png"},
        {id: 72, title: "Suckerfish", water: "sea", bells: "1,500", imageUrl:"/images/Suckerfish_NH_Icon.png"},
        {id: 73, title: "Surgeonfish", water: "sea", bells: "1,000", imageUrl:"/images/Surgeonfish_NH_Icon.png"},
        {id: 77, title: "Tuna", water: "pier", bells: "7.000", imageUrl:"/images/Tuna_NH_Icon.png"},
        {id: 78, title: "Whale shark", water: "sea", bells: "13,000", imageUrl:"/images/Whale_Shark_NH_Icon.png"},
        {id: 80, title: "Zebra turkeyfish", water: "sea", bells: "500", imageUrl:"/images/Zebra_Turkeyfish_NH_Icon.png"},
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }
    
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for fish..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="fish-grid">
                {saltFish.map(fish => (
                    fish.title.toLowerCase().includes(searchQuery) && (
                    <FishCard fish={fish} key={fish.id} />
                    )
                ))}
            </div>
        </div>
    )

}
export default SaltHome
