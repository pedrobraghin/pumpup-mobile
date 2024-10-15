import { Text, TouchableOpacity, View } from 'react-native';
import {
  GestureDetector,
  Gesture,
  Directions,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { SerieProps } from '../types';
import { Selector } from '../../../../../components/selector';
import { clearInput } from '../../../utils';
import { useCallback, useMemo, useState } from 'react';
import { Checkbox, SimpleInput } from '@/components';
import {
  deleteSerieContainer,
  exerciseSerieStyles,
  inputStyles,
  placeholderColor,
  rootContainer,
  selectorContainerStyles,
} from './styles';
import { useTranslation } from 'react-i18next';
import { getSelectorData } from './conts';

const START = 64;

export function Serie({
  id,
  previousWeight,
  serieNumber,
  finalized: initialFinalized = false,
  repetitions: initialRepetitions,
  weight: initialWeight,
  type,
  handleFinalize,
  handleChangeWeight,
  handleChangeRepetitions,
  handleSetType,
  handleDeleteSerie,
}: Readonly<SerieProps>) {
  const position = useSharedValue(0);
  const { t } = useTranslation('training');

  const data = useMemo(() => getSelectorData(t), []);
  const initalSelectorData = useMemo(() => {
    return data.find((data) => data.value === type) ?? data[0];
  }, []);
  const [weight, setWeight] = useState(initialWeight.toString());
  const [repetitions, setRepetitions] = useState(initialRepetitions.toString());
  const [finalized, setFinalized] = useState(initialFinalized);

  const handleInputChange = useCallback(
    (value: string, type: 'weight' | 'repetitions') => {
      const cleanValue = clearInput(value);

      if (type === 'weight') {
        handleChangeWeight(cleanValue);
        setWeight(cleanValue.toString());
      } else {
        handleChangeRepetitions(cleanValue);
        setRepetitions(cleanValue.toString());
      }
    },
    [handleChangeWeight, handleChangeRepetitions]
  );

  const handleCheckboxChange = useCallback(
    (value: boolean) => {
      setFinalized(value);
      handleFinalize(value);
    },
    [handleFinalize]
  );

  const handleSelect = useCallback(
    (type: string) => {
      handleSetType(type);
    },
    [handleSetType]
  );

  const handleDelete = useCallback(() => {
    handleDeleteSerie(id);
  }, []);

  const panGestureLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      position.value = withSpring(-START, { duration: 200 });
    });

  const panGestureRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      position.value = withSpring(0, { duration: 200 });
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  return (
    <GestureDetector
      gesture={Gesture.Exclusive(panGestureLeft, panGestureRight)}
    >
      <View style={rootContainer.container}>
        <TouchableOpacity
          style={deleteSerieContainer.container}
          onPress={handleDelete}
        >
          <Text style={deleteSerieContainer.text}>
            {t('exercise.serie.foreground_label')}
          </Text>
        </TouchableOpacity>
        <Animated.View style={[exerciseSerieStyles.container, animatedStyles]}>
          <Text style={exerciseSerieStyles.text}>{serieNumber}</Text>

          <View style={selectorContainerStyles.container}>
            <Selector
              onSelect={handleSelect}
              data={data}
              initalState={initalSelectorData}
            />
          </View>

          <Text style={exerciseSerieStyles.text}>{previousWeight}</Text>

          <SimpleInput
            placeholder="0"
            value={weight}
            onChangeText={(text) => handleInputChange(text, 'weight')}
            style={inputStyles.container}
            placeholderTextColor={placeholderColor}
            keyboardType="decimal-pad"
          />

          <SimpleInput
            placeholder="0"
            value={repetitions}
            onChangeText={(text) => handleInputChange(text, 'repetitions')}
            style={inputStyles.container}
            placeholderTextColor={placeholderColor}
            keyboardType="decimal-pad"
          />

          <View style={exerciseSerieStyles.checkBoxContainer}>
            <Checkbox onChangeValue={handleCheckboxChange} value={finalized} />
          </View>
        </Animated.View>
      </View>
    </GestureDetector>
  );
}
