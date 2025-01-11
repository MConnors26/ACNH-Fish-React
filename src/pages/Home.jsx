import FishCard from "../components/FishCard"
import {useState} from "react"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const fishes = [
        {id: 1, title: "Anchovy", location: "sea", bells: "200", imageUrl:"/images/Anchovy_(Fish)_NH_Icon.png"},
        {id: 2, title: "Anglefish", water: "river", bells: "3,000", imageUrl:"/images/Angelfish_NH_Icon.png"},
        {id: 3, title: "Arapaima", water: "river", bells: "10,000", imageUrl:"/images/Arapaima_NH_Icon.png"},
        {id: 4, title: "Arowana", water: "river", bells: "10,000", imageUrl:"/images/Arowana_NH_Icon.png"},
        {id: 5, title: "Barred knifejaw", water: "sea", bells: "5,000", imageUrl:"/images/Barred_Knifejaw_NH_Icon.png"},
        {id: 6, title: "Barreleye", water: "sea", bells: "15,000", imageUrl:"/images/Barreleye_NH_Icon.png"},
        {id: 7, title: "Betta", water: "river", bells: "2,500", imageUrl:"/images/Betta_NH_Icon.png"},
        {id: 8, title: "Bitterling", water: "river", bells: "900", imageUrl:"/images/Bitterling_NH_Icon.png"},
        {id: 9, title: "Black bass", water: "river", bells: "400", imageUrl:"/images/Black_Bass_NH_Icon.png"},
        {id: 10, title: "Blowfish", water: "sea", bells: "5,000", imageUrl:"/images/Blowfish_NH_Icon.png"},
        {id: 11, title: "Blue marlin", water: "pier", bells: "10,000", imageUrl:"/images/Blue_Marlin_NH_Icon.png"},
        {id: 12, title: "Bluegill", water: "river", bells: "180", imageUrl:"/images/Bluegill_NH_Icon.png"},
        {id: 13, title: "Butterfly fish", water: "sea", bells: "1,000", imageUrl:"/images/Butterfly_Fish_NH_Icon.png"},
        {id: 14, title: "Carp", water: "pond", bells: "300", imageUrl:"/images/Carp_NH_Icon.png"},
        {id: 15, title: "Catfish", water: "pond", bells: "800", imageUrl:"/images/Catfish_NH_Icon.png"},
        {id: 16, title: "Char", water: "river", bells: "3,800", imageUrl:"/images/Char_NH_Icon.png"},
        {id: 17, title: "Cherry salmon", water: "river", bells: "1,000", imageUrl:"/images/Cherry_Salmon_NH_Icon.png"},
        {id: 18, title: "Clown fish", water: "sea", bells: "650", imageUrl:"/images/Clown_Fish_NH_Icon.png"},
        {id: 19, title: "Coelacanth", water: "sea", bells: "15,000", imageUrl:"/images/Coelacanth_NH_Icon.png"},
        {id: 20, title: "Crawfish", water: "pond", bells: "200", imageUrl:"/images/Crawfish_NH_Icon.png"},
        {id: 21, title: "Crucian carp", water: "river", bells: "160", imageUrl:"/images/Crucian_Carp_NH_Icon.png"},
        {id: 22, title: "Dab", water: "sea", bells: "300", imageUrl:"/images/Dab_NH_Icon.png"},
        {id: 23, title: "Dace", water: "river", bells: "240", imageUrl:"/images/Dace_NH_Icon.png"},
        {id: 24, title: "Dorado", water: "river", bells: "15,000", imageUrl:"/images/Dorado_NH_Icon.png"},
        {id: 25, title: "Football fish", water: "sea", bells: "2,500", imageUrl:"/images/Football_Fish_NH_Icon.png"},
        {id: 26, title: "Freshwater goby", water: "river", bells: "400", imageUrl:"/images/Freshwater_Goby_NH_Icon.png"},
        {id: 27, title: "Frog", water: "pond", bells: "120", imageUrl:"/images/Frog_NH_Icon.png"},
        {id: 28, title: "Gar", water: "pond", bells: "6,000", imageUrl:"/images/Gar_NH_Icon.png"},
        {id: 29, title: "Giant snakehead", water: "pond", bells: "5,500", imageUrl:"/images/Giant_Snakehead_NH_Icon.png"},
        {id: 30, title: "Giant trevallyy", water: "pier", bells: "4,500", imageUrl:"/images/Giant_Trevally_NH_Icon.png"},
        {id: 31, title: "Golden trout", water: "river", bells: "15,000", imageUrl:"/images/Golden_Trout_NH_Icon.png"},
        {id: 32, title: "Goldfish", water: "pond", bells: "1,300", imageUrl:"/images/Goldfish_NH_Icon.png"},
        {id: 33, title: "Great white shark", water: "sea", bells: "15,000", imageUrl:"/images/Great_White_Shark_NH_Icon.png"},
        {id: 34, title: "Guppy", water: "river", bells: "1,300", imageUrl:"/images/Guppy_NH_Icon.png"},
        {id: 35, title: "Hammerhead shark", water: "sea", bells: "8,000", imageUrl:"/images/Hammerhead_Shark_NH_Icon.png"},
        {id: 36, title: "Horse mackerel", water: "sea", bells: "150", imageUrl:"/images/Horse_Mackerel_NH_Icon.png"},
        {id: 37, title: "Killifish", water: "pond", bells: "300", imageUrl:"/images/Killifish_NH_Icon.png"},
        {id: 38, title: "King salmon", water: "river", bells: "1,800", imageUrl:"/images/King_Salmon_NH_Icon.png"},
        {id: 39, title: "Koi", water: "pond", bells: "4,000", imageUrl:"/images/Koi_NH_Icon.png"},
        {id: 40, title: "Loach", water: "river", bells: "400", imageUrl:"/images/Loach_NH_Icon.png"},
        {id: 41, title: "Mahi-Mahi", water: "pier", bells: "6,000", imageUrl:"/images/Mahi-Mahi_NH_Icon.png"},
        {id: 42, title: "Mitten crab", water: "river", bells: "2,000", imageUrl:"/images/Mitten_Crab_NH_Icon.png"},
        {id: 43, title: "Moray eel", water: "sea", bells: "2,0200", imageUrl:"/images/Moray_Eel_NH_Icon.png"},
        {id: 44, title: "Napoleanfish", water: "sea", bells: "10,000", imageUrl:"/images/Napolean_Fish_NH_Icon.png"},
        {id: 45, title: "Neon tetra", water: "river", bells: "500", imageUrl:"/images/Neon_Tetra_NH_Icon.png"},
        {id: 46, title: "Nibble fish", water: "river", bells: "1,500", imageUrl:"/images/Nibble_Fish_NH_Icon.png"},
        {id: 47, title: "Oarfish", water: "sea", bells: "9,000", imageUrl:"/images/Oarfish_NH_Icon.png"},
        {id: 48, title: "Ocean sunfish", water: "sea", bells: "4,000", imageUrl:"/images/Ocean_Sunfish_NH_Icon.png"},
        {id: 49, title: "Olive flounder", water: "sea", bells: "800", imageUrl:"/images/Olive_Flounder_NH_Icon.png"},
        {id: 50, title: "Pale chub", water: "river", bells: "200", imageUrl:"/images/Pale_Chub_NH_Icon.png"},
        {id: 51, title: "Pike", water: "river", bells: "1,800", imageUrl:"/images/Pike_NH_Icon.png"},
        {id: 52, title: "Piranha", water: "river", bells: "2,500", imageUrl:"/images/Piranha_NH_Icon.png"},
        {id: 53, title: "Pond smelt", water: "river", bells: "400", imageUrl:"/images/Pond_Smelt_NH_Icon.png"},
        {id: 54, title: "Pop-eyed goldfish", water: "pond", bells: "1,300", imageUrl:"/images/Pop-Eyed_Goldfish_NH_Icon.png"},
        {id: 55, title: "Puffer fish", water: "sea", bells: "250", imageUrl:"/images/Puffer_Fish_NH_Icon.png"},
        {id: 56, title: "Rainbowfish", water: "river", bells: "800", imageUrl:"/images/Rainbowfish_NH_Icon.png"},
        {id: 57, title: "Ranchu goldfish", water: "pond", bells: "4,500", imageUrl:"/images/Ranchu_Goldfish_NH_Icon.png"},
        {id: 58, title: "Ray", water: "sea", bells: "3,000", imageUrl:"/images/Ray_NH_Icon.png"},
        {id: 59, title: "Red snapper", water: "sea", bells: "3,000", imageUrl:"/images/Red_Snapper_NH_Icon.png"},
        {id: 60, title: "Ribbon eel", water: "sea", bells: "600", imageUrl:"/images/Ribbon_Eel_NH_Icon.png"},
        {id: 61, title: "Saddled bichir", water: "river", bells: "4,000", imageUrl:"/images/Saddled_Bichir_NH_Icon.png"},
        {id: 62, title: "Salmon", water: "river", bells: "700", imageUrl:"/images/Salmon_NH_Icon.png"},
        {id: 63, title: "Saw shark", water: "sea", bells: "12,000", imageUrl:"/images/Saw_Shark_NH_Icon.png"},
        {id: 64, title: "Sea bass", water: "sea", bells: "400", imageUrl:"/images/Sea_Bass_NH_Icon.png"},
        {id: 65, title: "Sea butterfly", water: "sea", bells: "1,000", imageUrl:"/images/Sea_Butterfly_NH_Icon.png"},
        {id: 66, title: "Sea horse", water: "salt", bells: "200", imageUrl:"/images/Sea_Horse_NH_Icon.png"},
        {id: 67, title: "Snapping turtle", water: "river", bells: "5,000", imageUrl:"/images/Snapping_Turtle_NH_Icon.png"},
        {id: 68, title: "Soft-shelled turtle", water: "river", bells: "3,750", imageUrl:"/images/Soft-Shelled_Turtle_NH_Icon.png"},
        {id: 69, title: "Squid", water: "sea", bells: "500", imageUrl:"/images/Squid_NH_Icon.png"},
        {id: 70, title: "Stringfish", water: "river", bells: "15,000", imageUrl:"/images/StringfishNH_Icon.png"},
        {id: 71, title: "Sturgeon", water: "river", bells: "10,000", imageUrl:"/images/Sturgeion_NH_Icon.png"},
        {id: 72, title: "Suckerfish", water: "sea", bells: "1,500", imageUrl:"/images/Suckerfish_NH_Icon.png"},
        {id: 73, title: "Surgeonfish", water: "sea", bells: "1,000", imageUrl:"/images/Surgeonfish_NH_Icon.png"},
        {id: 74, title: "Sweetfish", water: "river", bells: "900", imageUrl:"/images/Sweetfish_NH_Icon.png"},
        {id: 75, title: "Tadpole", water: "pond", bells: "100", imageUrl:"/images/Tadpole_NH_Icon.png"},
        {id: 76, title: "Tilapia", water: "river", bells: "800", imageUrl:"/images/Tilapia_NH_Icon.png"},
        {id: 77, title: "Tuna", water: "pier", bells: "7.000", imageUrl:"/images/Tuna_NH_Icon.png"},
        {id: 78, title: "Whale shark", water: "sea", bells: "13,000", imageUrl:"/images/Whale_Shark_NH_Icon.png"},
        {id: 79, title: "Yellow perch", water: "river", bells: "300", imageUrl:"/images/Yellow_Perch_NH_Icon.png"},
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
                {fishes.map(fish => (
                    fish.title.toLowerCase().includes(searchQuery) && (
                    <FishCard fish={fish} key={fish.id} />
                    )
                ))}
            </div>
        </div>
    )
}
export default Home
