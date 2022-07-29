import * as React from 'react';
import { useRef, useState } from 'react';
import styles from './tooltip.module.scss';

type propType = {
  text: string,
  children: React.ReactNode | string
}

const Tooltip = (props: propType) => {
  const [hoverState, changeHoverState] = useState(false);
  const [coords, updateCoords] = useState([0, 0]);

  const tooltipRef = useRef();

  const onHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>):null => {
    try {
      changeHoverState(true); // show tooltip first
      // get computed width of tooltip
      const tooltipWidth = parseInt(window.getComputedStyle(tooltipRef.current).width, 10);
      if (e.pageX < window.innerWidth - tooltipWidth - 40) {
        updateCoords([e.pageX, e.pageY]);
      } else { // if mouse close to window border
        // move tooltip to other side of mouse
        updateCoords([e.pageX - tooltipWidth + 40, e.pageY]);
      }
    } catch (err) { return null; } // Catch errors when ref.current is null
    return null;
  };

  const onLeave = () => {
    changeHoverState(false);
  };

  return (
    <div onMouseMove={onHover} onMouseLeave={onLeave} style={{ width: '100%' }}>
      {hoverState && <div ref={tooltipRef} className={styles.tooltip} style={{
        top: coords[1],
        left: coords[0],
      }}>{props.text}</div>}
      {props.children}
    </div>
  );
};

export default Tooltip;
