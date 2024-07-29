import { SafeAreaView } from 'react-native-safe-area-context'
import { SafeScrollViewProps } from './types'
import { ScrollView } from 'react-native'
import { styles } from './styles'
import { Header } from '../header'

export function SafeScrollView({
  showHeader,
  children,
  headerProps
}: Readonly<SafeScrollViewProps>) {
  return (
    <SafeAreaView style={styles.container}>
      {showHeader && <Header {...headerProps} />}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}