import { set, sub } from 'date-fns';
import { faker } from '@faker-js/faker';

const NOTIFICATIONS = [
  {
    id: faker.datatype.uuid(),
    title: '000055',
    description: 'Materiel en panne',
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: '000059',
    description: 'Materiel-3 fixé',
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: '000068   ',
    description: 'Materiel-2 en panne',
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: '000090    ',
    description: 'sent from Guido Padberg',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title: 'Processing',
    description: 'Your order is being proccessed',
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
];
export default NOTIFICATIONS;
