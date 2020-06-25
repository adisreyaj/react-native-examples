import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { human } from 'react-native-typography';
import { storageTheme, driveData } from '../config/config';
import { LinearGradient } from 'expo-linear-gradient';
const StorageMyDrives = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 24 }}>
        <Text
          style={[human.title3, styles.inter, { fontWeight: '700', color: storageTheme.textDark }]}
        >
          My Storage
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 24 }}>
        {driveData.map((item) => (
          <StorageMyDrivesCard key={item.id} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default StorageMyDrives;

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

const StorageMyDrivesCard = ({ name, logo, consumed, total, selected = false }) => {
  return (
    <View>
      <View
        style={{
          paddingTop: 16,
          marginBottom: 48,
          marginHorizontal: 16,

          transform: [
            {
              translateY: selected ? 0 : 12,
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
      </View>
    </View>
  );
};
