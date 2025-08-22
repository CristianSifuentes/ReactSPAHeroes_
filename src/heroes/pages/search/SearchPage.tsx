import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControls } from './ui/SearchControls'
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs'

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search Heroes"
        description="Find your favorite superheroes and villains quickly and easily"
      />

      <CustomBreadcrumbs currentPage={"Search Heroes"}   
         breadcrumbs={[
           { label: 'Home1', to: '/' },
           { label: 'Home2', to: '/' },
           { label: 'Home3', to: '/' },
         ]}/>

      <HeroStats />

      <SearchControls />
    </>
  )
}

export default SearchPage