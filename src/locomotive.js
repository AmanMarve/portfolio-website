import LocomotiveScroll from 'locomotive-scroll';

export const initLocomotiveScroll = (containerRef, options) => {
  if (!containerRef.current) return null;

  const scroll = new LocomotiveScroll({
    el: containerRef.current,
    smooth: true,
    ...options,
  });

  return scroll;
};
