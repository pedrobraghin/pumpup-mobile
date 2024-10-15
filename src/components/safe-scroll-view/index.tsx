import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeScrollViewProps } from './types';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Header } from '../header';

export function SafeScrollView({
  showHeader,
  children,
  headerProps,
  contentContainerStyle,
  scrollContainerStyle,
}: Readonly<SafeScrollViewProps>) {
  return (
    <SafeAreaView style={styles.container}>
      {showHeader && <Header {...headerProps} />}
      <ScrollView
        style={[styles.scrollContainer, scrollContainerStyle]}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
