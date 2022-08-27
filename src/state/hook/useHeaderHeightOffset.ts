import { useEffect, useState } from "react";
import { APPLICATION_DIMENSION } from "../../constant";
import { useWindowBreakpoint } from "./useWindowBreakpoint";

const useHeaderHeightOffset = () => {
  const [headerHeightOffset, setHeaderHeightOffset] = useState(0);
  const { isMobile } = useWindowBreakpoint();

  useEffect(() => {
    const offset = isMobile
      ? APPLICATION_DIMENSION.HEADER_HEIGHT_MOBILE
      : APPLICATION_DIMENSION.HEADER_HEIGHT_DESKTOP;

    setHeaderHeightOffset(offset);
  }, [isMobile]);

  return headerHeightOffset;
};

export { useHeaderHeightOffset };
