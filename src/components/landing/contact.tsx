import React from 'react';
import { Button } from '@/components/ui/button';

interface ContactProps {
  readonly className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  return (
    <section id="contact" className={`bg-background w-full ${className}`}>
      <div className="max-w-[800px] mx-auto px-6 pt-[192px] pb-[216px]">
        <h2 className="text-[25.2px] font-bold uppercase mb-12 text-center text-foreground">contact</h2>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-foreground" htmlFor="name">Name</label>
            <input
              className="bg-background border border-border rounded-[4.5px] p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground text-[13.33px]"
              id="name"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-foreground" htmlFor="email">Email</label>
            <input
              className="bg-background border border-border rounded-[4.5px] p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground text-[13.33px]"
              id="email"
              placeholder="your@email.com"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-foreground" htmlFor="message">Message</label>
            <textarea
              className="bg-background border border-border rounded-[4.5px] p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground resize-none text-[13.33px]"
              id="message"
              placeholder="Booking details..."
              rows={5}
            ></textarea>
          </div>
          <Button
            className="mt-4 self-start font-bold text-xs uppercase tracking-widest px-8 py-6"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
