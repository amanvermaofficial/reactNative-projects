import { Track } from "react-native-track-player";

export const playListData: Track[] = [
     {
      id: 1,
      title: 'Pyaro Vrindavan',
      artist: 'Shree Indresh Upadhyay',
      album: 'Vrindavan',
      artwork:
        'https://c.saavncdn.com/389/Pyaro-Vrindavan-Hindi-2025-20250414053535-500x500.jpg',
      url: require('./assets/audio/one.mp3'),
    },
    {
      id: 2,
      title: 'Radhika Dulari',
      artist: 'Shree Indresh Upadhyay',
      album: 'Vrindavan',
      artwork:
        'https://c.saavncdn.com/522/Radhika-Dulari-Hindi-2025-20250805053757-500x500.jpg',
      url: require('./assets/audio/two.mp3'),
    },
    {
      id: 3,
      title: 'Joi Joi Pyaro kare',
      artist: 'Shree Harivansh Mahaprabhu',
      album: 'Vrindavan',
      artwork:
        'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/69/b8/51/69b85121-b1ce-44ae-b370-8f97a38196f2/R0003T00019597.jpg/1200x630bb.jpg',
      url: require('./assets/audio/three.mp3'),
    },
]