import { Text, View } from 'react-native'
import { useRouter } from 'expo-router'

import { styles } from './styles'
import { HeaderProps } from './types'
import { BackButton } from './components'
import { useCallback } from 'react'

export function Header({
  right,
  showBackButton = false,
  title,
}: Readonly<HeaderProps>) {
  const router = useRouter()

  const handleGoBack = useCallback(() => {
    if (!router.canGoBack()) return

    router.back()
  }, [router])

  return (
    <View style={styles.container}>
      {showBackButton && (
        <View>
          <BackButton onPress={handleGoBack} />
        </View>
      )}
      {title && (
        <View style={styles.centerContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      )}
      {right && (
        <View>
          {right}
        </View>
      )}
    </View>
  )
}