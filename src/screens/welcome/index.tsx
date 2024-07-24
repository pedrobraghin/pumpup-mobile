import { StepperBar } from '@/components';
import { StepOne, StepThree, StepTwo } from './components';
import { SafeAreaView } from 'react-native-safe-area-context';

export function WelcomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StepperBar screens={[StepOne, StepTwo, StepThree]} />
    </SafeAreaView>
  )
}