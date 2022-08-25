import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useWindowBreakpoint } from "../../../../state/hook/useWindowBreakpoint";
import { selectUser } from "../../../../state/slice/user";

type LayoutNoAuthProps = {
  children: ReactNode;
};

const LayoutNoAuth = ({ children }: LayoutNoAuthProps) => {
  const router = useRouter();
  const user = useSelector(selectUser);

  const { isMobile } = useWindowBreakpoint();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);
  return (
    <>
      {isMobile ? (
        <>
          <div>Mobile No Auth Header</div>
          <main>{children}</main>
        </>
      ) : (
        <>
          <div>Desktop No Auth Header</div>
          <div className="d-flex">
            <div>Desktop No Auth Sidebar</div>
            <div className="m-3 w-100">
              <main>{children}</main>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { LayoutNoAuth };
