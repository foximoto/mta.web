import { supabase } from "@/config/supabase";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (body: any) => {
    await supabase
      .from("enquiry_form")
      .insert([
        {
          name: body.name,
          email: body.email,
          phone: body.phone,
          subject: body.subject,
          message: body.message,
        },
      ])
      .then(() => {
        toast.success("Form submitted successfully");
        reset();
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 rounded p-2 w-full"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-red-500">Name is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          className="border border-gray-300 rounded p-2 w-full"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="text-red-500">Phone is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 rounded p-2 w-full"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="border border-gray-300 rounded p-2 w-full"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="text-red-500">Subject is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block">
          Message
        </label>
        <textarea
          id="message"
          className="border border-gray-300 rounded p-2 w-full"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="text-red-500">Message is required</p>}
      </div>
      <button type="submit" className="btn btn-block btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
