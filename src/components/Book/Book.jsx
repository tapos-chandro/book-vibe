import PropTypes from "prop-types"
import { PiStarThin } from "react-icons/pi"
import { Link} from "react-router-dom"

const Book = ({ book }) => {
    // const {bookId} = useParams()
  const {
    bookName,
    author,
    image,
    rating,
    tags,
    bookId


  } = book

  return (
    <Link to={`bookDetails/${bookId}`}>
      <div className='p-6 border-2 card bg-base-100' >
        <div className='flex justify-center py-10 bg-[#f2f2f2] rounded-xl'>
          <figure className='flex justify-center w-1/3 rounded-none'>
            <img src={image} alt={bookName} className='w-full h-40 ' />
          </figure>
        </div>
        <div className='flex flex-col gap-4 '>
          <div className='flex justify-start gap-3 pt-6 pb-4'>
            {tags?.map((tag, index) => (
              <div key={index} className='px-4 py-2 text-base font-medium bg-[#f4fcf2] rounded-full text-primary-color '>
                {tag}
              </div>
            ))}
          </div>
          <h2 className='card-title text-primary-text-color'>{bookName}</h2>
          <p className="text-base font-medium text-secondary-text-color">By:{author}</p>

          <div className="border-b-2 border-dashed"></div>
          <div className='flex justify-between pt-5'>
            <p>Faction</p>
            <p className="flex items-center gap-2 ">{rating}<PiStarThin /></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}




export default Book
