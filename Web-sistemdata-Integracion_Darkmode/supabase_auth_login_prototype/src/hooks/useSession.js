import { useState, useEffect } from 'react';
import supabase from '../api/supabaseClient';

const useSession = () => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session);
        };

        getSession();
    }, []);

    return session;
};

export default useSession;
