import { DimensionsContext } from 'App'
import { useContext, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const { width } = useContext(DimensionsContext)
  const links = [
    { title: 'Inicio', route: '/home' },
    { title: 'Productos', route: '/products' },
    { title: 'Tiendas', route: '/stores' },
    { title: 'Compañía', route: '/company' },
    { title: 'Contacto', route: '/contact' },
  ]
  const menuItems = useRef()
  const menu = useRef()
  const goTopBtnElement = useRef()
  const navigate = useNavigate()

  const toggleMenu = () => {
    menuItems.current.classList.contains('showingMenuItems')
      ? closeMenu()
      : openMenu()
  }
  const goTop = () => {
    console.log('goin up!')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    )
  }
  const openMenu = () => {
    menu.current.style.display = 'flex'
    menu.current.classList.add('bg-dark-transparent')
    menuItems.current.classList.add('showingMenuItems')
  }
  const closeMenu = () => {
    menu.current.classList.remove('bg-dark-transparent')
    menuItems.current.classList.add('hiding')
    setTimeout(() => {
      menu.current.style.display = 'none'
      menuItems.current.classList.remove('hiding')
      menuItems.current.classList.remove('showingMenuItems')
    }, 300)
  }

  useEffect(() => {
    const readHeight = () => {
      const goTop = goTopBtnElement.current
      const items = menuItems.current
      if (
        getDocHeight() > window.innerHeight * 1.5 &&
        calculateScrollDistance() > 30
      ) {
        goTop.classList.add('showing')
        goTop.classList.remove('hiding')
      } else {
        goTop.classList.add('hiding')
        goTop.classList.remove('showing')
      }
    }
    const calculateScrollDistance = () => {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const scrollPostion = Math.floor(
        (scrollTop / (getDocHeight() - windowHeight)) * 100,
      )
      return scrollPostion
    }
    document.addEventListener('scroll', readHeight)
    return () => {
      document.removeEventListener('scroll', readHeight)
    }
  }, [width])

  // -------------------------------------

  if (width && width < 700)
    return (
      <>
        <header className=" bg-white sticky inset-x-0 top-0  shadow z-30">
          <h1
            onClick={() => navigate('/')}
            className="bg-stone-100 text-center py-4 text-3xl font-semibold"
          >
            JM Cleaner
          </h1>
        </header>

        <div
          className="fixed top-0 bottom-0 left-0 right-0 hidden items-end justify-end z-40"
          onClick={closeMenu}
          ref={menu}
        >
          <nav
            ref={menuItems}
            className={`hidden flex-col gap-2 transition transform translate-x-2 text-center mb-8 mr-24`}
          >
            {links.map((link) => (
              <NavLink
                to={link.route}
                key={`link-to-${link.title}`}
                className="link text-black bg-stone-100/70 font-bold px-8 py-[.55rem] mr-2 rounded rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl border-b-2 border-none shadow-sm shadow-stone-700/20"
                onClick={closeMenu}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>

        <button
          ref={goTopBtnElement}
          className="goTop bg-dark fixed bottom-28 right-6 w-14 h-14 p-2 rounded-full text-white scale-btn justify-center items-center shadow-lg shadow-stone-700 z-50 transition transform hidden"
          onClick={goTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        <button
          className="bg-dark fixed bottom-8 right-6 w-14 h-14 p-2 rounded-full text-white scale-btn flex justify-center items-center shadow-lg shadow-stone-700 z-50"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </>
    )

  // -------------------------------------

  return (
    <div className="bg-stone-100 sticky inset-x-0 top-0 shadow z-30">
      <header className=" px-4 max-w-5xl lg:mx-auto flex justify-between">
        <h1
          onClick={() => navigate('/')}
          className="py-4 text-3xl lg:text-4xl font-semibold cursor-pointer"
        >
          JM Cleaner
        </h1>
        <nav className="flex items-center sm:gap-1 lg:gap-3">
          {links.map((link) => (
            <NavLink
              to={link.route}
              key={`link-to-${link.title}`}
              className="link px-4 lg:px-6 py-2 rounded rounded-br-lg rounded-tl-lg hover:bg-secondary hover:shadow hover:text-white transition active:scale-95 active:shadow-lg"
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      </header>
      <button
        ref={goTopBtnElement}
        className="goTop bg-dark fixed bottom-8 right-6 w-14 h-14 p-2 rounded-full text-white scale-btn justify-center items-center shadow-lg shadow-stone-700 z-50 transition transform hidden"
        onClick={goTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  )
}

export default Header
