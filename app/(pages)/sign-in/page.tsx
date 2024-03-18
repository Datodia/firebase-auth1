import SignIn from '@/app/components/SignIn'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
    return ({
        title: "Sign In",
        description: "Sign In page"
    })
}

export default function page() {
  return (
    <SignIn />
  )
}
