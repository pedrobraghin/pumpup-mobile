import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { styles } from './styles';
import React, { useCallback, useState } from 'react';
import { SelectorData, SelectorProps } from './types';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '@/constants/Colors';

export function Selector({
  onSelect,
  data,
  initalState,
  withText,
}: Readonly<SelectorProps>) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(initalState);
  const [anim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(anim, {
      toValue: modalVisible ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [modalVisible]);

  const handleSelect = useCallback((item: SelectorData) => {
    onSelect(item.value);
    setSelected(item);
    setModalVisible(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        {selected?.smallIcon || selected?.icon}
        {withText && <Text style={styles.text}>{selected?.text}</Text>}
        <AntDesign name="caretdown" size={8} color={Colors.white} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
        animationType="none"
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <Animated.View
            style={[
              styles.modalContainer,
              {
                opacity: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ]}
          >
            <TouchableWithoutFeedback onPress={handleCloseModal}>
              <View style={styles.modalContent}>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.value}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.item}
                      onPress={() => handleSelect(item)}
                    >
                      {item?.icon}
                      <Text style={styles.itemText}>{item.label}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
