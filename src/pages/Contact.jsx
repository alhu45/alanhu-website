import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import '../styles/Contact.css';

function Contact() {
  const bruh1Ref = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (bruh1Ref.current) {
      bruh1Ref.current.style.opacity = 1;
    }
  }, []);

  const handleSendEmail = () => {
    // Set default values if fields are empty
    const senderName = name.trim() || 'Anonymous';
    const senderEmail = email.trim() || 'No email provided';
    const senderMessage = message.trim() || 'No message provided';

    const subject = encodeURIComponent(`New Contact Message from ${senderName}`);
    const body = encodeURIComponent(`Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMessage}`);

    // Open the default email client
    window.location.href = `mailto:17.alanhu@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSendViaGmail = () => {
    // Set default values if fields are empty
    const senderName = name.trim() || '(Enter Name)';
    const senderMessage = message.trim() || '(Enter Message)';

    const subject = encodeURIComponent(`New Contact Message from ${senderName}`);
    const body = encodeURIComponent(
    `Hi Alan, \n\n${senderMessage} \n\nFrom, \n${senderName}`);

    // Open Gmail compose window in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=17.alanhu@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <>
        <Navbar />
        <div className="contact-container">
            <h1 ref={bruh1Ref} className="bruh-1">Contact Me at 17.alanhu@gmail.com</h1>
            <div className="contact-form">
                <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button onClick={handleSendEmail}>Send via Email App</button>
                <button onClick={handleSendViaGmail}>Send via Gmail</button>
            </div>
        </div>
    </>
  );
}

export default Contact;
