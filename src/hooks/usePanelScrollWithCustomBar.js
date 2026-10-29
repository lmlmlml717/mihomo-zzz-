
import { useEffect, useRef } from 'react';


export default function usePanelScrollWithCustomBar(
  { hoverAreaRef, panelRef, railRef, barRef },
  { depsKey, linePx = 16, routeAllWheel = true } = {}
) {
  const lockedRef = useRef(false);
  const pageScrollYRef = useRef(0);

  const lockBody = () => {
    if (lockedRef.current) return;
    lockedRef.current = true;
    pageScrollYRef.current = window.scrollY || window.pageYOffset || 0;
    document.body.style.top = `-${pageScrollYRef.current}px`;
    document.body.classList.add('lock-scroll');
  };

  const unlockBody = () => {
    if (!lockedRef.current) return;
    lockedRef.current = false;
    document.body.classList.remove('lock-scroll');
    document.body.style.top = '';
    window.scrollTo(0, pageScrollYRef.current);
  };

  useEffect(() => {
    const hover = hoverAreaRef.current;
    if (!hover) return;

    const onEnter = () => lockBody();
    const onLeave = () => unlockBody();

    hover.addEventListener('mouseenter', onEnter);
    hover.addEventListener('mouseleave', onLeave);

    const onTouchStart = () => lockBody();
    const onTouchEnd = (e) => {
      if (!hover.contains(e.target)) unlockBody();
    };
    hover.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd);

    return () => {
      hover.removeEventListener('mouseenter', onEnter);
      hover.removeEventListener('mouseleave', onLeave);
      hover.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
      unlockBody();
    };
  }, [depsKey, hoverAreaRef.current]);

  useEffect(() => {
    const hover = hoverAreaRef.current;
    const panel = panelRef.current;
    if (!hover || !panel) return;

    const normDeltaY = (e) => {
      if (e.deltaMode === 1) return e.deltaY * linePx;             
      if (e.deltaMode === 2) return e.deltaY * panel.clientHeight;  
      return e.deltaY;                                             
    };

   const onHoverWheel = (e) => {
      if (!lockedRef.current) return;
      if (!routeAllWheel) return; 
      e.preventDefault();
      e.stopPropagation();
      const dy = normDeltaY(e);
      panel.scrollTop += dy;
    };

    const onWindowWheelBlock = (e) => {
      if (!lockedRef.current) return;
      if (!hover.contains(e.target)) e.preventDefault();
    };

    hover.addEventListener('wheel', onHoverWheel, { passive: false });
    window.addEventListener('wheel', onWindowWheelBlock, { passive: false });

    return () => {
      hover.removeEventListener('wheel', onHoverWheel);
      window.removeEventListener('wheel', onWindowWheelBlock);
    };
  }, [depsKey, hoverAreaRef.current, panelRef.current, routeAllWheel, linePx]);

  useEffect(() => {
    const panel = panelRef.current;
    const rail = railRef.current;
    const bar = barRef.current;
    if (!panel || !rail || !bar) return;

    const updateBar = () => {
      const railH = rail.clientHeight;
      const { scrollTop, scrollHeight, clientHeight } = panel;
      if (scrollHeight <= clientHeight) {
        bar.style.display = 'none';
        return;
      }
      bar.style.display = 'block';
      const barH = Math.max((clientHeight / scrollHeight) * railH, 20);
      const maxT = railH - barH;
      const top = maxT * (scrollTop / (scrollHeight - clientHeight));
      bar.style.height = `${barH}px`;
      bar.style.transform = `translateY(${top}px)`;
    };

    const ro = new ResizeObserver(updateBar);
    ro.observe(panel);
    const content = panel.firstElementChild; // -view
    if (content) ro.observe(content);

    panel.addEventListener('scroll', updateBar, { passive: true });
    window.addEventListener('resize', updateBar, { passive: true });

    queueMicrotask(updateBar);

    return () => {
      ro.disconnect();
      panel.removeEventListener('scroll', updateBar);
      window.removeEventListener('resize', updateBar);
    };
  }, [depsKey, panelRef.current, railRef.current, barRef.current]);

  useEffect(() => {
    const rail = railRef.current;
    const bar = barRef.current;
    const panel = panelRef.current;
    if (!rail || !bar || !panel) return;

    let dragging = false;
    let dragStartY = 0;
    let barStartTop = 0;

    const onBarMouseDown = (e) => {
      dragging = true;
      dragStartY = e.clientY;
      const m = new DOMMatrixReadOnly(getComputedStyle(bar).transform);
      barStartTop = m.m42 || 0;
      e.preventDefault();
      lockBody();
    };

    const onMouseMove = (e) => {
      if (!dragging) return;
      const railH = rail.clientHeight;
      const barH = bar.clientHeight;
      const maxT = railH - barH;
      let nextT = barStartTop + (e.clientY - dragStartY);
      nextT = Math.max(0, Math.min(maxT, nextT));
      bar.style.transform = `translateY(${nextT}px)`;
      const ratio = maxT ? nextT / maxT : 0;
      panel.scrollTop = ratio * (panel.scrollHeight - panel.clientHeight);
    };

    const onMouseUp = () => {
      dragging = false;
    };

    const onRailClick = (e) => {
      if (e.target === bar) return;
      const rect = rail.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const barH = bar.clientHeight;
      const railH = rail.clientHeight;
      const top = Math.max(0, Math.min(railH - barH, clickY - barH / 2));
      bar.style.transform = `translateY(${top}px)`;
      const ratio = (railH - barH) ? top / (railH - barH) : 0;
      panel.scrollTop = ratio * (panel.scrollHeight - panel.clientHeight);
    };

    bar.addEventListener('mousedown', onBarMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    rail.addEventListener('mousedown', onRailClick);

    return () => {
      bar.removeEventListener('mousedown', onBarMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      rail.removeEventListener('mousedown', onRailClick);
    };
  }, [depsKey, railRef.current, barRef.current, panelRef.current]);

   useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const SCROLL_KEYS = new Set(['Space', 'PageDown', 'PageUp', 'Home', 'End', 'ArrowUp', 'ArrowDown']);

    const onKeydown = (e) => {
      if (!lockedRef.current) return;
      if (!SCROLL_KEYS.has(e.code) && !SCROLL_KEYS.has(e.key)) return;
      e.preventDefault();
      const step = 60;
      switch (e.key) {
        case 'ArrowDown': panel.scrollTop += step; break;
        case 'ArrowUp': panel.scrollTop -= step; break;
        case 'PageDown': panel.scrollTop += panel.clientHeight; break;
        case 'PageUp': panel.scrollTop -= panel.clientHeight; break;
        case 'Home': panel.scrollTop = 0; break;
        case 'End': panel.scrollTop = panel.scrollHeight; break;
        case ' ': panel.scrollTop += e.shiftKey ? -panel.clientHeight : panel.clientHeight; break;
        default: break;
      }
    };

    window.addEventListener('keydown', onKeydown, { passive: false });
    return () => window.removeEventListener('keydown', onKeydown);
  }, [depsKey, panelRef.current]);

  return { unlockBody };
}