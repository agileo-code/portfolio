import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToast } from '@chakra-ui/core';

import { LanguageContext } from '../../context/language';

const Contact = () => {
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();
  const { getTranslation } = useContext(LanguageContext);

  const onSubmit = data => {
    axios({ method: 'POST', url: 'https://formspree.io/mwkrdvon', data })
      .then(() => {
        toast({
          title: 'Ok',
          description: getTranslation('[ContactOK]'),
          status: 'success',
          duration: 2000,
          isClosable: true
        });
        reset();
      })
      .catch(() => {
        toast({
          title: 'Error',
          description: getTranslation('[ContactKO]'),
          status: 'error',
          duration: 2000,
          isClosable: true
        });
      });
  };

  return (
    <section className="text-gray-700 body-font relative" id="contact">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4812537.250982194!2d-0.5386070906669486!3d40.200016691846294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a496c2a6d57035%3A0xb16124d430411319!2sSant%20Cugat%20del%20Vall%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1600433764346!5m2!1ses!2ses"
          style={{ filter: 'contrast(1) opacity(0.4)' }}
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/2 md:w-2/4 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-1">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            {getTranslation('[Contact Title]')}
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            {getTranslation('[Contact Subtitle]')}
          </p>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              aria-label={getTranslation('[Email]')}
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
              name="email"
              placeholder={getTranslation('[Email]')}
              ref={register}
              required
              type="email"
            />
            <textarea
              aria-label={getTranslation('[Comments]')}
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-blue-500 text-base px-4 py-2 mb-4 resize-none"
              name="comments"
              placeholder={getTranslation('[Comments]')}
              ref={register}
              required
            />
            <button
              type="submit"
              className="text-white bg-corporative-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
            >
              {getTranslation('[Submit]')}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            {getTranslation('[Accept privacy policy and terms of service]')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
