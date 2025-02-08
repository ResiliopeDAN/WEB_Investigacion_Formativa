import supabase from "../api/supabaseClient.js";
import supabaseClient from "../api/supabaseClient.js"; supabaseClient
import { useNavigate } from "react-router-dom"




function Dashboard() {

    const navigate = useNavigate();
    const singOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/login");
    }

    return <div>
        <h1>Hello, you are logged in.</h1>
        <button onClick={singOut}>Sign out</button>
    </div>

}

export default Dashboard;