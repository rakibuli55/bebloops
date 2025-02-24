import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline, MdLockOutline } from "react-icons/md";

const SettingsContent = () => {
  const [isPassShow, setIsPassShow] = useState(false);
  const [isConfirmPassShow, setIsConfirmPassShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h3 className="text-[30px] font-semibold text-themeBlack mb-8 custom-2xl:text-[24px] custom-xl:text-[22px] custom-2xl:mb-7 custom-xl:mb-7 custom-lg:text-[23px] custom-lg:mb-6 max-md:text-[22px] max-md:mb-5 custom-xs:!text-[18px]">
        Settings
      </h3>
      <div>
        <Dialog>
          <DialogTrigger className="w-full">
            <button
              type="button"
              className="p-5 text-base text-themeBlack flex items-center gap-2 font-medium bg-[#F6F6F6] rounded-[8px] w-full duration-200 ease-in-out hover:text-white hover:bg-primaryColor cursor-pointer custom-2xl:p-4 custom-xl:p-4 custom-lg:py-3 custom-lg:px-4 custom-lg:text-sm max-md:py-3 max-md:px-3 custom-xs:!py-[10px] custom-xs:!px-3 custom-xs:!text-sm"
            >
              <p className="text-[20px]">
                <MdLockOutline />
              </p>
              Change your Password
            </button>
          </DialogTrigger>
          <DialogContent className="cus-sm:max-w-[90%] custom-xs:max-w-[90%] custom-xs:rounded-[8px] custom-xs:p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-[20px] font-semibold text-themeBlack mb-4 custom-xs:text-[18px]">
                Change Your Password
              </h3>
              {/* pass  */}
              <div>
                <div className="relative">
                  <input
                    type={isPassShow ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    className="post-input"
                    {...register("password", {
                      required: "Please enter your password",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                  />
                  <p
                    className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer text-[20px]"
                    onClick={() => setIsPassShow(!isPassShow)}
                  >
                    {isPassShow ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </p>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {/* confirm pass  */}
              <div className="mt-4">
                <div className="relative">
                  <input
                    type={isConfirmPassShow ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Enter new password"
                    className="post-input"
                    {...register("confirmPassword", {
                      required: "Please enter your new password",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                  />
                  <p
                    className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer text-[20px]"
                    onClick={() => setIsConfirmPassShow(!isConfirmPassShow)}
                  >
                    {isConfirmPassShow ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </p>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="mt-6 custom-xs:mt-4">
                <button
                  type="submit"
                  className="py-4 px-5 text-base flex items-center gap-2 font-medium bg-primaryColor rounded-[8px] w-full duration-200 ease-in-out hover:text-white hover:bg-primaryColor cursor-pointer justify-center text-white max-md:p-3 max-md:text-sm"
                >
                  Update Password
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger className="w-full">
            <button
              type="button"
              className="mt-5 p-5 text-base text-themeBlack flex items-center gap-2 font-medium bg-[#F6F6F6] rounded-[8px] w-full duration-200 ease-in-out hover:text-white hover:bg-primaryColor cursor-pointer custom-2xl:p-4 custom-xl:p-4 custom-lg:py-3 custom-lg:px-4 custom-lg:text-sm max-md:py-3 max-md:px-3 custom-xs:!py-[10px] custom-xs:!px-3 custom-xs:!text-sm"
            >
              <p className="text-[20px]">
                <MdDeleteOutline />
              </p>
              Delete account
            </button>
          </DialogTrigger>
          <DialogContent className="cus-sm:max-w-[90%] custom-xs:max-w-[90%] custom-xs:rounded-[8px] custom-xs:p-4">
            <h4 className="text-[22px] text-center text-themeBlack font-semibold custom-xs:text-[18px]">Delete Account</h4>
            <p className="text-center text-[18px] mt-2 max-md:text-base custom-xs:mt-0 custom-xs:!text-[15px]">
              You have 24 hours to cancel the deletion request. After this
              period, all your account details will be permanently deleted. Are
              you sure you want to proceed with deleting your account?
            </p>
            <div className="flex items-center justify-end gap-[18px]">
                <p className="py-3 px-8 font-medium cursor-pointer text-sm text-themeBlack border border-[#E6E6FF] rounded-[50px] duration-200 ease-in-out hover:bg-primaryColor hover:border-primaryColor hover:text-white">Cancle</p>
                <p className="py-3 px-8 font-medium cursor-pointer text-sm text-white border bg-primaryColor border-[#E6E6FF] rounded-[50px] duration-200 ease-in-out hover:bg-transparent hover:border-[#E6E6FF] hover:text-themeBlack">Confirm</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SettingsContent;
