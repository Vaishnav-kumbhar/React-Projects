import { useSpring, animated } from "@react-spring/web";
const Card = ({ children }) => {
  const props = useSpring({
    from: { transform: "translateY(100px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={props} className="card">
      {children}
    </animated.div>
  );
};

export default Card;
