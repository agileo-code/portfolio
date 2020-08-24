import SectionLayout from '../sectionLayout';

const Contact = () => (
  <SectionLayout className="items-center bg-corporative-slideLight text-corporative-color">
    <h2>Do you have a project in mind?</h2>
    <span>
      Challenge us. We want to work with you to create something great.
    </span>
    <form className="m-10 max-w-2xl flex flex-col w-full items-center">
      <div className="w-full grid gap-3 text-black">
        <input className="placeholder-black p-2" placeholder="Name" />
        <input className="placeholder-black p-2" placeholder="Phone number" />
        <input className="placeholder-black p-2" placeholder="Email" />
        <textarea
          className="placeholder-black p-2"
          placeholder="Tell us briefly about yout project"
        />
      </div>
      <button className="bg-red-600 w-32 mt-5 rounded-md" type="submit">
        Submit
      </button>
    </form>
  </SectionLayout>
);

export default Contact;
