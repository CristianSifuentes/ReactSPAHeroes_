import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search Heroes"
        description="Find your favorite superheroes and villains quickly and easily"
      />

      <HeroStats />
      
    </>
  )
}

export default SearchPage