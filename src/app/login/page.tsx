"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { signIn } from "next-auth/react";
// images
import GoogleIcon from "../../assets/google-icon.svg";
import { toast } from "react-hot-toast";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast.error("Oops... Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">logo</div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Signin to your account
          </h2>
          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={loginWithGoogle}
          >
            {!isLoading && (
              <Image
                src={GoogleIcon}
                width={20}
                height={20}
                alt="Google Icon"
              />
            )}
            Signin
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
