interface Human {
    character: string;
    health: number;
    skills: string[];
}

const Human = {
    character: 'John',
    health: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

console.table(Human);