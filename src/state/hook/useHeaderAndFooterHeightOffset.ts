import { useEffect, useState } from "react";
import { APPLICATION_DIMENSION } from "../../constant";
import { useWindowBreakpoint } from "./useWindowBreakpoint";

const useHeaderAndFooterHeightOffset = () => {
  const [headerAndFooterHeightOffset, setHeaderAndFooterHeightOffset] =
    useState(0);
  const { isMobile } = useWindowBreakpoint();

  useEffect(() => {
    const offset = isMobile
      ? APPLICATION_DIMENSION.HEADER_HEIGHT_MOBILE +
        APPLICATION_DIMENSION.FOOTER_HEIGHT
      : APPLICATION_DIMENSION.HEADER_HEIGHT_DESKTOP +
        APPLICATION_DIMENSION.FOOTER_HEIGHT;

    setHeaderAndFooterHeightOffset(offset);
  }, [isMobile]);

  return headerAndFooterHeightOffset;
};

export { useHeaderAndFooterHeightOffset };
