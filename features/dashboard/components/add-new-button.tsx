"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Plus } from 'lucide-react'

const AddNewButton = () => {
  return (
    <div  className="group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:bg-background hover:border-[#6A5ACD] hover:scale-[1.02]
        shadow-[0_2px_10px_rgba(0,0,0,0.08)]
        hover:shadow-[0_10px_30px_rgba(106,90,205,0.15)]"
 >
   <div className='flex flex-row justify-center items-start gap-4'>
    <Button variant={"outline"}
    className='flex justify-center items-center bg-white 
group-hover:bg-[#f9f7ff] 
group-hover:border-[#6A5ACD] 
group-hover:text-[#6A5ACD] 
transition-colors duration-300' size={"icon"}>
    <Plus size={30} className='transition-transform duration-300 group-hover:rotate-90'></Plus>

        
        </Button>
        <div className='flex flex-col'>
            <h1 className='text-xl font-bold text-[#9456c7]'>Add New</h1>
            <p className='text-sm text-muted-foreground max-w-[220px]'>Create a new PlayGround</p>
        </div>
        </div>
        <div className='relative overflow-hidden'>
            <Image src="/add-new.svg" alt='Create new Playground' width={150}
            height={150} className='transition-transform duration-300 group-hover:scale-110'></Image>
        </div>

    </div>
  )
}

export default AddNewButton