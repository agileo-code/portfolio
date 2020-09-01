import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { LanguageContext } from '../../context/language';
import SectionLayout from '../sectionLayout';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const { getTranslation } = useContext(LanguageContext);

  const onSubmit = data => {
    // TODO change the console log for modals or something to alert the user
    axios({ method: 'POST', url: 'https://formspree.io/mwkrdvon', data })
      .then(response => console.log(response?.data?.ok))
      .catch(error => console.log(error));
  };

  // TODO implement whatever notification error you want
  const errorStyle = name =>
    errors[name]?.message ? 'border border-red-900' : '';

  return (
    <SectionLayout id="contact" className="items-center bg-blue-600 text-black">
      <h2>{getTranslation('[Contact Title]')}</h2>
      <span>{getTranslation('[Contact Subtitle]')}</span>
      <form
        className="m-10 max-w-2xl flex flex-col w-full items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full grid gap-3 text-black">
          <input
            className={`placeholder-black p-2 ${errorStyle('name')}`}
            placeholder="Name*"
            name="name"
            ref={register({ required: 'This field is required' })}
          />
          <input
            className={`placeholder-black p-2 ${errorStyle('phone')}`}
            placeholder="Phone number"
            name="phone"
            ref={register}
          />
          <input
            className={`placeholder-black p-2 ${errorStyle('email')}`}
            placeholder="Email*"
            name="email"
            ref={register({
              required: 'This field is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format'
              }
            })}
          />
          <textarea
            className={`placeholder-black p-2 ${errorStyle('comments')}`}
            placeholder="Tell us briefly about your project*"
            name="comments"
            ref={register({ required: 'This field is required' })}
          />
        </div>
        <button
          className="bg-black w-32 mt-5 rounded-md text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </SectionLayout>
  );
};

export default Contact;
