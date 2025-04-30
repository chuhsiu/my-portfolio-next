'use client'
import { useEffect } from 'react';

export function useCloseMenuOnResize() {
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 640px)");
      
      const handleResize = (e: MediaQueryListEvent) => {
        const menu = document.getElementById("menu");
        const menuBtn = document.getElementById("menu-button");
  
        if (e.matches) {
          if (menu?.classList.contains("show")) {
            menu.classList.remove("show");
          }
          if (menuBtn?.classList.contains("open")) {
            menuBtn.classList.remove("open");
          }
        }
      };

      handleResize({ matches: mediaQuery.matches } as MediaQueryListEvent);

      mediaQuery.addEventListener("change", handleResize);
  
      return () => {
        mediaQuery.removeEventListener("change", handleResize);
      };
    }, []);
  }