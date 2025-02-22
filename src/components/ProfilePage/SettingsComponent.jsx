import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline, MdLockOutline } from "react-icons/md";

const SettingsComponent = () => {
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
      <h3 className="text-[30px] font-semibold text-themeBlack mb-8">
        Settings
      </h3>
      <div>
        <Dialog>
          <DialogTrigger className="w-full">
            <button
              type="button"
              className="p-5 text-base text-themeBlack flex items-center gap-2 font-medium bg-[#F6F6F6] rounded-[8px] w-full duration-200 ease-in-out hover:text-white hover:bg-primaryColor cursor-pointer"
            >
              <p className="text-[20px]">
                <MdLockOutline />
              </p>
              Change your Password
            </button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-[20px] font-semibold text-themeBlack mb-4">
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
              <div className="mt-6">
                <button
                  type="submit"
                  className="py-4 px-5 text-base flex items-center gap-2 font-medium bg-primaryColor rounded-[8px] w-full duration-200 ease-in-out hover:text-white hover:bg-primaryColor cursor-pointer justify-center text-white"
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
              className="mt-5 p-5 text-base text-themeBlack flex items-center gap-2 font-medium bg-[#F6F6F6] rounded-[8px] w-full duration-200 ease-in-out hover:text-white hover:bg-primaryColor cursor-pointer"
            >
              <p className="text-[20px]">
                <MdDeleteOutline />
              </p>
              Delete account
            </button>
          </DialogTrigger>
          <DialogContent>
            <h4 className="text-[22px] text-center text-themeBlack font-semibold">Delete Account</h4>
            <p className="text-center text-[18px] mt-2">
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

export default SettingsComponent;
