import "./Chat.scss";

import woman from "../../assets/home/woman.jpg";
import ideal from "../../assets/home/ideal.svg";
import verified from "../../assets/home/verified.svg";

const Chat = () => {
  return (
    <div className="Chat">
      <div className="left__sidebar">
        <div className="headOf__sidebar">
          <img src={woman} alt="" className="profile__photo" />
          <div className="right__options">
            <div className="status">O</div>
            <div className="newChat">N</div>
            <div className="options">:</div>
          </div>
        </div>
        <div className="mainOf__sidebar">
          <div className="chat__overview">
            <img src={ideal} alt="" className="profile__photo" />
            <div className="textBox">
              <p className="contactName">Pedro</p>
              <p className="lastMessage">Fuck The Week!</p>
            </div>
            <div className="imortant__info">
              <span className="timeSent">11:05</span>
              <span className="unread__messages">2</span>
            </div>
          </div>
          <div className="chat__overview">
            <img src={ideal} alt="" className="profile__photo" />
            <div className="textBox">
              <p className="contactName">Pedro</p>
              <p className="lastMessage">Fuck The Week!</p>
            </div>
            <div className="imortant__info">
              <span className="timeSent">11:05</span>
              <span className="unread__messages">2</span>
            </div>
          </div>
          <div className="chat__overview">
            <img src={ideal} alt="" className="profile__photo" />
            <div className="textBox">
              <p className="contactName">Pedro</p>
              <p className="lastMessage">Fuck The Week!</p>
            </div>
            <div className="imortant__info">
              <span className="timeSent">11:05</span>
              <span className="unread__messages">2</span>
            </div>
          </div>
          <div className="chat__overview">
            <img src={ideal} alt="" className="profile__photo" />
            <div className="textBox">
              <p className="contactName">Pedro</p>
              <p className="lastMessage">Fuck The Week!</p>
            </div>
            <div className="imortant__info">
              <span className="timeSent">11:05</span>
              <span className="unread__messages">2</span>
            </div>
          </div>
          <div className="chat__overview">
            <img src={ideal} alt="" className="profile__photo" />
            <div className="textBox">
              <p className="contactName">Pedro</p>
              <p className="lastMessage">Fuck The Week!</p>
            </div>
            <div className="imortant__info">
              <span className="timeSent">11:05</span>
              <span className="unread__messages">2</span>
            </div>
          </div>
          <div className="chat__overview">
            <img src={ideal} alt="" className="profile__photo" />
            <div className="textBox">
              <p className="contactName">Pedro</p>
              <p className="lastMessage">Fuck The Week!</p>
            </div>
            <div className="imortant__info">
              <span className="timeSent">11:05</span>
              <span className="unread__messages">2</span>
            </div>
          </div>
          <div className="chat__overview">
            <img src={ideal} alt="" className="profile__photo" />
            <div className="textBox">
              <p className="contactName">Pedro</p>
              <p className="lastMessage">Fuck The Week!</p>
            </div>
            <div className="imortant__info">
              <span className="timeSent">11:05</span>
              <span className="unread__messages">2</span>
            </div>
          </div>
          <div className="chat__overview">
            <img src={ideal} alt="" className="profile__photo" />
            <div className="textBox">
              <p className="contactName">Pedro</p>
              <p className="lastMessage">Fuck The Week!</p>
            </div>
            <div className="imortant__info">
              <span className="timeSent">11:05</span>
              <span className="unread__messages">2</span>
            </div>
          </div>
          <div className="chat__overview">
            <img src={ideal} alt="" className="profile__photo" />
            <div className="textBox">
              <p className="contactName">Pedro</p>
              <p className="lastMessage">Fuck The Week!</p>
            </div>
            <div className="imortant__info">
              <span className="timeSent">11:05</span>
              <span className="unread__messages">2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main__chat">
        <div className="headOf__mainChat">
          <img src={verified} alt="" className="profile__photo" />
          <div className="textbox">
            <div className="contactName">Pedro</div>
          </div>
        </div>
        <div className="bodyOF__mainChat">
          <div className="message__box sent">Hey Man how are you doing? </div>
          <div className="message__box sent">I am Jad</div>
          <div className="message__box sent">.</div>
          <div className="message__box received">Hey</div>
          <div className="message__box received">
            Ready for today's session?.
          </div>
          <div className="message__box sent">Oh yeah!</div>
          <div className="message__box sent">I am so excited</div>
          <div className="message__box received">So let's start</div>
          <div className="message__box sent">Hey Man how are you doing? </div>
          <div className="message__box sent">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </div>
          <div className="message__box sent">.</div>
          <div className="message__box received">Hey</div>
          <div className="message__box received">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </div>
          <div className="message__box sent">Oh yeah!</div>
          <div className="message__box sent">I am so excited</div>
          <div className="message__box received">So let's start</div>
        </div>
        <div className="footerOf__mainChat">
          <div className="form-group">
            <input
              type="text"
              className="new__message__input"
              placeholder="Message"
            />
            <button className="btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
