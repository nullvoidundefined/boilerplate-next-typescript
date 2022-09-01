import { useEffect, useState } from "react";
import { DIMENSION } from "../../constant";
import { useWindowBreakpoint } from "./useWindowBreakpoint";

const useHeaderHeightOffset = () => {
    const [headerHeightOffset, setHeaderHeightOffset] = useState(0);
    const { isMobile } = useWindowBreakpoint();

    useEffect(() => {
        const offset = isMobile
            ? DIMENSION.HEADER_HEIGHT_MOBILE
            : DIMENSION.HEADER_HEIGHT_DESKTOP;

        setHeaderHeightOffset(offset);
    }, [isMobile]);

    return headerHeightOffset;
};

export { useHeaderHeightOffset };
