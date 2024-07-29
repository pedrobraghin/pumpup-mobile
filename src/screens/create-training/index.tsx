import { useCallback, useReducer, useState } from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Input, PrimaryButton, SafeView, WeekdaySelector } from '@/components'

import { styles } from './styles'
import { errorsInitialState, errorsReducer, validate, ErrorsActions } from './utils'
import { mappedWeekdays } from '@/components/weekday-selector/consts'

export function CreateTrainingScreen() {
  const { t } = useTranslation('create_training')

  const [errors, dispatch] = useReducer(errorsReducer, errorsInitialState)
  const [weekday, setWeekday] = useState<string>('')
  const [name, setName] = useState<string>('')

  const handleContinue = useCallback(() => {
    dispatch({ type: ErrorsActions.RESET_ERRORS })

    const validationResult = validate(name, weekday)

    if (validationResult.name || validationResult.weekday) {
      return dispatch({ type: ErrorsActions.SET_ERRORS, payload: validationResult })
    }

    const day = mappedWeekdays[weekday];
    // to-do call api
  }, [weekday, name])

  return (
    <SafeView
      showHeader
      headerProps={{
        showBackButton: true,
      }}
    >
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>
            {t('page_title')}
          </Text>
          <Input
            placeholder={t('placeholder')}
            label={t('input_label')}
            hasError={errors.name}
            error={t('input_error_message')}
            onChangeText={setName}
          />
          <WeekdaySelector
            onSelect={setWeekday}
            error={t('weekday_selector_error_message')}
            hasError={errors.weekday}
          />
        </View>
        <PrimaryButton title={t('primary_button')} onPress={handleContinue} />
      </View>
    </SafeView>
  )
}