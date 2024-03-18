import SignUp from '@/app/components/SignUp'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
    return ({
        title: "Sign Up",
        description: "Sign Up page"
    })
}
export default function Sign() {
  return (
    <SignUp />
  )
}
