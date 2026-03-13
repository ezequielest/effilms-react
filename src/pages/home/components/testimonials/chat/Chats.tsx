import './Chats.scss';
import type { ClientMessage } from '../../../../../core/models/ITestimonials.js';

interface ChatsProps {
  client: ClientMessage;
  onBackWhatsapp: () => void;
}


function Chats({client, onBackWhatsapp}: ChatsProps) {
    return (
    <>
    <div className={`whatsapp ${client.name}`} id="whatsapp-1">
        <div className="whatsapp-chat">
            <div className="whatsapp-chat-header">
                <div className="whatsapp-chat-header__back">
                    <span onClick={() => {onBackWhatsapp()}}><i className="material-icons">&#xe5c4;</i></span>
                    <img className="whatsapp-chat-header__back-photo" src={client.image} alt="" />
                </div>

                <div className="whatsapp-chat-header__name">
                    <p id="contactname">{client.name}</p>
                    <p id="conection">en línea</p>

                </div>

                <div className="whatsapp-chat-header__calls">
                    <ul className="whatsapp-chat-header__calls-items">
                        <li><i className="material-icons">&#xe04b;</i></li>
                        <li><i className="material-icons">&#xe0b0;</i></li>
                        <li><i className="material-icons">&#xe5d4;</i></li>
                    </ul>
                </div>
            </div>

            <div className="whatsapp-chat-messages">
                <div className="chats">
                    <div className="whatsapp-chat-messages__protection">
                        <i className="material-icons">&#xe63f;</i> Los mensajes y llamadas en este chat ahora están protegidos con cifrado de extremo a extremo. Toca para más información.
                    </div> 

                    {client.messages.map((message, index) => (
                    <div key={index} className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                        {message.message}

                        <span className="whatsapp-chat-messages__datetime">
                            {message.hour} <i className="material-icons checkmark">&#xe877;</i>
                        </span>
                    </div>
                    ))}

                </div>
            </div>

            <div className="whatsapp-chat-send">
                <div className="whatsapp-chat-send__write">
                    <span>
                        <i className="material-icons">&#xe24e;</i>
                    </span>
                    <input type="text" placeholder="Escribir mensaje" />
                    <ul>
                        <li>
                            <i className="material-icons rt">attach_file</i>
                        </li>
                        <li className="material-icons">camera_alt</li>
                    </ul>
                </div>

                <div className="whatsapp-chat-send__record">
                    <i className="material-icons">&#xe31d;</i>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};


  export default Chats;