import React from "react";
import { useForm } from "react-hook-form";
import SiteLogo from "../../assets/images/logo/logo.svg";
import AuthButton from "@/components/Buttons/AuthButton/AuthButton";

const AuthOrganizationInfo = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = data => {
    console.log("Form Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-auto w-auto p-10 border-[1px] gap-y-6 items-center border-solid bg-white border-[#BDBDBD] rounded-[10px]"
    >
      <h4 className="common-form-heading"> Organization Information</h4>
      <div className="flex flex-col gap-y-10 ">
        <div className="flex flex-col gap-y-4 ">
          {/* Organization Name */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name" className="common-form-heading text-[14px]">
              Organization Name
            </label>
            <input
              placeholder="Enter your organization name"
              id="name"
              name="name"
              type="text"
              className="form-input"
              {...register("name", {
                required: "Organization name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* CIF */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="cif" className="common-form-heading text-[14px]">
              CIF
            </label>
            <input
              placeholder="Enter your CIF info"
              id="cif"
              name="cif"
              type="text"
              className="form-input"
              {...register("cif", { required: "CIF is required" })}
            />
            {errors.cif && (
              <p className="text-red-500 text-sm">{errors.cif.message}</p>
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
              {...register("country", {
                required: "Country is required", // Validation message
              })}
              defaultValue="" // Ensures no option is selected by default
            >
              <option value="" disabled>
                Select your country
              </option>
              <option value="bangladesh">Bangladesh</option>
              <option value="canada">Canada</option>
              <option value="other">Other</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="common-form-heading text-[14px]">
              Email
            </label>
            <input
              placeholder="Enter your organization email"
              id="email"
              name="email"
              type="email"
              className="form-input"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Website */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="website"
              className="common-form-heading text-[14px]"
            >
              Website
            </label>
            <input
              placeholder="Enter your organization website"
              id="website"
              name="website"
              type="text"
              className="form-input"
              {...register("website", { required: "Website is required" })}
            />
            {errors.website && (
              <p className="text-red-500 text-sm">{errors.website.message}</p>
            )}
          </div>
        </div>
        <AuthButton Type="submit" Text="Continue" />
      </div>
    </form>
  );
};

export default AuthOrganizationInfo;
