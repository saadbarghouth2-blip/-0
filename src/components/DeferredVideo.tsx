import { useEffect, useRef, useState } from 'react';

interface DeferredVideoProps
  extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'children'> {
  src: string;
  type?: string;
  priority?: boolean;
  rootMargin?: string;
}

const DeferredVideo = ({
  src,
  type = 'video/mp4',
  priority = false,
  preload,
  rootMargin = '240px 0px',
  ...props
}: DeferredVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority || shouldLoad) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const element = videoRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [priority, rootMargin, shouldLoad]);

  return (
    <video
      ref={videoRef}
      preload={shouldLoad ? preload ?? 'metadata' : 'none'}
      {...props}
    >
      {shouldLoad && src ? <source src={src} type={type} /> : null}
    </video>
  );
};

export default DeferredVideo;
