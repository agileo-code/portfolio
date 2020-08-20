import { useSpring, animated } from 'react-spring';
import styles from './styles.module.css'; // // Icons made by Freepik from www.flaticon.com

const calc = (currentTarget, x, y) => [
  x - (currentTarget.offsetLeft + currentTarget.clientWidth / 2),
  y - (currentTarget.offsetTop + currentTarget.clientHeight / 2)
];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 8 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

function Universe() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
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
        className={styles.card1}
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className={styles.card2}
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className={styles.card4}
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  );
}

export default Universe;
