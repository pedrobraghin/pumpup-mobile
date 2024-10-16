import { useCallback } from 'react';
import { Text, FlatList, View } from 'react-native';

import { styles } from './styles';
import { useNavigation } from '@/hooks';
import { setLanguage } from '@/utils';
import { ListItem, ListItemSeparator, SafeView } from '@/components';
import { languageSelectorData } from '@/components/language-selector/data';

export function ChangeLanguageScreen() {
  const { back } = useNavigation();

  const handleSelectLanguage = useCallback((lang: string) => {
    setLanguage(lang);
    back();
  }, []);

  return (
    <SafeView safeContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Selecione o idioma desejado</Text>
        <FlatList
          data={languageSelectorData}
          renderItem={({ item }) => (
            <ListItem
              leftIcon={item.icon}
              title={item.label}
              onPress={() => handleSelectLanguage(item.value)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </SafeView>
  );
}
