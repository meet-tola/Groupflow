"use client";
import LoadingLogo from "@/components/shared/LoadingLogo";
import { ClerkProvider, useAuth, RedirectToSignIn } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

const InnerConvexProvider = ({ children }: Props) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoadingLogo />;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      {children}
    </ConvexProviderWithClerk>
  );
};

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <InnerConvexProvider>{children}</InnerConvexProvider>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
