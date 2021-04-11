import React from 'react';

export default function Form() {
  const styles = {
    btn:
      'flex items-center justify-around w-40 px-2 py-2 font-medium text-white uppercase my-gradient rounded shadow-lg cursor-pointer hover:bg-white hover:text-yellow-500 ',
  };

  return (
    <section className="flex flex-col justify-center">
      <article className="container max-w-lg p-6 mx-auto bg-white rounded-md shadow-xl">
        <p className="prose-lg">
          If you like the content, want to get in touch, let me know your
          thoughts, ask me to write about specific topics or want to
          collaborate, let me know here.
        </p>
        <h2 className="inline-block my-2 text-4xl text-gradient my-gradient">
          Get in touch here!
        </h2>
        <div className="inline-block animate-bounce">
          <span className="text-4xl animate-bounce">👇🏼</span>
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full p-2 mb-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full p-2 mb-2 border rounded-md"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Type your message here..."
            required
            className="w-full p-2 mb-2 border rounded-md"
          />
          <button type="submit" className={`w-full mx-auto mt-4 ${styles.btn}`}>
            Submit
          </button>
        </form>
      </article>
    </section>
  );
}
