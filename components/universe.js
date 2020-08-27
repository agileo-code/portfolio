/* eslint-disable react/destructuring-assignment */
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const calc = (currentTarget, x, y) => [
  x - (currentTarget.offsetLeft + currentTarget.clientWidth / 2),
  y - (currentTarget.offsetTop + currentTarget.clientHeight / 2)
];
const trans1 = (x, y) => `translate3d(${x / 100}vmin,${y / 100}vmin,0)`;
const trans2 = (x, y) => `translate3d(${x / 80 - 10}vmin,${y / 80 - 20}vmin,0)`;
const trans4 = (x, y) => `translate3d(${x / 35}vmin,${y / 35}vmin,0)`;

function Universe() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onMouseMove={event =>
        set({
          xy: calc(event.currentTarget, event.clientX, event.clientY)
        })
      }
    >
      <World style={{ transform: props.xy.interpolate(trans1) }} />
      <Clouds style={{ transform: props.xy.interpolate(trans2) }} />
      <Rocket style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
  );
}

export default Universe;

const World = styled(animated.div)`
  position: absolute;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  width: 35vmax;
  height: 35vmax;
  background-image: url(https://www.seekpng.com/png/full/18-189202_planet-svg-emoji-emoji-earth.png);
`;

const Clouds = styled(animated.div)`
  position: absolute;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  width: 15vmax;
  height: 15vmax;
  background-image: url(https://image.flaticon.com/icons/svg/414/414927.svg);
`;

const Rocket = styled(animated.div)`
  position: absolute;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  width: 20vmax;
  height: 20vmax;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/e/e5/Emojione_1F680.svg);
`;
