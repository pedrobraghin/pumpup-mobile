import { SafeViewProps } from './types';
import { Header } from '../header';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

export function SafeView({
  children,
  headerProps,
  showHeader,
  contentContainerStyle,
  safeContainerStyle,
}: Readonly<SafeViewProps>) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={[{ flex: 1 }, safeContainerStyle]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {showHeader && <Header {...headerProps} />}
        <View style={[styles.contentContainer, contentContainerStyle]}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
