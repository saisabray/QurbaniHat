import { auth } from "@/lib/auth";
import { PencilToSquare } from "@gravity-ui/icons";
import Button from "daisyui/components/button";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  console.log({ session });
  return (
    <div className="mx-auto w-5/12 p-10 shadow-sm rounded-2xl mt-10 flex flex-col items-center space-y-3 bg-gray-200">
      <h1 className="font-semibold text-[24px] text-black">Profile Info</h1>
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <Image
          src={user.image}
          alt={user?.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="font-semibold text-[18px] text-black">{user?.name}</p>
      <p className="font-medium text-base text-black/50">
        Email: {user?.email}
      </p>
      <Link href="/updatedprofile">
        <button className="btn btn-primary"><PencilToSquare /> Update Info</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
