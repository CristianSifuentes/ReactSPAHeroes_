import { Link, Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="bg-red-100 p-4">
        <ul>
          
           <li>
            <Link to="/heroes">Home</Link>
          </li>
          <li>
            <Link to="/heroes/:id">Hero</Link>
            </li>
          <li>
            <Link to="/heroes/search">Search</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <section className="mt-10">
          <Outlet></Outlet>
        </section>
    </div>
  )
}
