import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_53mrcu2',
        'template_lzlgbwa',
        formRef.current,
        {
          publicKey: 'HunrL6qsOAkoCFLST'
        })
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });
          setForm({
            name: '',
            email: '',
            message: '',
          });

          setTimeout(() => {
            hideAlert(true);
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
          setTimeout(() => {
            hideAlert(true);
          }, [3000]);
        },
      );
  };


  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white mt-3">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading} style={{ cursor: loading ? 'wait' : 'pointer' }}>
              {loading ?
                'Sending...' :
                (<span className='flex items-center gap-2'>Send Message <img src="/assets/arrow-up.png" alt="arrow-up" className="h-3 w-3" /></span>)}


            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;