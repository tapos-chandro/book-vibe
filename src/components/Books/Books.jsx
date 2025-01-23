import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])


    useEffect(() => {   

        fetch('booksData.json')
        .then(response => response.json())
        .then(data => {
            setBooks(data)
    })

    }, [])

    console.log(books)



    return (
       <div>
        <h1 className="pt-10 text-4xl font-bold text-center py-9">Books</h1>
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                books.map(book =>
                    
                     <Book key={book.bookId} book={book}
                    
                    />)
            }
        </div>
       </div>
    );
};

export default Books;