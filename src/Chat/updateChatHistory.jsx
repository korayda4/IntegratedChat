import { supabase } from "../supaBase/supabaseClient";
import useStore from "../zustand/state";

const updateChatHistory = async (meet) => {
    
    const {userData,dataMeet} = useStore.getState()
    const { data,error } = await supabase
            .from('userChatHistory')
            .update({ meet:meet })
            .eq('userID', userData.id)
}

export default updateChatHistory