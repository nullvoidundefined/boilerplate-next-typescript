import { useEffect, useState } from "react";
import { DIMENSION } from "../../constant";
import { useWindowBreakpoint } from "./useWindowBreakpoint";

const useHeaderAndFooterHeightOffset = () => {
    const [headerAndFooterHeightOffset, setHeaderAndFooterHeightOffset] =
        useState(0);
    const { isMobile } = useWindowBreakpoint();

    useEffect(() => {
        const offset = isMobile
            ? DIMENSION.HEADER_HEIGHT_MOBILE + DIMENSION.FOOTER_HEIGHT
            : DIMENSION.HEADER_HEIGHT_DESKTOP + DIMENSION.FOOTER_HEIGHT;

        setHeaderAndFooterHeightOffset(offset);
    }, [isMobile]);

    return headerAndFooterHeightOffset;
};

export { useHeaderAndFooterHeightOffset };
