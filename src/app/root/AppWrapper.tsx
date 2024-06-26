"use client";

import { usePbAuthListener } from "@/state/hooks/usePbAuthListener";
import Link from "next/link";
import React from "react";
import { Logout } from "../auth/components/Logout";
import Header from '@/components/shared/Header';
import { pb } from '@/state/pb/client_config';
interface AppWrapperProps {
  children: React.ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  usePbAuthListener();
  const user = pb.authStore.model

  return (
    <>
    <Header user={user} />
    { children}
    </>
    // <div className="w-full h-screen flex flex-col   items-center justify-center">
    //   <div className="w-full flex sticky  top-1 gap-3 text-blue-400 hover:text-blue-800">
    //     <Link href="/">Home</Link>
    //     <Link href="/auth">Auth</Link>
    //     <Link href="/admin">Admin</Link>
    //     <Logout/>
    //   </div>
    //   <div className="w-full h-screen overflow-y-scroll scroll-bar">{children}di</div>
    // </div>
  );
}
