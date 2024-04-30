import { supabase } from "../supaBase/supabaseClient";
import useStore from '../zustand/state';


const getChatHistory = async () => {
    const {userData} = useStore.getState()

    let { data: userChatHistory, error } = await supabase
                .from('userChatHistory')
                .select("*")
                .eq('userID', userData?.id)
                useStore.setState({ dataMeet:userChatHistory[0]?.meet})
}
export default getChatHistory