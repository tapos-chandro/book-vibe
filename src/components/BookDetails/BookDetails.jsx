import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addStoredId } from '../../utility/utility'

const BookDetails = () => {
  const { bookId } = useParams()
  const id = parseInt(bookId)
  const [bookDetails, setBookDetails] = useState([])

  useEffect(() => {
    fetch('/booksData.json')
      .then(response => response.json())
      .then(data => {
        const bookDetails = data.find(book => book.bookId === id)
        setBookDetails(bookDetails)
      })
  }, [])

  const handleReadBook = (id) => {
    addStoredId(id)
  }

  return (
    <div className='hero lg:h-[44.438rem] '>
      <div className='flex flex-col items-center gap-12 pb-20 lg:flex-row'>
        <div className='bg-[#f2f2f2] lg:w-1/2 lg:p-20 rounded-2xl'>
          <img
            src={bookDetails?.image}
            className='w-full rounded-lg shadow-2xl '
          />
        </div>
        <div className='flex flex-col gap-4 lg:w-1/2'>
          <h1 className='text-4xl font-bold text-primary-text-color'>{bookDetails?.bookName}</h1>
          <div className='border-b-2'></div>
          <p>By: {bookDetails?.author}</p>
          <div className='border-b-2'></div>
          <p className='font-bold text-secondary-text-color'>Fiction</p>
          <div className='border-b-2'></div>
          <p className='text-base leading-8 text-secondary-text-color'>
            <span className='font-bold text-primary-text-color'>Review</span>
            {bookDetails?.review}
          </p>

          <div className='flex items-center justify-start gap-3'>
            <p className='font-bold text-primary-text-color'>Tag: </p>
            {bookDetails?.tags?.map((tag, index) => (
              <div
                key={index}
                className='px-4 py-2 text-base font-medium bg-[#f4fcf2] rounded-full text-primary-color '
              >
                {tag}
              </div>
            ))}
          </div>
          <div className='border-b-2'></div>

          <div className='flex justify-between lg:w-1/2'>
            <p className='text-secondary-text-color'>Number of Pages:</p>
            <p className='font-semibold text-primary-text-color'>
              {bookDetails?.totalPages}
            </p>
          </div>
          <div className='flex justify-between lg:w-1/2'>
            <p className='text-secondary-text-color'>Publisher:</p>
            <p className='font-semibold text-primary-text-color'>
              {bookDetails?.publisher}
            </p>
          </div>
          <div className='flex justify-between lg:w-1/2'>
            <p className='text-secondary-text-color'>Year of Publishing:</p>
            <p className='font-semibold text-primary-text-color'>
              {bookDetails?.yearOfPublishing}
            </p>
          </div>

          <div className='flex gap-5'>
            <button className='btn primary-btn' onClick={() => handleReadBook(bookId)}>Read</button>
            <button className='btn secondary-btn'>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
