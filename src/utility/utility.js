
import { Bounce, toast, } from "react-toastify"

const getStoredId = (storKeyName) => {
  const storedId = JSON.parse(localStorage.getItem(storKeyName))
    return storedId
}


const addStoredId = (id = 0 , storKeyName = '') => {
  const storedData = []
  const getData = localStorage.getItem(storKeyName)

  if (getData) {
    const parsedId = JSON.parse(getData)
    if (getData.includes(id)) {
        toast.warn('Already added', {
            position: "top-right",
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
      localStorage.setItem(storKeyName, JSON.stringify(parsedId))
        toast.success('🦄 Added to your list', {
            position: "top-right",
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
    localStorage.setItem(storKeyName, JSON.stringify(storedData))
    toast.success('🦄 Added to your list', {
        position: "top-right",
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

const removeStoredId = (id = 0 , storKeyName = '') => {

  const getStoredData = JSON.parse(localStorage.getItem(storKeyName))
  const filterData = getStoredData.filter( data => parseInt(data) !== id)
  localStorage.setItem(storKeyName, JSON.stringify(filterData))
  toast.success('🦄Successfully Removed from your  Book', {
      position: "top-right",
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

export { addStoredId , getStoredId ,removeStoredId}
