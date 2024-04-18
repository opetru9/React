import { useState} from 'react';
import './chat.css'

const Chat = () => {
    
    let [open, setOpen] = useState(false)

    function chatToggle(){
        setOpen(!open)
    }

    return (
      <div>
        <div className="chat_item">
          <ul className={`chat_list ${open ? "" : "hidden"}`}>
            <li>
              <a href="http://m.me/pageNameExample?text=Hello%20and%20Welcome" target='_blanck'>
                <i className="fa-brands fa-facebook-messenger"></i>
              </a>
            </li>
            <li>
              <a href="##">
                <i className="fa-brands fa-whatsapp"></i>{" "}
              </a>
            </li>
            <li>
              <a href="##">
                <i className="fa-brands fa-telegram"></i>{" "}
              </a>
            </li>
          </ul>
          <button className="chat_btn" onClick={chatToggle}>
            <i className="fa-regular fa-comment-dots"></i>
          </button>
        </div>
      </div>
    );
}
 
export default Chat;