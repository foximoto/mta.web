import { supabase } from "@/config/supabase";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await supabase
      .from("new_member_request")
      .insert([
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          place: data.place,
          bike_reg_number: data.bikeReg,
          bike_brand_model: data.bikeModel,
          whatsapp_number: data.whatsapp,
          years_of_experience: data.experience,
          riding_gears_used: data.gears,
        },
      ])
      .then(() => {
        toast.success("Form submitted successfully!");
        reset();
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto p-6 bg-base-200 rounded-xl space-y-6"
    >
      {/* Name */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Full Name</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Your full name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors?.name?.message}</p>}
      </fieldset>

      {/* Phone */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Phone Number</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="10-digit mobile number"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit number",
            },
          })}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </fieldset>

      {/* Email */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Email Address</legend>
        <input
          type="email"
          className="input w-full"
          placeholder="example@email.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </fieldset>

      {/* Place */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Place</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Your place / city"
          {...register("place", { required: "Place is required" })}
        />
        {errors.place && <p className="text-red-500">{errors.place.message}</p>}
      </fieldset>

      {/* Bike Reg Number */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Bike Registration Number</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="KL 01 AB 1234"
          {...register("bikeReg", {
            required: "Registration number is required",
          })}
        />
        {errors.bikeReg && (
          <p className="text-red-500">{errors.bikeReg.message}</p>
        )}
      </fieldset>

      {/* Bike Brand & Model */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Bike Brand & Model</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Royal Enfield Himalayan 450"
          {...register("bikeModel", {
            required: "Bike model is required",
          })}
        />
        {errors.bikeModel && (
          <p className="text-red-500">{errors.bikeModel.message}</p>
        )}
      </fieldset>

      {/* WhatsApp Number */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">WhatsApp Number</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Same as phone? If yes, re-enter"
          {...register("whatsapp", {
            required: "WhatsApp number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit number",
            },
          })}
        />
        {errors.whatsapp && (
          <p className="text-red-500">{errors.whatsapp.message}</p>
        )}
      </fieldset>

      {/* Years of Experience */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Years of Riding Experience</legend>
        <input
          type="number"
          className="input w-full"
          placeholder="e.g., 5"
          {...register("experience", {
            required: "Experience is required",
            min: { value: 0, message: "Enter a valid number" },
          })}
        />
        {errors.experience && (
          <p className="text-red-500">{errors.experience.message}</p>
        )}
      </fieldset>

      {/* Riding Gears Used */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Riding Gears Used</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Helmet, Jacket, Gloves, Boots, etc."
          {...register("gears", { required: "This field is required" })}
        />
        {errors.gears && <p className="text-red-500">{errors.gears.message}</p>}
      </fieldset>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-full">
        Submit
      </button>
    </form>
  );
};

export default JoinForm;
