import { Image, Text, View } from 'react-native';
import { SafeView } from '@/components';
import { useUser } from '@clerk/clerk-expo';
import { styles } from './styles';
import { ProfileList } from './components';

export function ProfileScreen() {
  const { user } = useUser();
  const userProfilePic = user?.hasImage ? user.imageUrl : '';

  return (
    <SafeView safeContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{user?.fullName}</Text>
          <Image style={styles.image} source={{ uri: userProfilePic }} />
        </View>
        <ProfileList />
      </View>
    </SafeView>
  );
}
