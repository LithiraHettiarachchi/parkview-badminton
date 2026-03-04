import { Session } from '@/lib/types';

export const mockSessions: Session[] = [
    {
        id: 'mock-sunday-1',
        day: 'Sunday',
        time: '19:00',
        location: 'Main Court, Parkview Sports Center',
        courts: 4,
        maxAttendees: 24,
        currentAttendees: 18,
        price: 8.50,
        available: true,
        date: '2024-12-15',
        title: 'Sunday Badminton Session',
        description: 'Join us for our popular Sunday evening session! Perfect for intermediate players looking to enjoy competitive games in a friendly atmosphere. We have 4 courts available with experienced players and a welcoming community.',
        imageUrl: '/sessions/sunday-session.jpg',
        duration: '2 hours',
        level: 'Intermediate',
        includes: [
            'Access to 4 badminton courts',
            'Shuttlecocks provided',
            'Organized games with fair rotation',
            'Friendly and supportive environment'
        ]
    },
    {
        id: 'mock-tuesday-1',
        day: 'Tuesday',
        time: '20:00',
        location: 'Main Court, Parkview Sports Center',
        courts: 4,
        maxAttendees: 24,
        currentAttendees: 20,
        price: 8.50,
        available: true,
        date: '2024-12-17',
        title: 'Tuesday Badminton Session',
        description: 'Mid-week badminton session perfect for staying active! Our Tuesday sessions are great for improving your skills while enjoying social badminton. All intermediate players welcome.',
        imageUrl: '/sessions/tuesday-session.jpg',
        duration: '2 hours',
        level: 'Intermediate',
        includes: [
            'Access to 4 badminton courts',
            'Shuttlecocks provided',
            'Skill development opportunities',
            'Social and competitive play'
        ]
    },
    {
        id: 'mock-thursday-1',
        day: 'Thursday',
        time: '19:30',
        location: 'Main Court, Parkview Sports Center',
        courts: 4,
        maxAttendees: 24,
        currentAttendees: 15,
        price: 8.50,
        available: true,
        date: '2024-12-19',
        title: 'Thursday Badminton Session',
        description: 'End your week strong with our Thursday badminton session! Great opportunity to practice and play with regular members. Coaches available for tips when time allows.',
        imageUrl: '/sessions/thursday-session.jpg',
        duration: '2 hours',
        level: 'Intermediate',
        includes: [
            'Access to 4 badminton courts',
            'Shuttlecocks provided',
            'Optional coaching tips',
            'Fun and energetic atmosphere'
        ]
    },
    {
        id: 'mock-sunday-2',
        day: 'Sunday',
        time: '19:00',
        location: 'Main Court, Parkview Sports Center',
        courts: 4,
        maxAttendees: 24,
        currentAttendees: 22,
        price: 8.50,
        available: true,
        date: '2024-12-22',
        title: 'Sunday Badminton Session',
        description: 'Weekly Sunday evening session for badminton enthusiasts. Join a vibrant community of players who share a passion for the sport. Limited spots remaining!',
        imageUrl: '/sessions/sunday-session.jpg',
        duration: '2 hours',
        level: 'Intermediate',
        includes: [
            'Access to 4 badminton courts',
            'Shuttlecocks provided',
            'Fair game rotation system',
            'Community-focused environment'
        ]
    },
    {
        id: 'mock-tuesday-2',
        day: 'Tuesday',
        time: '20:00',
        location: 'Main Court, Parkview Sports Center',
        courts: 4,
        maxAttendees: 24,
        currentAttendees: 16,
        price: 8.50,
        available: true,
        date: '2024-12-24',
        title: 'Tuesday Badminton Session',
        description: 'Christmas Eve special session! Keep your fitness up during the holidays with great badminton and festive vibes. All welcome!',
        imageUrl: '/sessions/tuesday-session.jpg',
        duration: '2 hours',
        level: 'Intermediate',
        includes: [
            'Access to 4 badminton courts',
            'Shuttlecocks provided',
            'Festive atmosphere',
            'Holiday special session'
        ]
    },
    {
        id: 'mock-thursday-2',
        day: 'Thursday',
        time: '19:30',
        location: 'Main Court, Parkview Sports Center',
        courts: 4,
        maxAttendees: 24,
        currentAttendees: 19,
        price: 8.50,
        available: true,
        date: '2024-12-26',
        title: 'Thursday Badminton Session',
        description: 'Boxing Day special! Work off those holiday calories with an energetic badminton session. Perfect way to stay active during the festive season.',
        imageUrl: '/sessions/thursday-session.jpg',
        duration: '2 hours',
        level: 'Intermediate',
        includes: [
            'Access to 4 badminton courts',
            'Shuttlecocks provided',
            'Post-holiday workout',
            'Friendly competition'
        ]
    }
];
