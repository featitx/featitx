import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  const { name, email, phone, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Enhanced validation with regex
    let error = '';
    if (name === 'name') {
      error = /^[a-zA-Z\s]+$/.test(value) ? '' : 'Invalid characters in name';
    } else if (name === 'email') {
      error = /^\S+@\S+\.\S+$/.test(value) ? '' : 'Invalid email address';
    } else if (name === 'phone') {
      error = /^\d{10}$/.test(value) ? '' : 'Invalid phone number';
    }
    else if ( phone.length < 10 ) {
      error = /^\d{10}$/.test(value) ? '' : 'Need 10 digit';
    }
    setErrors({ ...errors, [name]: error });
  };



  const handleSubmit = () => {
    // Basic validation to ensure required fields are filled
    if (!name || !email || !phone || !message) {
      setErrors({ name: 'Name is required', email: 'Email is required', phone: 'Phone number is required' });
      return;
    }

    // Check for errors from regex validation
    if (errors.name || errors.email || errors.phone) {
      return;
    }

    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      phone,
      message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // Handle submission error
      });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:siddabdul7@gmail.com" className="p-text">siddabdul7@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 8108730684" className="p-text">+91 8108730684</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
            {errors.name && <span className="error-text">{errors.name}</span>}
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
            {errors.email && <span className="error-text">{errors.email}</span>}
          <div className="app__flex">
            <input className="p-text" type="tel" placeholder="Your Phone Number" name="phone" value={phone} onChange={handleChangeInput}  maxLength="10"/>
          </div>
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          <div className="app__flex">
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}

      <div className="copyright">
        <p className="p-text">@2024 ABDULLAH <span>All rights reserved</span></p>
        <p className="p-text"></p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
