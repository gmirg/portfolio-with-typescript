import React, { useState } from "react";
import styles from "../app/page.module.css";
import { IContact } from "../app/interfaces/contact.interface";
import { useForm } from "react-hook-form";
import { Submit } from "../app/api/submit";
import { ToastContainer } from "react-toastify";


const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: "",
      emailAddress: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = (data: IContact) => {
    Submit(data);
    reset();
  };
  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <h1 className="">Send a message</h1>

        <label htmlFor="fullname" className="">
          Full name<span className="">*</span>
        </label>
        <input
          type="text"
          className=""
          {...register("fullName", { required: true })}
          placeholder="Full name"
        />

        <label htmlFor="email" className="">
          E-mail<span className="">*</span>
        </label>
        <input
          type="email"
          className=""
          {...register("emailAddress", {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,

            required: true,
          })}
          placeholder="Email"
        />

        <label htmlFor="subject" className="">
          Subject<span className="">*</span>
        </label>

        <select {...register("subject",{ required: true })}>
          <option value="" disabled >Select...</option>
          <option value="Collaboration">Development Collaboration</option>
          <option value="Proporsal">Job Proporsal</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="message" className="">
          Message<span className="">*</span>
        </label>
        <textarea
          className=""
          {...register("message", { minLength: 5 })}
          placeholder="Message"
        />
        <div className="">
          <button className={styles.contact} type="submit">
            Send
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className=""
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
