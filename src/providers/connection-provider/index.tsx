import Colors from '@/constants/Colors';
import { useInternetConnection } from '@/hooks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';
import { Portal, Snackbar } from 'react-native-paper';

export function ConnectionProvider() {
  const { isConnected } = useInternetConnection();
  const [isVisible, setIsVisible] = useState(!isConnected);
  const { t } = useTranslation('connection_snackbar');

  return (
    <Portal>
      <Snackbar
        onDismiss={() => setIsVisible(false)}
        visible={isVisible}
        duration={3500}
        style={styles.snackbar}
      >
        <Text style={styles.snackbarText}>{t('text')}</Text>
      </Snackbar>
    </Portal>
  );
}

const styles = StyleSheet.create({
  snackbar: {
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    bottom: 20,
  },
  snackbarText: {
    color: Colors.black,
  },
});
