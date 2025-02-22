import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Controller, useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import profileAvatar from "../../assets/images/movement-proffile.png";

const ProfileContent = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedDate, setSelectedDate] = useState("");
  const [isCalenderShow, setisCalenderShow] = useState(false);
  const [avatar, setAvatar] = useState(profileAvatar);

  const onSubmit = (data) => {
    console.log(data);
  };

  // Handle date change from the calendar
  const onDateChange = (date) => {
    const formatedDate = moment(date).format("MM/DD/YYYY");
    setSelectedDate(formatedDate);
    setValue("date", formatedDate);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      const reader =  new FileReader();

      reader.onloadend = () => {
        setAvatar(reader.result)
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <h3 className="text-[30px] font-semibold text-themeBlack mb-8">
        Profile
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* profile image  */}
        <div>
          <div className="relative h-[100px] w-[100px] mx-auto">
            <input
              type="file"
              name="avatar"
              id="avatar"
              {...register("avatar")}
              className="hidden"
              onChange={handleImageChange}
            />
            <img
              className="h-[100px] w-[100px] object-cover rounded-full"
              src={avatar}
              alt="profileAvatar"
            />
            <label
              htmlFor="avatar"
              className="cursor-pointer w-[30px] h-[30px] bg-primaryColor rounded-full text-white text-base flex items-center justify-center absolute bottom-0 right-0"
            >
              <FiEdit />
            </label>
          </div>
          <h3 className="text-center text-[24px] font-semibold text-themeBlack mt-4">
            Md Mosharaf
          </h3>
        </div>
        {/* Name  */}
        <div>
          <label htmlFor="name" className="post-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="post-input"
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        {/* email  */}
        <div className="mt-5">
          <label htmlFor="email" className="post-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="post-input"
            {...register("email", { required: "Please enter your email" })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        {/* date of birth  */}
        <div className="mt-5">
          <label htmlFor="dateOfBirth" className="post-label">
            Date Of Birth
          </label>
          <div className="relative">
            <input
              type="text"
              className="post-input"
              placeholder="Select your birthday"
              value={selectedDate}
              readOnly
              onClick={() => setisCalenderShow(!isCalenderShow)}
            />
            {isCalenderShow && (
              <div className="absolute">
                 <Controller
                  name="dateOfBirth"
                  control={control}
                  rules={{ required: "Please enter your date of birth" }}
                  render={({ field }) => (
                    <Calendar
                      {...field}
                      value={selectedDate || field.value}
                      onChange={onDateChange}
                    />
                  )}
                />
              </div>
            )}
          </div>
          {errors.dateOfBirth && (
            <p className="text-sm text-red-500">{errors.dateOfBirth.message}</p>
          )}
        </div>
        {/* gender  */}
        <div className="mt-5">
          <label htmlFor="gender">Gender</label>
          <div className="mt-[7px]">
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Please enter your gender" }}
              render={({ field }) => (
                <Select {...field} defaultValue={field.value}>
                  <SelectTrigger className="w-full h-[48px] focus:ring-0 focus:outline-none focus:ring-offset-0">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && (
              <p className="text-sm text-red-500 mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>
        </div>
        {/* gender  */}
        <div className="mt-5">
          <label htmlFor="country">Country</label>
          <div className="mt-[7px]">
            <Controller
              name="country"
              control={control}
              rules={{ required: "Please enter your country" }}
              render={({ field }) => (
                <Select {...field} defaultValue={field.value}>
                  <SelectTrigger className="w-full h-[48px] focus:ring-0 focus:outline-none focus:ring-offset-0">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.country && (
              <p className="text-sm text-red-500 mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>
        <button type="submit" className="mt-10 p-4 w-full bg-primaryColor text-[18px] rounded-[8px] text-white font-semibold">Save</button>
      </form>
    </div>
  );
};

export default ProfileContent;
