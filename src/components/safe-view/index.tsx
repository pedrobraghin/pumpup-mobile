import { SafeViewProps } from './types'
import { Header } from '../header'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'

export function SafeView({
  children,
  headerProps,
  showHeader
}: Readonly<SafeViewProps>) {

  return (
    <SafeAreaView style={styles.container}>
      {showHeader && <Header {...headerProps} />}

      <View style={styles.contentContainer}>
        {children}
      </View>
    </SafeAreaView>
  )
}