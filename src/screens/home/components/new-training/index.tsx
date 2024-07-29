import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { SquareButton } from '@/components/square-button'
import { PrimaryButton } from '@/components'
import { useCallback } from 'react'
import { useRouter } from 'expo-router'
import { Routes } from '@/@types/routes'

export function NewTraining() {
  const { t } = useTranslation('home')
  const router = useRouter()

  const handleAddNewTraining = useCallback(() => {
    router.push(Routes.createTraining)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.addTrainingContainer}>
        <Text style={styles.label}>
          {t('new_training.label')}
        </Text>
        <SquareButton iconName='plus' onPress={handleAddNewTraining} />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton title={t('new_training.button_text')} />
      </View>
    </View>
  )
}