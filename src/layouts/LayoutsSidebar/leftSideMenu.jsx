import { Button } from "antd"
import aiLogo from "../../img/icons8-ai-100.png";
import useStore from '../../zustand/state';
import {SquarePen,Frown  } from "lucide-react"

const LeftSideMenu = () => {
    const {dataMeet} = useStore()

    return (
        <div className="chatHistory">
            <div className="newChat">
                <Button>
                    <h5>
                        <img src={aiLogo} alt="AI" />   
                        Create New Chat
                    </h5>
                    <SquarePen style={{height:"20px"}}/>
                </Button>
            </div>
            <div style={{justifyContent:dataMeet ? "start":null}} className="history">
                {dataMeet ? "null":<Frown  />}
            </div>
        </div>
    )
}
export default LeftSideMenu