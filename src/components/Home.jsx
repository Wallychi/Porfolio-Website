import { ArrowDownRight } from "lucide-react";
import React, { useState } from "react";

const Home = () => {
  const [contact, setContact] = useState(false);
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row lg:items-center px-5 lg:px-15 pt-25 gap-5 py-10 border-b-1 border-[var(--color-secondary)]"
    >
      <div className="flex flex-col gap-5 lg:w-3/4">
        <h1 className="text-5xl lg:w-full font-bold w-1/2">HI, I AM  WALIYULLAHI.</h1>
        <p className="text-lg text-[var(--color-tertiary)] italic">
          A front-end developer passionate about creating clean and interactive
          web experiences.
        </p>

        <div className="flex items-center gap-5 lg:gap-3">
          <div onClick={() => (setContact(!contact))} className="hidden lg:flex w-1/3 text-[var(--color-primary)] rounded-full justify-center items-center text-lg font-semibold gap-2 py-1 bg-[var(--color-extra)]">
            CONTACT ME
            <div className="flex bg-[var(--color-primary)] px-2 py-2 items-center justify-center rounded-full">
              <ArrowDownRight
                className="text-[var(--color-secondary)]"
                size={20}
                strokeWidth={2.5}
              />
            </div>
            {contact
              ? <div className="absolute  bg-[var(--color-buttonbg)] top-110 left-60 rounded-xl">
                <div className="flex flex-col text-[var(--color-secondary)]">
                  <p onClick={()=>{setContact(false)}} className="px-1 cursor-pointer bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full text-sm absolute -top-1 -right-1 font-bold">X</p>
                  <a href="mailto:szetrov@gmail.com" className="p-2 border-b-2 border-[var(--color-extra)] text-center">Email</a>
                  <a href="https://api.whatsapp.com/send?phone=2348082260759&text=Hi%2C%20I%20found%20you%20online" className="p-2 text-center">Whatsapp</a>
                </div>
              </div>
              : ""}
          </div>

          <div className="bg-[var(--color-buttonbg)] p-2 rounded-full lg:hidden">
            <a href="mailto:adejareWaliyullahi25@gmail.com">
              <img className="w-7" src="/Icons/mail.png" alt="Email-icon" />
            </a>
          </div>

          <div className="bg-[var(--color-buttonbg)] p-2 rounded-full lg:hidden">
            <a href="tel:+2348082260759" target="_blank">
              <img
                className="w-7 lg:w-10"
                src="/Icons/phone.png"
                alt="Phone-icon"
              />
            </a>
          </div>

          <div className="bg-[var(--color-buttonbg)] p-2 rounded-full">
            <a
              href="https://www.linkedin.com/in/adejarewaliyullahi"
              target="_blank"
            >
              <img
                className="w-7"
                src="/Icons/linkedin.png"
                alt="LinkedIn-icon"
              />
            </a>
          </div>

          <div className="bg-[var(--color-buttonbg)] p-2 rounded-full">
            <a href="https://github.com/Wallychi" target="_blank">
              <img
              className="w-7 "
              src="/Icons/github.png"
              alt="Github-icon"
            />
            </a>
          </div>

          <div className="bg-[var(--color-buttonbg)] p-2 rounded-full lg:hidden">
            <a href="https://api.whatsapp.com/send?phone=2348082260759&text=Hi%2C%20I%20found%20you%20online">
              <img
                className="w-7 lg:w-10"
                src="/Icons/whatsapp.png"
                alt="Whatsapp-Icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:w-1/3">
        <img
          src="https://i.postimg.cc/BnwqWpyx/devs-pic1.jpg"//"/Images/devs_pic1.jpg"
          alt="Picture of the website creator"
          className="rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Home;
