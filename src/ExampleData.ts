import userImage from './exampleImg.jpg';

export const Data = {
  'UserTrainings': [
    {id: '1', name: 'triceps', duration: 25, type: 'strength'},
    {id: '2', name: 'Chest&Biceps', duration: 60, type: 'strength'},
    {id: '3', name: 'Cardio', duration: 30, type: 'cardio'},
    {id: '4', name: 'Push', duration: 40, type: 'push'},
    {id: '5', name: 'Pull', duration: 40, type: 'push'},
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
  },
  'UserDetailsHome': {
    profileImage: userImage,
    firstName: 'Jan', 
  }
}