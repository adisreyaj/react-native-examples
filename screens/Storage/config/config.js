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
    consumed: 10,
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
