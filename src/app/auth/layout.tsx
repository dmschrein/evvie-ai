import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";

/* A TypeScript type definition for the props that the `Layout` component will accept.
Specifically, it expects a single prop called `children`, which can be any valid 
React node (e.g. elements, components, text, etc)
 */
type Props = {
  children: React.ReactNode;
};

/* async React component that takes children as its prop. */
const Layout = async ({ children }: Props) => {
  const user = await currentUser(); /* Checks if a user is currently authenticated. */

  if (user) redirect("/"); /* If user is authenticated, the code redirects them to the home page*/
  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100wv"
          style={{
            width: "20%",
            height: "auto",
          }}
          width={0}
          height={0}
        />
        {children}
      </div>
      <div
        className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px
      overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3"
      >
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, I'm your AI powered branding assistant, Evvie!
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          Evvie is capable of capturing lead information without a form...{""}
          <br />
          something never done before
        </p>
        <Image
        src="/images/app-ui.png"
        alt="app image"
        loading="lazy"
        sizes="30"
        className="absolute shrink-0 !w-[1600px] top-48"
        width={0}
        height={0}
        />

      </div>
    </div>
  );
};

export default Layout;
