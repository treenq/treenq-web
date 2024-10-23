import { Navigate } from "react-router-dom"

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
                    <button className="w-[180px] bg-[#eee] rounded font-bold mb-6" onClick={() => {
                        handleLogin()
                    }}>
                        Sign in
                    </button>
                </div>
            )}
            {authenticated && <Navigate to="/callback" />}
        </div>
    );
}
export default Login