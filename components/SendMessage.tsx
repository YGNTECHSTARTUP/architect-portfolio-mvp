"use client"
import { Mail, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react'
import { Button } from './ui/button';

const SendMessage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleChange = (e:any) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
      };
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleSubmit = (e:any) => {
        e.preventDefault();
        const { name, email, message } = formData;
      
        const mailtoLink = `mailto:lohithamendu99@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        window.location.href = mailtoLink;
      };
  return (
    <section id="contact" className="container-custom section-spacing -mt-20">
    <h2 className="heading-lg mb-16 relative text-center">
      Get In Touch
      <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 left-1/2 -translate-x-1/2 opacity-80">
        06
      </span>
    </h2>

    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <p className="text-2xl leading-relaxed mb-10">
          I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col gap-6">
          <Link href="mailto:lohithamendu99@gmail.com" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
            <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline">lohithamendu99@gmail.com</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
            <PhoneCall className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline"> 7989661382 </span>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg mb-2 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
              required
            ></textarea>
          </div>
          <div>
            <Button size="lg" className="text-lg px-8 w-full md:w-auto" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default SendMessage