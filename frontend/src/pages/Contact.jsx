import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <div className="max-w-screen-md px-4 mx-auto">
        <h2 className="mb-8 text-center">Contact Us</h2>
        <p className="mb-8 font-light text-center lg:mb-16 text_para">
          If you have any technical issues or want to send feedback, let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="abcd@gmail.com"
              className="form_input mt-1"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;