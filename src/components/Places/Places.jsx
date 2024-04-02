import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
  img: Img1,
  title: "Ganga River",
  location: "Patna (India)",
  description: "Enjoy a serene journey along the majestic Ganga River in Patna, taking in the breathtaking views of its cultural heritage and natural beauty. Relax and unwind as you immerse yourself in the tranquil atmosphere of this historic waterway.",
  price: 6700,
  type: "Cultural Relax"
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "Agra (India)",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "Lakshadweep (India)",
    description:
      "Explore the mesmerizing underwater world in the India, filled with vibrant marine life and stunning coral reefs.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "Experience the bustling city life and iconic landmarks of Sydney, USA.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "Discover the vibrant city of Los Angeles, United States, known for its diverse culture, entertainment industry, and beautiful beaches.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "Experience the glitz and glamour of Las Vegas, California, with its world-famous casinos, entertainment shows, and vibrant nightlife.",
    price: 6200,
    type: "Cultural Relax",
  }
  
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
