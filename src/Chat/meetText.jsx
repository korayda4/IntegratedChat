import  formatMessage  from './formatMessage'; // formatMessage fonksiyonunu import edin

const messageCreator = ({isLastIndex,typingText,x}) => {

    return(
        <>
            <h4 className="msg" style={{ display: typingText ? "block" : "none" }}>{isLastIndex ? typingText : formatMessage(x)} </h4>
            <h4 className="msg" style={{ display: typingText ? "none" : "block" }}>{formatMessage(x)}</h4>
        </>
    )
}

export default messageCreator