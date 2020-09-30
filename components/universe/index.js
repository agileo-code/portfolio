import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import styles from './styles.module.css'; // // Icons made by Freepik from www.flaticon.com

const calc = (currentTarget, x, y) => [
  x - (currentTarget.offsetLeft + currentTarget.clientWidth / 2),
  y - (currentTarget.offsetTop + currentTarget.clientHeight / 2)
];
const trans1 = (x, y) => `translate3d(${-x / 100}vmin,${-y / 100}vmin,0)`;
const trans2 = (x, y) =>
  `translate3d(${-x / 80 - 10}vmin,${-y / 80 - 20}vmin,0)`;
const trans4 = (x, y) => `translate3d(${-x / 35}vmin,${-y / 35}vmin,0)`;

export default function Universe() {
  const [mobile, setMobile] = useState(false);
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  const { xy } = props;

  useEffect(() => {
    const orientation = window.orientation !== undefined;
    if (orientation) setMobile(orientation);
  }, []);

  return (
    <div
      className={styles.container}
      onMouseMove={event =>
        set({
          xy: calc(event.currentTarget, event.clientX, event.clientY)
        })
      }
    >
      <animated.div
        className={`${styles.card1} ${mobile ? styles.mobile1 : ''}`}
        style={{ transform: xy.interpolate(trans1) }}
      />
      <animated.div
        className={`${styles.card2} ${mobile ? styles.mobile2 : ''}`}
        style={{ transform: xy.interpolate(trans2) }}
      />
      <animated.div
        className={`${styles.card4} ${mobile ? styles.mobile4 : ''}`}
        style={{ transform: xy.interpolate(trans4) }}
      />
    </div>
  );
}
