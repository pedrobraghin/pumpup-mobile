import { Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated'
import { styles } from './styles'
import { useEffect, useState } from 'react'
import { formatTime } from '@/utils'
import { ExerciseTimerProps } from './types'
import { calculateLayout } from './utils'
import Colors from '@/constants/Colors'
import { getColorBasedOnWidth } from './utils/calculate-color'

export function ExerciseTimer({ time, run, onFinish }: Readonly<ExerciseTimerProps>) {
  const [seconds, setSeconds] = useState(time)
  const viewWidth = useSharedValue(100);
  const [textColor, setTextColor] = useState(Colors.black);

  useEffect(() => {
    if (!run || seconds <= 0) {
      setSeconds(time)
      viewWidth.value = 100;
      setTextColor(Colors.black)
      return
    };

    const interval = setInterval(() => {
      setSeconds(prev => {
        const newSeconds = prev - 1;
        const percent = calculateLayout(newSeconds, time);
        viewWidth.value = withTiming(percent, { duration: 1000, easing: Easing.linear });

        setTextColor(getColorBasedOnWidth(percent));

        if (newSeconds <= 0) {
          onFinish();
          clearInterval(interval);
        }

        return newSeconds;
      })
    }, 1000);

    return () => clearInterval(interval);
  }, [time, run]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: `${viewWidth.value}%`,
    }
  });

  const textStyle = {
    color: textColor,
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.containerBackground, animatedStyles]}
      />
      <Text style={[styles.time, textStyle]}>{formatTime(seconds)}</Text>
    </View>
  )
}
