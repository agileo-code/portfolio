import SectionLayout from '../sectionLayout';

const Contact = () => (
  <SectionLayout id="contact" className="items-center bg-blue-600 text-black">
    <h2>Do you have a project in mind?</h2>
    <span>Write us. Together we can do something great.</span>
    <form className="m-10 max-w-2xl flex flex-col w-full items-center">
      <div className="w-full grid gap-3 text-black">
        <input className="placeholder-black p-2" placeholder="Name*" />
        <input className="placeholder-black p-2" placeholder="Phone number" />
        <input className="placeholder-black p-2" placeholder="Email*" />
        <textarea
          className="placeholder-black p-2"
          placeholder="Tell us briefly about your project*"
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

export default Contact;
