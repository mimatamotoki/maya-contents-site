import { auth } from "../firebase/firebase";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export const useAuthWatching = () => {
  const router = useRouter();

  console.log("Watching....");

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        router.push("/login");
        return;
      }
      if (router.pathname === "/login") {
        router.push("/");
      }
    });
    return () => unSub();
  }, [auth.currentUser]);
};
