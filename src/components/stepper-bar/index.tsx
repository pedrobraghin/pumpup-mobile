import { useCallback, useState } from 'react'
import { StepperBarProps } from './types'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'

export function StepperBar({ screens, initialIndex = 0, showButtonOnFirstScreen = false }: Readonly<StepperBarProps>) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(initialIndex)
  const { t } = useTranslation('stepper_bar');

  const previousScreen = useCallback(() => {
    if (activeScreenIndex === 0) {
      return
    }

    setActiveScreenIndex(prevState => prevState - 1)
  }, [activeScreenIndex])

  const nextScreen = useCallback(() => {
    if (activeScreenIndex === screens.length - 1) {
      return
    }

    setActiveScreenIndex(prevState => prevState + 1)
  }, [screens.length]);

  const renderPreviousButton = useCallback(() => {
    if (!showButtonOnFirstScreen && activeScreenIndex === 0) {
      return null
    }

    return (
      <TouchableOpacity onPress={previousScreen}
        style={styles.leftbutton}
      >
        <Text
          style={styles.buttonText}
        >{t('left_button_title')}</Text>
      </TouchableOpacity>
    )

  }, [showButtonOnFirstScreen, activeScreenIndex, previousScreen, t]);

  const renderNextButton = useCallback(() => {
    if (activeScreenIndex === screens.length - 1) {
      return null;
    }

    return (
      <TouchableOpacity onPress={nextScreen}
        style={styles.rightButton}
      >
        <Text
          style={styles.buttonText}
        >{t('right_button_title')}</Text>
      </TouchableOpacity>
    )
  }, [activeScreenIndex, screens.length, nextScreen, t]);

  const renderScreen = useCallback(() => {
    const Screen = screens[activeScreenIndex];
    return <Screen />
  }, [screens, activeScreenIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>
      <View
        style={styles.buttonsContainer}
      >
        {renderPreviousButton()}
        {renderNextButton()}
      </View>
    </View>
  )
}