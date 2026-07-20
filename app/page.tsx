import { Suspense } from "react";
import UserLoader from "./components/UserLoader";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <UserLoader />
    </Suspense>
  );
}
