import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { human } from 'react-native-typography';
// import Animated, { Extrapolate } from 'react-native-reanimated';

const JobFieldsCircle = ({ icon, label, index, selected = false, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(index)}
      style={{
        width: 180,
        height: 180,
        backgroundColor: selected ? '#855AF2' : '#fff',
        elevation: 0,
        borderRadius: 180,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (index % 3) * 40 + 180 * Math.floor(index / 3),
        left: (index % 3) * 180,
        transform: [
          {
            translateX: 50 * (index / 3),
          },
        ],
      }}
    >
      <View style={{ alignItems: 'center' }}>
        {icon}
        <Text style={{ color: selected ? '#fff' : '#314061' }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const categories = [
  {
    label: 'Web Design',
    icon: (color = 'black') => (
      <Ionicons name="md-browsers" size={32} color={color} />
    ),
  },
  {
    label: 'Graphic Design',
    icon: (color = 'black') => (
      <FontAwesome5 name="pencil-ruler" size={24} color={color} />
    ),
  },
  {
    label: 'Web Developer',
    icon: (color = 'black') => (
      <MaterialIcons name="web" size={32} color={color} />
    ),
  },
  {
    label: 'Mobile Developer',
    icon: (color = 'black') => <Entypo name="mobile" size={32} color={color} />,
  },
  {
    label: 'Devops Engineer',
    icon: (color = 'black') => (
      <MaterialCommunityIcons name="docker" size={34} color={color} />
    ),
  },
  {
    label: 'Scrum Master',
    icon: (color = 'black') => (
      <Ionicons name="ios-person" size={32} color={color} />
    ),
  },
  {
    label: 'UI/UX Engineer',
    icon: (color = 'black') => (
      <MaterialCommunityIcons
        name="ruler-square-compass"
        size={32}
        color={color}
      />
    ),
  },
  {
    label: 'UI Developer',
    icon: (color = 'black') => (
      <MaterialCommunityIcons name="responsive" size={32} color={color} />
    ),
  },
  {
    label: 'Backend Developer',
    icon: (color = 'black') => (
      <FontAwesome5 name="server" size={24} color={color} />
    ),
  },
];

const JobsField = () => {
  const [selection, setSelection] = useState([]);
  const select = (i) => {
    setSelection((prev) =>
      prev.includes(i) ? prev.filter((item) => item !== i) : [...prev, i],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingHorizontal: 24,
          marginTop: 32,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#E5EAEF',
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            marginRight: 32,
          }}
        >
          <Ionicons name="ios-arrow-back" size={20} color="black" />
        </View>
        <Text style={[human.title3, styles.inter, { fontWeight: '700' }]}>
          Find a Job
        </Text>
        <View></View>
      </View>
      <View style={{ paddingHorizontal: 24, marginVertical: 32 }}>
        <Text style={[human.title1, styles.inter, { fontWeight: '700' }]}>
          Choose your cateogries
        </Text>
        <Text style={[human.body, styles.inter, { marginVertical: 8 }]}>
          Choose a maximum of 5 cateogries for best suggestions
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          height: 800,
          width: '100%',
        }}
      >
        <View style={{ width: 700, height: 600 }}>
          {categories.map((data, index) => (
            <JobFieldsCircle
              label={data.label}
              icon={data.icon(selection.includes(index) ? '#fff' : '#855AF2')}
              index={index}
              key={index}
              selected={selection.includes(index)}
              onPress={(i) => select(i)}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 64,
          width: '100%',
          paddingHorizontal: 24,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: '#FB8700',
            paddingVertical: 20,
            alignItems: 'center',
            borderRadius: 12,
          }}
        >
          <Text
            style={[human.title2White, styles.inter, { fontWeight: '700' }]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    overflow: 'hidden',
  },
  inter: {
    fontFamily: 'Inter',
  },
});

export default JobsField;
