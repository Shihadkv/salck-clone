"use client"

import { AuthScreen } from "./features/auth/componets/auth-screen"
import { useAuthActions } from "@convex-dev/auth/react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const {signOut } = useAuthActions()
  return (
    // <div className="text-rose-500 font-bold text-2xl">helleo</div>
    //  <AuthScreen/>

    <div>
      <h1>Logged IN</h1>
     <Button onClick={() => signOut()}>
     Sign Out
     </Button>
       
    
    </div>
  )
}
