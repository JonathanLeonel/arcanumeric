"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function generateUserId(): string {
  return crypto.randomUUID();
}

function getUserId(): string {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = generateUserId();
    localStorage.setItem("userId", userId);
  }
  return userId;
}

export default function UserLoader() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("userId")) return;
    const userId = getUserId();
    router.replace(`/board?userId=${userId}`);
  }, [router, searchParams]);

  if (!searchParams.get("userId")) {
    return null;
  }

  return null;
}
