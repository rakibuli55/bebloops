import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "@/components/Buttons/AuthButton/AuthButton";

const AuthPersonalInfo = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = data => {
    console.log("Form Submitted:", data);
    // Perform actions like API requests
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-auto w-auto p-10 border-[1px] gap-y-6 items-center border-solid bg-white border-[#BDBDBD] rounded-[10px]"
    >
      <h4 className="common-form-heading"> Personal Information</h4>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          {/* Name Input */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name" className="common-form-heading text-[14px]">
              Name
            </label>
            <input
              placeholder="Enter your name"
              id="name"
              name="name"
              type="text"
              className="form-input"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="common-form-heading text-[14px]">
              Email
            </label>
            <input
              placeholder="Enter your email address"
              id="email"
              name="email"
              type="email"
              className="form-input"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Date of Birth Input */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="date" className="common-form-heading text-[14px]">
              Date Of Birth
            </label>
            <input
              placeholder="Enter your date of birth"
              id="date"
              name="date"
              type="date"
              className="form-input"
              {...register("date", { required: "Date of birth is required" })}
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Gender Dropdown */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="gender" className="common-form-heading text-[14px]">
              Gender
            </label>
            <select
              className="form-input"
              name="gender"
              id="gender"
              {...register("gender", { required: "Gender is required" })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Country Dropdown */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="country"
              className="common-form-heading text-[14px]"
            >
              Country
            </label>
            <select
              className="form-input"
              name="country"
              id="country"
              {...register("country", { required: "Country is required" })}
            >
              <option value="">Select your country</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="canada">Canada</option>
              <option value="other">Other</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>
        </div>
        <AuthButton type="submit" Text="Continue" />
      </div>
    </form>
  );
};

export default AuthPersonalInfo;
