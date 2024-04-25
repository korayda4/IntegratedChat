import { supabase } from "../supaBase/supabaseClient";
import useStore from "../zustand/state";

const updateChatHistory = async (meet) => {
    // console.log(meet);
    const {userData} = useStore()
    const { data,error } = await supabase
            .from('countries')
            .update({ meet: meet })
            .eq('userID', userData.id)
            // console.log(data);
}

export default updateChatHistory