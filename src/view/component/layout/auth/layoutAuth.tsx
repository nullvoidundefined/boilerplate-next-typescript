import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../state/slice/user";

type LayoutAuthProps = {
  children: ReactNode;
};

const LayoutAuth = ({ children }: LayoutAuthProps) => {
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);
  return (
    <>
      <div>Auth Layout</div>
      <main>{children}</main>
    </>
  );
};

export { LayoutAuth };
