import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  TouchableOpacity,
  Easing,
  FlatList,
} from 'react-native';
import { human } from 'react-native-typography';
import { storageTheme, driveData } from '../config/config';
import { LinearGradient } from 'expo-linear-gradient';
const StorageMyDrives = () => {
  const scroller = useRef(undefined);
  const scrollX = new Animated.Value(0);

  const [scrollPosition, setScrollPosition] = useState(undefined);
  const animation = Animated.timing(scrollX, {
    toValue: 120,
    duration: 200,
  });
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    if (scroller.current && selected)
      scroller.current.scrollToIndex({
        index: selected - 1,
        animted: true,
        viewOffset: 90,
      });
  }, [selected]);

  // useEffect(() => {
  //   const index = Math.round(scrollPosition / 290);
  //   if (scrollPosition < 100) setSelected(1);
  //   else setSelected(index >= driveData.length ? driveData.length : index + 1);
  // }, [scrollPosition]);

  const changeSelection = (id) => setSelected(id);
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 24 }}>
        <Text
          style={[human.title3, styles.inter, { fontWeight: '700', color: storageTheme.textDark }]}
        >
          My Storage
        </Text>
      </View>
      <FlatList
        style={{ marginTop: 24 }}
        horizontal
        initialScrollIndex={selected}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatList.current?.scrollToIndex({ index: 1, animated: true });
          });
        }}
        onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
        data={driveData}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ref={scroller}
        renderItem={({ item, i }) => (
          <StorageMyDrivesCard
            key={item.id}
            {...item}
            scrollX={scrollX}
            selected={selected === item.id}
            index={i}
            select={changeSelection}
          />
        )}
      />
    </View>
  );
};

export default StorageMyDrives;

const StorageMyDrivesCard = ({
  id,
  name,
  logo,
  consumed,
  total,
  selected = false,
  scrollX,
  select,
}) => {
  const transY = useRef(new Animated.Value(0)).current;
  const animation = Animated.timing(transY, {
    toValue: selected ? 0 : 12,
    duration: 300,
    easing: Easing.bezier(0.17, 0.67, 0.82, 0.98),
  });

  useEffect(() => {
    animation.start();
  }, [selected]);
  return (
    <TouchableOpacity onPress={() => select(id)} activeOpacity={0.9}>
      <Animated.View style={{}}>
        <Animated.View
          style={{
            paddingTop: 16,
            marginBottom: 48,
            marginHorizontal: 16,
            transform: [
              {
                translateY: transY,
              },
            ],
          }}
        >
          <View
            style={[
              styles.card,
              {
                backgroundColor: selected ? storageTheme.accent : storageTheme.bg,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'flex-end',
              },
            ]}
          >
            <View style={{ position: 'absolute', top: 24, right: 24 }}>
              <Text
                style={[
                  human.headline,
                  { fontWeight: '700', color: selected ? '#fff' : storageTheme.textDark },
                ]}
              >
                {consumed}/{total}GB
              </Text>
            </View>

            <View style={{ paddingBottom: 20, paddingHorizontal: 16, width: '100%' }}>
              <Text
                style={[
                  human.title2,
                  {
                    fontWeight: '700',
                    marginBottom: 16,
                    color: selected ? '#fff' : storageTheme.textDark,
                  },
                ]}
              >
                {name}
              </Text>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#fff',
                  height: 18,
                  borderRadius: 20,
                  justifyContent: 'center',
                  paddingHorizontal: 5,
                }}
              >
                <View
                  style={{
                    width: `${(consumed / total) * 100}%`,
                    backgroundColor: storageTheme.accent,
                    height: 8,
                    borderRadius: 20,
                  }}
                ></View>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.cardFolderHeaderExtra,
              { backgroundColor: selected ? storageTheme.accent : storageTheme.bg },
            ]}
          ></View>
          <View
            style={[
              styles.cardFolderHeader,
              { backgroundColor: selected ? storageTheme.accent : storageTheme.bg },
            ]}
          >
            <View style={styles.cardImageContainer}>
              <Image resizeMode="contain" style={styles.cardImage} source={logo} />
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 42,
  },

  inter: {
    fontFamily: 'Inter',
  },

  card: {
    width: 280,
    height: 160,
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  cardImageContainer: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFolderHeaderExtra: {
    position: 'absolute',
    top: 3,
    padding: 16,
    left: 53,
    zIndex: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: 50,
    height: 50,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
  cardFolderHeader: {
    position: 'absolute',
    top: 0,
    padding: 16,
    left: 0,
    borderRadius: 12,
    zIndex: 8,
  },
});