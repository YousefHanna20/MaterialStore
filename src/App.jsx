import React from 'react'
import {RouterProvider} from 'react-router'
import router from './routers'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client = {queryClient}>
      <RouterProvider router = {router}/>
      <ReactQueryDevtools initialIsOpen = {false}/>
    </QueryClientProvider>
    
  )
}
