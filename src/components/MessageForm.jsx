import { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (event) => {
    //   value is stored in
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    //   this is going to make sure that the browser wont refresh once we submit a form
    event.preventDefault();

    const text = value.trim();

    // if the text is greater than zero than we can send the message
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    // we wanna reset the value to empty string
    setValue("");
  };

  //   upload an image
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message here or an image..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* the image labels with upload buttona dn image  */}
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>

      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
