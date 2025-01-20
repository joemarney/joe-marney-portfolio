//! Imports
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

//! Animations
import Wrapper from "../../components/animations/wrapper";
import { fadeScale } from "../../components/animations/animations";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "portfolio contact form",
      subject: "could be !important",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      console.log(data);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
      console.log(data);
    },
  });

  return (
    <section id="contact" className="h-screen flex flex-col justify-center items-center bg-theme-background2 text-theme-words text-center">
      <Wrapper animation={fadeScale}>
        <h1 className="text-4xl font-bold m-10">contact me</h1>
      </Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="w-80">
        <input type="checkbox" id="" className="hidden" style={{ display: "none" }} {...register("botcheck")}></input>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-theme-words2 rounded-md outline-none focus:ring-4 bg-theme-boxes  ${errors.name ? "border-red-600 focus:border-red-600 ring-red-100" : "border-gray-300 focus:border-gray-600 ring-gray-100"}`}
            {...register("name", {
              required: "Enter your name",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-theme-words2 rounded-md outline-none focus:ring-4 bg-theme-boxes  ${errors.email ? "border-red-600 focus:border-red-600 ring-red-100" : "border-gray-300 focus:border-gray-600 ring-gray-100"}`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            className={`w-full px-4 py-3 border-2 placeholder:text-theme-words2 rounded-md outline-none h-36 focus:ring-4 bg-theme-boxes  ${errors.message ? "border-red-600 focus:border-red-600 ring-red-100" : "border-gray-300 focus:border-gray-600 ring-gray-100"}`}
            {...register("message", {
              required: "Enter your message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              {" "}
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button type="submit" className="w-full py-4 font-semibold text-white transition-colors bg-theme-buttons rounded-md hover:bg-theme-hover hover:text-theme-words2 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
          {isSubmitting ? (
            <svg className="w-5 h-5 mx-auto text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && message && <div className="mt-3 text-sm text-center text-green-500">{"Thank you! I will get back to you soon."}</div>}
      {isSubmitSuccessful && !isSuccess && message && <div className="mt-3 text-sm text-center text-red-500">{"Oops, I didn't get that. Please try again later"}</div>}
    </section>
  );
}
