import { supabase } from "../supaBase/supabaseClient";
import useStore from '../zustand/state';


const getChatHistory = async (session) => {
    let { data: userChatHistory, error } = await supabase
                .from('userChatHistory')
                .select("*")
                .eq('userID', session.user.id)
                console.log(userChatHistory[0]);
                useStore.setState({ setMeet:userChatHistory[0].meet });
}
export default getChatHistory