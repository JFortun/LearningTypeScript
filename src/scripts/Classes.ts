class CitizenRegistry {
    constructor(
        public nameFull: string,
        public address: string
    ) {}
}

class Citizen extends CitizenRegistry {
    //private name: string;
    //public age: number;
    //static city: string;

    constructor(
        public name: string,
        public age: number,
        public city: string
    ) {
        super(name, 'Main St');
    }
}

const John = new Citizen('John', 35, 'Madrid');
