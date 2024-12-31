import { Header } from "./header/header"
import { Main } from "./main/main"
import { useEffect } from "react";
import { setIsMobile } from "../store/is-mobile-store";
export const PageContent=() => {
      useEffect(() => {
          const mediaQuery = window.matchMedia("(max-width: 520px)");
          const handleMediaChange = (e:MediaQueryListEvent) => setIsMobile(e.matches);
          setIsMobile(mediaQuery.matches);
          mediaQuery.addEventListener("change", handleMediaChange);
          return () => mediaQuery.removeEventListener("change", handleMediaChange);
      }, []);
      
  return(
    <>
    <Header/>
    <Main/>
    </>
  )
}
