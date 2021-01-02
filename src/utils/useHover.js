import { useRef, useState, useEffect } from 'react';

export default function useHover() {
  const [isHovering, setIsHovering] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  useEffect(_ => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return _ => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current] );

  return [ref, isHovering];
}
