 import React from 'react'
 import Image from 'next/image'
import SignInFormClient from '@/features/auth/components/signin-form-client'
 const SignInPage = () => {
   return (
  <div className='space-y-9 flex-col items-center justify-center'>
   <Image src={"/logo.png"} alt='Logo' height={300} width={300}/>
   <SignInFormClient/>
  </div>
   )
 }
 
 export default SignInPage