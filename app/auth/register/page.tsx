import { inter } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 rounded shadow-md w-96">
        {/* <Image
          width={300}
          height={300}
          alt="NextUI hero Image"
          src="/logo-paypal.png"
        /> */}
        <form className="space-y-4">
          <Input
            type="text"
            size="sm"
            variant="bordered"
            label="Name"
            isInvalid={true}
            classNames={{
              label: ["!text-blue-800"],
              input: ["!text-green-700"],
              inputWrapper: [
                "bg-transparent",
                "border-1",
                "border-gray-200",
                "hover:border-gray-500",
                "group-data-[focus=true]:border-1",
                "group-data-[focus=true]:border-primary",
                "!border-danger group-data-[focus=true]:!border-danger",
              ],
            }}
          />
          <Input type="text" variant="bordered" size="sm" label="Last Name" />
          <Input
            type="text"
            variant="bordered"
            size="sm"
            label="Document Number"
          />
          <Input type="email" variant="bordered" size="sm" label="Email" />
          <Input
            type="password"
            variant="bordered"
            size="sm"
            label="Password"
          />
          <Input
            type="password"
            variant="bordered"
            size="sm"
            label="Confirm Password"
          />
          <Button color="primary" className="w-full">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
