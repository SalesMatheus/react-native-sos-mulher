interface MessageProps {
    _id: number;
    text: string;
    createdAt: Date;
    user: {
      _id: number;
      name: string;
      avatar: string;
    };
}
export function OrderBot(orderMessages: number){
    let message: MessageProps[] = [];

    switch (orderMessages) {
        case 0:
            message = [
                {
                    _id: 2,
                    text: 'Necessita que uma viatura vá até você?',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Polícia Militar',
                        avatar: 'https://w7.pngwing.com/pngs/261/536/png-transparent-computer-icons-avatar-police-officer-avatar-heroes-fictional-character-army-officer.png',
                    },
                },
            ];
        break;

        case 1:
            message = [
                {
                    _id: 3,
                    text: 'Digite seu nome completo.',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Polícia Militar',
                        avatar: 'https://w7.pngwing.com/pngs/261/536/png-transparent-computer-icons-avatar-police-officer-avatar-heroes-fictional-character-army-officer.png',
                    },
                },
            ];
        break;

        case 2:
            message = [
                {
                    _id: 4,
                    text: 'Digite seu CPF.',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Polícia Militar',
                        avatar: 'https://w7.pngwing.com/pngs/261/536/png-transparent-computer-icons-avatar-police-officer-avatar-heroes-fictional-character-army-officer.png',
                    },
                },
            ];
        break;

        case 3:
            message = [
                {
                    _id: 5,
                    text: 'Digite seu endereço.',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Polícia Militar',
                        avatar: 'https://w7.pngwing.com/pngs/261/536/png-transparent-computer-icons-avatar-police-officer-avatar-heroes-fictional-character-army-officer.png',
                    },
                },
            ];
        break;

        case 4:
            message = [
                {
                    _id: 6,
                    text: 'Uma viatura está se deslocando até você.',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Polícia Militar',
                        avatar: 'https://w7.pngwing.com/pngs/261/536/png-transparent-computer-icons-avatar-police-officer-avatar-heroes-fictional-character-army-officer.png',
                    },
                },
            ];
        break;
        
      }
      return message;
}