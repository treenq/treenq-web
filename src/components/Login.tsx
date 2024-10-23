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
                    <Button onClick={() => {
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