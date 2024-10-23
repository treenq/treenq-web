import { Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"


type Props = {
    handleLogin: () => void
    authenticated: boolean | null
}

const Login = ({ authenticated, handleLogin }: Props) => {
    return (
        <div>
            {authenticated === null && <div>Loading...</div> }
            {authenticated === false && (
                <div>
                    <Button variant="outline" className="bg-primary w-[180px] bg-[#eee] rounded font-bold mb-6" onClick={() => {
                        handleLogin()
                    }}>
                        Sign in
                    </Button>
                </div>
            )}
            {authenticated && <Navigate to="/callback" />}
        </div>
    );
}
export default Login