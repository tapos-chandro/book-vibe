import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { getStoredId, removeStoredId } from "../../utility/utility";
import ReadBook from "../ReadBook/ReadBook";
import WishBooks from "../WishBooks/WishBooks";



const ReadBooks = () => {



  const [readBooks, setReadBooks] = useState([])
  const [wishBooks, setWishBooks] = useState([])
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const getReadId = getStoredId('books-list')
    console.log(getReadId)
    const getWishId = getStoredId('wish-list')
   const storedReadBooksIs = getReadId.map(id =>   parseInt(id))
   const storedWishBooksIs = getWishId.map(id =>   parseInt(id))
   
    fetch('/booksData.json')
    .then(res => res.json())
    .then(data => {

        const bookList = data.filter(book =>  storedReadBooksIs.includes(book.bookId))
        const wishBookList = data.filter(book =>  storedWishBooksIs.includes(book.bookId))
        setReadBooks(bookList)
        setWishBooks(wishBookList)
    })
  }, [])
  

  const handleRemoveReadBook = (id, storedKey) => {

    console.log(id, storedKey)
    removeStoredId(id, storedKey)
    const getReadBooksId = getStoredId(storedKey);
    
    const storedReadBooksId = getReadBooksId.map(id => parseInt(id))
    const readBooksList = readBooks.filter(book => storedReadBooksId.includes(book.bookId)) 
    const wishBooksList = readBooks.filter(book => storedReadBooksId.includes(book.bookId)) 
    if(tabIndex === 0){
      setReadBooks(readBooksList)
      console.log('0 Tab')
    }else{
      setWishBooks(wishBooksList) 
      console.log('1 tab')
    }
    
  }


  // useEffect( () => {
    
  // },[])

  console.log(tabIndex)


  return (
    <div>
      <Tabs onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wish Books</Tab>
      </TabList>
      <TabPanel>
   
        {
         tabIndex === 0 && readBooks.map(book => <ReadBook key={book.bookId} book={book} handleRemoveReadBook={handleRemoveReadBook}/>)
        }
      </TabPanel>
      <TabPanel>
        {
          
          tabIndex === 1 && wishBooks.map(book => <WishBooks key={book.bookId} book={book}  handleRemoveReadBook={handleRemoveReadBook}/>)
        }
      
      </TabPanel>
    </Tabs>


 
    </div>
  );
};

export default ReadBooks;
