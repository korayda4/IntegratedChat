import { message ,Modal } from 'antd';
import ModalConfigrator from './modalConfigurator';
import { supabase } from '../../supaBase/supabaseClient';

const modal = ({title,open,onClose,modalKey}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const showMessage = async (type,content) => {
        messageApi.open({
          type: type,
          content: content,
        });
      };

    return (
        <>  
            {contextHolder}
            <Modal title={title} open={open} footer={null} onCancel={onClose} centered >
                <ModalConfigrator 
                    modalKey={modalKey}
                    showMessage={showMessage}
                />
            </Modal>
        </>
    )
}

export default modal