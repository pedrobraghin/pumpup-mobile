import React from 'react';
import { Alert, SectionList } from 'react-native';
import { ListItem } from '../list-item';
import { SectionHeader } from '../section-header';
import { ListItemSeparator } from '../list-item-separador';
import { ListItemProps } from '../list-item/types';
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '@/constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

// const { signOut } = useAuth();
export function ProfileList() {
  const iconSize = 20;
  const iconColor = Colors.black;

  return (
    <SectionList<ListItemProps>
      sections={[
        {
          title: 'Seus dados',
          data: [
            {
              title: 'Atualizar perfil',
              onPress: () => Alert.alert('Atualizar perfil'),
              leftIcon: (
                <MaterialCommunityIcons
                  name="account-edit"
                  size={iconSize}
                  color={iconColor}
                />
              ),
              rightIcon: (
                <Entypo
                  name="chevron-right"
                  size={iconSize}
                  color={iconColor}
                />
              ),
            },
            {
              title: 'Dados do usuário',
              onPress: () => Alert.alert('Dados do usuário'),
              leftIcon: (
                <Entypo name="database" size={iconSize} color={iconColor} />
              ),
            },
          ],
        },
        {
          title: 'Preferências',
          data: [
            {
              title: 'Idioma',
              onPress: () => Alert.alert('Idioma'),
              rightIcon: (
                <Entypo
                  name="chevron-right"
                  size={iconSize}
                  color={iconColor}
                />
              ),
              leftIcon: (
                <Entypo name="language" size={iconSize} color={iconColor} />
              ),
            },
            {
              title: 'Unidades de medida',
              onPress: () => Alert.alert('Unidades de medida'),
              rightIcon: (
                <Entypo
                  name="chevron-right"
                  size={iconSize}
                  color={iconColor}
                />
              ),
              leftIcon: (
                <Entypo name="ruler" size={iconSize} color={iconColor} />
              ),
            },
          ],
        },
        {
          title: 'Nossas redes',
          data: [
            {
              title: 'Instagram da Pumpup',
              onPress: () => Alert.alert('Instagram da Pumpup'),
              leftIcon: (
                <AntDesign name="instagram" size={iconSize} color={iconColor} />
              ),
            },
            {
              title: 'Site da Pumpup',
              onPress: () => Alert.alert('Site da Pumpup'),
              leftIcon: (
                <MaterialCommunityIcons
                  name="web"
                  size={iconSize}
                  color={iconColor}
                />
              ),
            },
          ],
        },
        {
          title: 'Apoio e sobre',
          data: [
            {
              title: 'Termos e políticas',
              onPress: () => Alert.alert('Termos e políticas'),
              leftIcon: (
                <AntDesign name="filetext1" size={iconSize} color={iconColor} />
              ),
            },
            {
              title: 'Reportar um bug',
              onPress: () => Alert.alert('Reportar um bug'),
              leftIcon: <Entypo name="bug" size={iconSize} color={iconColor} />,
            },
          ],
        },
        {
          title: 'Sessão',
          data: [
            {
              title: 'Sair',
              onPress: () => Alert.alert('Sair'),
              leftIcon: (
                <MaterialIcons
                  name="logout"
                  size={iconSize}
                  color={iconColor}
                />
              ),
            },
          ],
        },
      ]}
      renderItem={({ item }) => <ListItem {...item} />}
      renderSectionHeader={({ section }) => (
        <SectionHeader title={section.title} />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      keyExtractor={(item) => item.title}
    />
  );
}

export default React.memo(ProfileList);
