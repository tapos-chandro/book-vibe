import { Outlet } from 'react-router-dom'
import NavBar from './../NavBar/NavBar'
const Root = () => {
  return (
    <div>
      <header className=''>
        <div className='max-w-[73.125rem] mx-auto'>
        <NavBar />
        </div>
      </header>
        <main className='max-w-[73.125rem] mx-auto '>
            <Outlet />  
        </main>
        <footer>

        </footer>

    </div>
  )
}

export default Root
