import { View } from 'react-native';
import {
  FloatActionButton,
  Header,
  NewTraining,
  Trainings,
} from './components';
import { SafeScrollView } from '@/components';
import { styles } from './styles';

export function HomeScreen() {
  return (
    <>
      <SafeScrollView>
        <View style={styles.container}>
          <Header
            username="Pedro Braghin"
            profileImage={'https://github.com/pedrobraghin.png'}
          />
          {/* <EmptyContent /> */}
          <NewTraining />
          <Trainings />
        </View>
      </SafeScrollView>
      <FloatActionButton />
    </>
  );
}
