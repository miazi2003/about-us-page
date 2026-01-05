import React from "react";

const Contact = () => (
  <section className="max-w-7xl mx-auto px-6 py-24">
    <h2 className="text-center text-3xl font-bold mb-14">Get In Touch</h2>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-4 text-gray-400 text-sm">
        <p>📍 Location</p>
        <p>📧 Email</p>
        <p>📞 Phone</p>
      </div>

      <form className="space-y-4">
        <input className="w-full bg-[#0c0c0c] p-4 rounded-lg" placeholder="Name" />
        <input className="w-full bg-[#0c0c0c] p-4 rounded-lg" placeholder="Email" />
        <textarea className="w-full bg-[#0c0c0c] p-4 rounded-lg h-32" placeholder="Message" />
        <button className="w-full bg-blue-600 py-3 rounded-lg font-semibold">
          Send
        </button>
      </form>
    </div>
  </section>
);


export default Contact