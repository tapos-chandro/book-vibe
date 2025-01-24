
import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";


const ReadBook = ({ book , handleRemoveReadBook}) => {

  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    category,
    rating,
  } = book;

  const navigate = useNavigate()
  return (

      <div className="relative flex flex-col items-center w-full gap-12 p-5 py-5 my-10 border-2 lg:flex-row md:flex-row rounded-2xl">
        <button className="absolute top-0 right-0" onClick={() => handleRemoveReadBook(bookId, 'books-list')}><RxCross2  className="p-2 text-4xl"/></button>
        <div className="bg-[#f2f2f2] lg:w-1/4 md:w-1/4 w-full rounded-2xl p-4 flex justify-center self-stretch">
          <img src={image} className="rounded-lg shadow-2xl h-44" />
        </div>
        <div className="flex flex-col w-full gap-4">
          <h1 className="text-2xl font-bold text-primary-text-color">
            {bookName}
          </h1>
          <p>By: {author}</p>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-center justify-start gap-3">
              <p className="font-bold text-primary-text-color">Tag: </p>
              {tags?.map((tag, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-base font-medium bg-[#f4fcf2] rounded-full text-primary-color "
                >
                  #{tag}
                </div>
              ))}
            </div>
            <div className="flex justify-between lg:w-1/2">
              <p className="text-secondary-text-color">
                Year of Publishing: {yearOfPublishing}
              </p>
            </div>
            <div className="flex justify-between lg:w-1/2">
              <p className="text-secondary-text-color">Publisher:{publisher}</p>
            </div>
            <div className="flex justify-between lg:w-1/2">
              <p className="text-secondary-text-color">
                Page:{totalPages}
              </p>
            </div>
     
          </div>

          <div className="flex flex-col gap-5 lg:flex-row md:flex-row">
            <button className="px-5 py-2 bg-[#e0eeff] text-[#328EFF] rounded-full ">Category: {category}</button>
            <button className="px-5 py-2 bg-[#fff3e0] text-[#FFAC33] rounded-full ">Rating: {rating}</button>
            <button  onClick={() => navigate(`/bookDetails/${bookId}`)} className="px-5 py-2 bg-[#23BE0A] text-[#ffff] rounded-full">View Details</button>
          </div>
        </div>
      </div>
  );
};


ReadBook.propTypes = {
  book: PropTypes.object.isRequired,
  handleRemoveReadBook: PropTypes.func.isRequired
}

export default ReadBook;
