import userImage from './exampleImg.jpg';

export const Data = {
  'UserTrainings': [
    {id: '1', name: 'triceps', duration: 25, type: 'strength'},
    {id: '2', name: 'Chest&Biceps', duration: 60, type: 'strength'},
    {id: '3', name: 'Cardio', duration: 30, type: 'cardio'},
  ],
  'UserDetailsAccount': {
    profileImage: userImage,
    name: 'Jan Kowalski',
    weight: '90 kg',
    height: '188 cm',
    age: '23',
    gender: 'Man',
  },
  'UserDetailsEditAccount': {
    profileImage: userImage,
    name: 'Jan Kowalski',
    weight: '90 kg',
    height: '188 cm',
    age: '23',
    gender: 'Man',
    email: 'sampleEmail@example.com',
  }
}