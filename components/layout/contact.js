import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Modal from 'react-modal';
import { Button, Input, Textarea } from '@chakra-ui/core';

import { LanguageContext } from '../../context/language';
import SectionLayout from '../sectionLayout';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const Contact = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContext] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const { getTranslation } = useContext(LanguageContext);

  const onSubmit = data => {
    axios({ method: 'POST', url: 'https://formspree.io/mwkrdvon', data })
      .then(() => {
        setModalContext(<div>{getTranslation('[ContactOK]')}</div>);
        setIsOpen(true);
        reset();
      })
      .catch(() => {
        setModalContext(<div>{getTranslation('[ContactKO]')}</div>);
        setIsOpen(true);
      });
  };

  return (
    <SectionLayout id="contact" className="items-center bg-blue-600 text-black">
      <h2>{getTranslation('[Contact Title]')}</h2>
      <span>{getTranslation('[Contact Subtitle]')}</span>
      <form
        className="m-10 max-w-2xl flex flex-col w-full items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full grid gap-3 text-black">
          <Input
            placeholder={`${getTranslation('[Name]')}*`}
            name="name"
            ref={register()}
            maxLength={256}
            required
          />
          <Input
            placeholder={getTranslation('[Phone number]')}
            name="phone"
            ref={register}
            maxLength={256}
          />
          <Input
            placeholder={`${getTranslation('[Email]')}*`}
            name="email"
            ref={register()}
            type="email"
            maxLength={256}
            required
          />
          <Textarea
            style={{ resize: 'none' }}
            placeholder={`${getTranslation('[Comments]')}*`}
            name="comments"
            ref={register()}
            maxLength={256}
            required
          />
        </div>
        <Button
          className="mt-5"
          bg="black"
          color="white"
          _hover={{ bg: 'white', color: 'black' }}
          type="submit"
        >
          {getTranslation('[Submit]')}
        </Button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        {modalContent}
      </Modal>
    </SectionLayout>
  );
};

export default Contact;
