
import { Bounce, toast, } from "react-toastify"

const getStoredId = () => {
  const storedId = JSON.parse(localStorage.getItem('books-list'))
    return storedId
}


const addStoredId = id => {
  const storedData = []
  const getData = localStorage.getItem('books-list')

  if (getData) {
    const parsedId = JSON.parse(getData)
    if (getData.includes(id)) {
        toast.warn('🦄 Already added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    } else {
      parsedId.push(id)
      localStorage.setItem('books-list', JSON.stringify(parsedId))
        toast.success('🦄 Added to your list', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
  } else {
    storedData.push(id)
    localStorage.setItem('books-list', JSON.stringify(storedData))
    toast.success('🦄 Added to your list', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  }

}

export { addStoredId , getStoredId }
