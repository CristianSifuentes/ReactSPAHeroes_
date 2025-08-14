import { AdminLayout } from '@/admin/layouts/AdminLayout';
import { AdminPage } from '@/admin/pages/AdminPage';
import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';
import { HeroPage } from '@/heroes/pages/hero/HeroPage';
import { HomePage } from '@/heroes/pages/home/HomePage';
import  { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage').then(module => ({ default: module.SearchPage })));

export const appRouter = createBrowserRouter([

  {
   path: "/heroes",
   element: <HeroesLayout />,
   children: [
     {
       index: true,
       element: <HomePage />
     },
     {
       path: ":id",
       element: <HeroPage />
     },
     {
       path: "search",
       element: <SearchPage />
     }
   ]
  },
  {
     path: '/admin',
     element: <AdminLayout />,
     children: [
       {
         index: true,
         element: <AdminPage />
       }
     ]

  }
]);