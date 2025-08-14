import { Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="bg-red-500 p-4">
        <h1>Hi from HeroesLayout</h1>
        <Outlet></Outlet>
    </div>
  )
}
