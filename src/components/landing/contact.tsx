import React from 'react';

interface ContactProps {
  readonly className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  return (
    <section id="contact" className={`bg-brand-white w-full ${className}`}>
      <div className="max-w-[800px] mx-auto px-6 pt-[192px] pb-[216px]">
        <h2 className="text-[25.2px] font-bold uppercase mb-12 text-center text-brand-black">contact</h2>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-brand-black" htmlFor="name">Name</label>
            <input
              className="bg-brand-white border border-barely-gray rounded-[4.5px] p-3 focus:outline-none focus:border-bold-red focus:ring-2 focus:ring-bold-red/20 transition-all placeholder:text-text-muted text-[13.33px]"
              id="name"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-brand-black" htmlFor="email">Email</label>
            <input
              className="bg-brand-white border border-barely-gray rounded-[4.5px] p-3 focus:outline-none focus:border-bold-red focus:ring-2 focus:ring-bold-red/20 transition-all placeholder:text-text-muted text-[13.33px]"
              id="email"
              placeholder="your@email.com"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-brand-black" htmlFor="message">Message</label>
            <textarea
              className="bg-brand-white border border-barely-gray rounded-[4.5px] p-3 focus:outline-none focus:border-bold-red focus:ring-2 focus:ring-bold-red/20 transition-all placeholder:text-text-muted resize-none text-[13.33px]"
              id="message"
              placeholder="Booking details..."
              rows={5}
            ></textarea>
          </div>
          <button
            className="mt-4 bg-bold-red text-brand-white border-2 border-bold-red px-[18px] py-[10.8px] rounded hover:bg-brand-white hover:text-bold-red transition-colors self-start font-bold text-[12.6px]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
