import { supabase } from "./supabaseClient";
import useStore from "../zustand/state";
import getChatHistory from "../Chat/getChathistory";

const isLogin = () => {
    const unsubscribe = supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN') {
          useStore.setState({ isLogin: true, userData: session.user });
        //   getChatHistory(session)
        } else if (event === 'SIGNED_OUT') {
          useStore.setState({ isLogin: false, userData: null , });
        }
      });
    
      return () => unsubscribe();
}

export default isLogin