import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SignInFlow } from "../types"
import { useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react";
// import { signIn } from "../../../../../convex/auth" 

interface SignInCardProps {
    setState : (state: SignInFlow) => void
}


export const SignInCard = ({setState} : SignInCardProps) => {

    const {signIn} = useAuthActions()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [pending, setPending] =useState(false)

    const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setPending(true)
        signIn("password", {email,password,flow: "signIn"})
        .catch(()=>{

        })
        .finally(()=>{
            setPending(false)
        })
    }

    const handleProviderSignIn = (value: "github" | "google") =>{
        signIn(value)
    }

    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    login to go
                </CardTitle>
                <CardDescription className="px-1">
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input disabled={false}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value)}}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Input disabled={false}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value)}}
                        placeholder="Password"
                        type="password" 
                        required
                    />
                    <Button className="w-full" disabled={false} type="submit">
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2">
                    <Button
                        disabled={false}
                        onClick={() => { handleProviderSignIn("google")}}
                        variant="outline"
                        size="lg"
                        className="w-full relative"
                    >
                        <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
                        continue with Google
                    </Button>
                    <Button
                        disabled={false}
                        onClick={() => { handleProviderSignIn("github")}}
                        variant="outline"
                        size="lg"
                        className="w-full relative"
                    >
                        <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
                        continue with GitHub
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Don't have an account ?  <span onClick={() => setState("signUp")} className="text-sky-700 hover:underline cursor-pointer"> Sign Up</span>
                </p>
            </CardContent>
        </Card>
    )
}
