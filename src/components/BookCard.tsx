import { Link } from "react-router-dom";

interface BookCardProps {
  image: string;
  href: string;
}

const BookCard = ({ image, href }: BookCardProps) => {
  return (
    // <Link to={href} className="group block">
    //   <div className="relative h-80 w-64 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-105">

    //     {/* Book cover (using your image) */}
    //     <div className="absolute left-8 top-0 h-full w-full rounded-r-lg overflow-hidden shadow-card transition-shadow duration-500 group-hover:shadow-card-hover">
    //       <img
    //         src={image}
    //         alt="Book Cover"
    //         className="h-full w-full object-cover rounded-lg"
    //       />
    //     </div>

    //   </div>
    // </Link>
    <Link to={href} className="group block">
      <div className="relative h-56 w-40 sm:h-64 sm:w-48 md:h-72 md:w-56 lg:h-80 lg:w-64 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
        {/* Book cover */}
        <div className="absolute left-4 top-0 h-full w-full rounded-r-lg overflow-hidden shadow-md transition-shadow duration-500 group-hover:shadow-xl">
          <img
            src={image}
            alt="Book Cover"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
