import React, { useState } from "react";
import "./Contact.css";
function Contact  ()  {
const [name,setName]=useState("");
const [message,setMessage]=useState("");
const [messages,setMessages]=useState([]);

function sendMessage(){
if(name==="" || message===""){
alert("Please fill all fields");
return;
}
setMessages([...messages,{mame,message}]);
setName("");
sendMessage("");
}

  return (
    <div className="contact-page">
        <h1>Contact Us</h1>
        <p>Send us your message</p>

        <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
       <textarea
       placeholder="Your Message"
       value={message}
       onChange={(e)=>sendMessage(e.target.value)}
       />
    <div className="contact-info">
    <h3>Contact Information</h3>
     <p>📞 Phone: +961 76 445 846</p>
    <p>📍 Location: Tripoli, Lebanon</p>
    </div>
    <button onClick={sendMessage}>Send Message</button>
    <h2>Messages</h2>
    {messages.map((item,index)=>(
        <div className="message-box" key={index}>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
        </div>
    ))}
    </div>
  );
}
  export default Contact;