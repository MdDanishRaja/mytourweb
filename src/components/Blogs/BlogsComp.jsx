import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
    "The Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World, is a testament to timeless love and architectural brilliance. Commissioned by Emperor Shah Jahan in the 17th century, this magnificent marble mausoleum stands as a symbol of enduring love for his beloved wife Mumtaz Mahal. Located on the banks of the Yamuna River in Agra, Uttar Pradesh, the Taj Mahal attracts millions of visitors from around the globe who come to admire its exquisite beauty and craftsmanship.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The United States is home to some of the world's most breathtaking national parks, each offering its own unique landscapes and outdoor adventures. From the towering granite cliffs of Yosemite National Park to the otherworldly rock formations of Arches National Park, there's no shortage of natural wonders to explore. Beyond its natural beauty, the US boasts vibrant cities like New York, Los Angeles, and Chicago, each offering its own blend of culture, history, and entertainment. Whether you're seeking outdoor adventure, cultural experiences, or urban exploration, the US has something for everyone.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan is a land of contrasts, where ancient tradition coexists with cutting-edge technology. From the historic temples of Kyoto to the bustling streets of Tokyo, there's no shortage of fascinating destinations to explore. Visit the iconic Mount Fuji, Japan's highest peak and a symbol of natural beauty and spiritual significance. Explore the serene gardens of Kyoto, home to centuries-old temples and traditional tea houses. Indulge in the culinary delights of Osaka, known as Japan's food capital, where you can sample everything from fresh sushi to savory okonomiyaki. Whether you're interested in history, culture, nature, or cuisine, Japan offers a wealth of unforgettable experiences for travelers of all interests.",
    author: "Someone",
    date: "April 22, 2022",
  }
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
