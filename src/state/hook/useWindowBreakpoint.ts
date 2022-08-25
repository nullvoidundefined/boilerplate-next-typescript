import { useEffect, useState } from "react";

import { useWindowSize } from "./useWindowSize";
import { APPLICATION_BREAKPOINT } from "../../constant";
import { ApplicationBreakpoint } from "../../type";

type WindowBreakpointMap = {
  breakpoint: ApplicationBreakpoint | undefined;
  isDesktop: boolean;
  isMobile: boolean;
};

const useWindowBreakpoint = () => {
  const [value, setValue] = useState<WindowBreakpointMap>({
    breakpoint: undefined,
    isDesktop: false,
    isMobile: false,
  });

  const windowSize = useWindowSize();

  const getBreakpointFromWindowWidth = (
    width: number
  ): ApplicationBreakpoint => {
    if (width <= APPLICATION_BREAKPOINT.SMALL) {
      return "small";
    } else if (width <= APPLICATION_BREAKPOINT.MEDIUM) {
      return "medium";
    } else {
      return "large";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const { width } = windowSize;
      const newWindowBreakpoint = getBreakpointFromWindowWidth(width || 0);
      if (newWindowBreakpoint !== value.breakpoint) {
        setValue({
          breakpoint: newWindowBreakpoint,
          isDesktop: ["large"].includes(newWindowBreakpoint),
          isMobile: ["small", "medium"].includes(newWindowBreakpoint),
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [value, windowSize]);

  return value;
};

export { useWindowBreakpoint };
