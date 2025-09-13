// import {
//   Search,
//   Plus,
//   Filter,
//   SortAsc,
//   Heart,
//   Grid,
//   Users,
//   Zap,
//   Trophy,
//   Eye,
//   Brain,
//   Gauge,
//   Shield,
//   ChevronLeft,
//   ChevronRight,
//   MoreHorizontal,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
import { use, useMemo, useState } from "react"
import  { useSearchParams } from "react-router"
import { useQuery } from "@tanstack/react-query"


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "../search/ui/SearchControls"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
// import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
// import { getSummaryAction } from "@/heroes/actions/get-summary.action"
// import { s } from "node_modules/react-router/dist/development/components-CuPfnyiZ.d.mts"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginationHero } from "@/heroes/hooks/usePaginationHero"

// import img from "next/img"

export const HomePage = () => {

  //Array destructuring
  const [searchParams, setSearchParams] = useSearchParams();
  
  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'aa';



  const selectedTab = useMemo(() => {

  const validTabs = ['all', 'favorites', 'heroes', 'villains'];
  return validTabs.includes(activeTab) ? activeTab : 'all';

   }, [searchParams]);
  // console.log({ searchParams });
  // console.log(searchParams.get('page'));
  // console.log(searchParams.get('offset'));

//  if (activeTabParam !== 'all' && activeTabParam !== 'favorites' && activeTabParam !== 'heroes' && activeTabParam !== 'villains') {
//    activeTabParam = 'all';
//  }
  

  // const [activeTab, setActiveTab] = useState<
  //   'all' | 'favorites' | 'heroes' | 'villains'
  // >('all');


  // useEffect(() => {  

  //   getHeroesByPage().then();

  // }, []);

  // const { data: heroesResponse } = useQuery({
  //   // queryKey: ['heroes', 'page',  page, 'limit', limit ],
  //   queryKey: ['heroes', { page, limit }],
  //   queryFn: () => getHeroesByPageAction(+page, +limit),
  //   staleTime: 1000 * 60 * 5, // 5 minutes
  // });

  // const { data: summary, isLoading} = useQuery({
  //   // queryKey: ['heroes', 'page',  page, 'limit', limit ],
  //   queryKey: ['summary-information'],
  //   queryFn: () => getSummaryAction(),
  //   staleTime: 1000 * 60 * 5, // 5 minutes
  // });

  const { data: heroesResponse } = usePaginationHero(+page, +limit);

  const { data: summary } = useHeroSummary();


  // console.log({ heroesResponse });



  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Superhero Universe"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />

        <CustomBreadcrumbs currentPage={"Superhero Universe"} />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}
        <SearchControls></SearchControls>



        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setSearchParams((prev) => ({ ...prev, tab: 'all' }))}>All Characters ({summary?.totalHeroes})</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setSearchParams((prev) => ({ ...prev, tab: 'favorites' }))}>
              {/* Favorites ({summary?.totalFavorites ?? 0}) */}
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) => ({ ...prev, tab: 'heroes' }))}>Heroes ({summary?.heroCount ?? 0})</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => ({ ...prev, tab: 'villains' }))}>Villains ({summary?.villainCount ?? 0})</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1>All Characters</h1>
            {/* Show all characters */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Show favorite characters */}
            <h1>Favorites</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Show hero characters */}
            <h1>Heroes</h1>
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="villains">
            {/* Show villain characters */}
            <h1>Villains</h1>
            <HeroGrid heroes={[]} />
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        {/* <HeroGrid /> */}

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />

      </>
    </>
  )
}
