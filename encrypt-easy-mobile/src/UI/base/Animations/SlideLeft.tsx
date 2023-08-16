import { useEffect, useMemo } from 'react';
import { Animated } from 'react-native';

const SlideLeft = (props: AnimationsProps) => {
  const { children } = props;
  const fadeAnim = useMemo(() => new Animated.ValueXY({ x: 400, y: 0.4 }), []);

  useEffect(() => {
    Animated.timing(fadeAnim.x, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim.y, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        width: '100%',
        transform: [{ translateX: fadeAnim.x }],
        opacity: fadeAnim.y,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default SlideLeft;
