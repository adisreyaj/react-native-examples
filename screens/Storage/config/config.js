import React from 'react';
import { Entypo } from '@expo/vector-icons';

export const storageTheme = {
  primary: '#36868E',
  accent: '#F3C143',
  bg: '#edeff7',
  textDark: '#636567',
  textLight: '#838383',
};

export const driveData = [
  {
    id: 1,
    name: 'Google Drive',
    logo: require('../../../assets/storage/google-drive.png'),
    consumed: 12,
    total: 15,
    selected: true,
  },
  {
    id: 2,
    name: 'Dropbox',
    logo: require('../../../assets/storage/dropbox.png'),
    consumed: 75,
    total: 100,
    selected: false,
  },
  {
    id: 3,
    name: 'OneDrive',
    logo: require('../../../assets/storage/onedrive.png'),
    consumed: 2,
    total: 10,
    selected: false,
  },
  {
    id: 4,
    name: 'Box',
    logo: require('../../../assets/storage/box.png'),
    consumed: 1,
    total: 5,
    selected: false,
  },
];

export const folderData = [
  {
    id: 1,
    icon: <Entypo name="folder-images" size={40} color={storageTheme.primary} />,
    title: 'Images',
    meta: 'Created 04/2020',
  },
  {
    id: 2,
    icon: <Entypo name="folder-music" size={40} color={storageTheme.primary} />,
    title: 'Music',
    meta: 'Created 02/2020',
  },
  {
    id: 3,
    icon: <Entypo name="folder-video" size={40} color={storageTheme.primary} />,
    title: 'Video',
    meta: 'Created 06/2020',
  },
  {
    id: 4,
    icon: <Entypo name="folder" size={40} color={storageTheme.primary} />,
    title: 'Document',
    meta: 'Created 03/2020',
  },
];
