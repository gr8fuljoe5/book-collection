import { Link, routes } from '@redwoodjs/router'

type BookLayoutProps = {
  children?: React.ReactNode
}

const BookLayout = ({ children }: BookLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Book Collection</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BookLayout
