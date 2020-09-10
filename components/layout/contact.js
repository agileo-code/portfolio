import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  useToast
} from '@chakra-ui/core';

import { LanguageContext } from '../../context/language';
import SectionLayout from '../sectionLayout';

const Contact = () => {
  const toast = useToast();
  const { control, errors, register, handleSubmit, reset } = useForm();
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
    <SectionLayout id="contact" className="items-center bg-blue-600 text-black">
      <h2>{getTranslation('[Contact Title]')}</h2>
      <span>{getTranslation('[Contact Subtitle]')}</span>
      <form
        className="m-10 max-w-2xl flex flex-col w-full items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full grid gap-4 text-black">
          <FormControl isInvalid={errors.name}>
            <Controller
              as={Input}
              placeholder={`${getTranslation('[Name]')}*`}
              name="name"
              rules={{
                required: getTranslation('[Required Field]')
              }}
              maxLength={128}
              control={control}
              isInvalid={errors.name}
              focusBorderColor="#000"
              errorBorderColor="red.400"
            />
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>
          <Input
            placeholder={getTranslation('[Phone number]')}
            name="phone"
            ref={register}
            focusBorderColor="#000"
            maxLength={128}
          />
          <FormControl isInvalid={errors.email}>
            <Input
              placeholder={`${getTranslation('[Email]')}*`}
              name="email"
              ref={register({
                required: getTranslation('[Required Field]'),
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: getTranslation('[Email validation]')
                }
              })}
              type="email"
              focusBorderColor="#000"
              errorBorderColor="red.400"
              maxLength={128}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.comments}>
            <Textarea
              style={{ resize: 'none' }}
              placeholder={`${getTranslation('[Comments]')}*`}
              name="comments"
              ref={register({ required: getTranslation('[Required Field]') })}
              maxLength={256}
              focusBorderColor="#000"
              errorBorderColor="red.400"
              isInvalid={errors.comments}
            />
            <FormErrorMessage>{errors?.comments?.message}</FormErrorMessage>
          </FormControl>
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
    </SectionLayout>
  );
};

export default Contact;
