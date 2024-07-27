import { useCallback, useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { RadioButton } from '../radio-button'
import { useTranslation } from 'react-i18next'
import { Weekday, WeekdaySelectorProps } from './types'
import { weekdays } from './consts'

export function WeekdaySelector({
  onSelect,
  error,
  hasError,
}: Readonly<WeekdaySelectorProps>) {
  const { t } = useTranslation('create_train')

  const [weekday, setWeekday] = useState<Weekday | ''>('')

  const handleSelect = useCallback((value: Weekday) => {
    onSelect(value)
    setWeekday(value)
  }, [onSelect])

  const renderButtons = useMemo(() => (
    <View style={styles.weekdaysContainer}>
      {weekdays.map((w) => {
        const label = t(w)
        const value = w

        return (
          <RadioButton
            key={w}
            checked={value === weekday}
            onPress={(text) => handleSelect(text as Weekday)}
            value={value}
            label={label}
          />
        )
      })}
    </View>
  ), [weekday, handleSelect, t])

  const renderErrorMessage = useMemo(() => {
    if (!hasError) return null

    return (
      <Text style={styles.errorMessage}>
        {error}
      </Text>
    )
  }, [hasError, error])

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {t('weekday')}
      </Text>
      {renderButtons}
      {renderErrorMessage}
    </View>
  )
}