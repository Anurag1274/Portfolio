import React from 'react'
import Navbar from './components/Navbar'
import { ArrowRight, User2Icon } from "lucide-react";
import Info from './components/Info';

function Home() {
  return (
    <div className='h-auto mb-32 w-screen text-primary flex items-center justify-center' id='#home'>

        <Info />
        
    </div>
  )
}

export default Home