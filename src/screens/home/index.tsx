import React from 'react';
import { View } from 'react-native';
import {
  FloatActionButton,
  Header,
  NewTraining,
  Trainings,
} from './components';
import { SafeScrollView } from '@/components';
import { styles } from './styles';
import { useUser } from '@clerk/clerk-expo';

export function HomeScreen() {
  const { user } = useUser();
  const userProfilePic = user?.hasImage ? user.imageUrl : '';

  return (
    <>
      <SafeScrollView>
        <View style={styles.container}>
          <Header
            username={user?.fullName ?? ''}
            profileImage={userProfilePic}
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
