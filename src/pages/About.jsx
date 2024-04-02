import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ducimus cupiditate quo harum officia perspiciatis hic ut sunt
            repudiandae, laboriosam expedita nostrum tempora, consectetur
            itaque, voluptate error aperiam corrupti ullam aspernatur a!
            Dolorem, reprehenderit amet quidem deleniti iure rem vel a enim
            ipsam hic numquam consequatur eius id eaque accusamus repudiandae
            impedit, quisquam non, harum inventore ratione? Tempora voluptatum
            ut eligendi corrupti esse, repellat nesciunt illum facilis officiis?
            Nisi quidem officiis asperiores nostrum ipsa maiores explicabo quia!
            Corporis provident asperiores fuga eligendi rem temporibus possimus
            autem excepturi! Facilis sunt corrupti nesciunt asperiores, ab
            consectetur doloremque, velit a mollitia possimus quaerat!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            suscipit minus similique aliquam recusandae quisquam id nulla
            tempora voluptate vero.
          </p> */}
          <p>
            Explore the wonders of the world with our exclusive world tour
            package. From the majestic Taj Mahal in India to the breathtaking
            Grand Canyon in the US, embark on a journey of discovery and
            adventure. Marvel at the architectural marvels of ancient
            civilizations, immerse yourself in vibrant cultures, and experience
            the beauty of nature like never before. With our expertly curated
            itinerary, you'll visit the most famous landmarks and hidden gems,
            creating memories to last a lifetime. Book your dream vacation today
            and let the adventure begin!
          </p>
          <br />
          <p>
            Discover the beauty and diversity of the world's most famous
            destinations. From historic landmarks to natural wonders, there's
            something for everyone to explore. Whether you're seeking adventure,
            relaxation, or cultural experiences, our world tour package has it
            all. With expert guides and comfortable accommodations, you can
            travel with peace of mind and create unforgettable memories. Don't
            miss out on the opportunity to see the world's most iconic sites –
            book your tour today!
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
