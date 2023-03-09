import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "server/src/schema/user.schema";
import { trpc } from "../utils/trpc";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Success from "../components/toasts/Success";
import Error from "../components/toasts/Error";
import * as Portal from "@radix-ui/react-portal";
interface IFormInputs {
  name: string;
  email: string;
  photo: string;
  password: string;
  passwordConfirm: string;
}

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: zodResolver(createUserSchema),
  });
  const mutation = trpc.registerUser.useMutation();

  const [openSuccess, setOpenSuccess] = useState(false);

  const [openError, setOpenError] = useState(false);

  const [viewPassword, setViewPassword] = useState(false);

  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);

  useEffect(() => {
    if (mutation.isError) {
      setOpenError(true);
    }

    if (mutation.isSuccess) {
      setOpenSuccess(true);
    }
  }, [mutation.isError, mutation.isSuccess]);

  const handleViewPassword = () => {
    setViewPassword((prevState) => !prevState);
  };

  const handleViewConfirmPassword = () => {
    setViewConfirmPassword((prevState) => !prevState);
  };

  const onSubmit = (data: IFormInputs) => {
    console.log(data, "Esta mandado algo");
    mutation.mutate(data);
  };

  return (
    <main className="container  h-full mx-auto flex items-center justify-center">
      <section className="bg-main px-10 w-[300px] py-10 rounded-sm flex flex-col items-start gap-5 justify-center">
        <h1 className=" text-main_headline font-bold self-center">
          Create an user
        </h1>

        <form
          className="flex flex-col items-start w-full gap-4 justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-1 flex-col min-w-full">
            <input
              className="placeholder:indent-2 indent-1 outline-secondary min-w-full"
              {...register("name")}
              placeholder="John Doe"
            />
            <p className="text-sm text-red-500"> {errors.name?.message}</p>
          </div>

          <div className="flex gap-1 flex-col min-w-full">
            <input
              className="placeholder:indent-2 indent-1 outline-secondary min-w-full"
              {...register("email")}
              placeholder="john.doe@example.com"
            />
            <p className="text-sm text-red-500"> {errors.email?.message}</p>
          </div>
          <div className="flex gap-1 flex-col max-w-full">
            <div className="flex">
              <input
                type={viewPassword ? "text" : "password"}
                className="placeholder:indent-2 indent-1 outline-secondary "
                {...register("password")}
                placeholder="password"
              />
              <div className="bg-white flex items-center">
                {viewPassword ? (
                  <FaEye
                    onClick={handleViewPassword}
                    className="text-background"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={handleViewPassword}
                    className="text-background"
                  />
                )}
              </div>
            </div>
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>

          <div className="flex gap-1 flex-col min-w-full">
            <div className="flex">
              <input
                type={viewConfirmPassword ? "text" : "password"}
                className="placeholder:indent-2 indent-1 outline-secondary "
                {...register("passwordConfirm")}
                placeholder="Confirm password"
              />
              <div className="bg-white flex items-center">
                {viewConfirmPassword ? (
                  <FaEye
                    onClick={handleViewConfirmPassword}
                    className="text-background"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={handleViewConfirmPassword}
                    className="text-background"
                  />
                )}
              </div>
            </div>
            <p className="text-sm text-red-500">
              {errors.passwordConfirm?.message}
            </p>
          </div>
          <input
            className="bg-highlight px-3 py-1 rounded-md self-center"
            type="submit"
          />
        </form>
      </section>
      <Success
        open={openSuccess}
        setOpen={setOpenSuccess}
        successMessage="The user has been created succesfully"
      />
      <Error
        open={openError}
        setOpen={setOpenError}
        errorMessage="The user has been created succesfully"
      />
    </main>
  );
}

export default Register;
