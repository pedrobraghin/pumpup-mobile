import React from 'react';
import { SectionList } from 'react-native';
import { SectionHeader, ListItemSeparator, ListItem } from '@/components';
import { ListItemProps } from '@/components/list-item/types';
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '@/constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useProfileListHandlers } from '../../hooks';
import { useTranslation } from 'react-i18next';

export function ProfileList() {
  const { t } = useTranslation('profile');
  const iconSize = 20;
  const iconColor = Colors.black;

  const handlers = useProfileListHandlers();

  return (
    <SectionList<ListItemProps>
      sections={[
        {
          title: t('section_1.title'),
          data: [
            {
              title: t('section_1.row_1'),
              onPress: handlers.handleUpdateProfile,
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
              title: t('section_1.row_2'),
              onPress: handlers.handleUserData,
              leftIcon: (
                <Entypo name="database" size={iconSize} color={iconColor} />
              ),
            },
          ],
        },
        {
          title: t('section_2.title'),
          data: [
            {
              title: t('section_2.row_1'),
              onPress: handlers.handleChangeLanguage,
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
              title: t('section_2.row_2'),
              onPress: handlers.handleChangeUnitsOfMeasurement,
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
          title: t('section_3.title'),
          data: [
            {
              title: t('section_3.row_1'),
              onPress: handlers.handleOpenInstagram,
              leftIcon: (
                <AntDesign name="instagram" size={iconSize} color={iconColor} />
              ),
            },
            {
              title: t('section_3.row_2'),
              onPress: handlers.handleOpenWebsite,
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
          title: t('section_4.title'),
          data: [
            {
              title: t('section_4.row_1'),
              onPress: handlers.handleOpenTermsNPolitics,
              leftIcon: (
                <AntDesign name="filetext1" size={iconSize} color={iconColor} />
              ),
            },
            {
              title: t('section_4.row_2'),
              onPress: handlers.handleReportBug,
              leftIcon: <Entypo name="bug" size={iconSize} color={iconColor} />,
            },
          ],
        },
        {
          title: t('section_5.title'),
          data: [
            {
              title: t('section_5.row_1'),
              onPress: handlers.handleLogout,
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
