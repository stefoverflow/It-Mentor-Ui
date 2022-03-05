
import { useEffect, useState } from 'react';
import { MAX_MOBILE_SCREEN_WIDTH } from '../constants';

export default function () {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < MAX_MOBILE_SCREEN_WIDTH);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > MAX_MOBILE_SCREEN_WIDTH) {
              setIsMobile(false);
          } else {
              setIsMobile(true);
          }
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      return {
          isMobile,
      };
};