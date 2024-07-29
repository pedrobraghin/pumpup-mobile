import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, EmptyContent } from './components';
import { styles } from './styles';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header username='Pedro Braghin' profileImage={"https://github.com/pedrobraghin.png"} />
      <EmptyContent />
    </SafeAreaView>
  )
}