function sum(a: number, b: number): number {
    return a + b;
}

const sumArrow = (a: number, b: number): number => {
    return a + b;
}

function product(a: number, b?: number, base: number = 5): number {
    return a * base;
}

const result = product(5, 10);

console.log(result);

interface Dwarf {
    character: string;
    health: number;
    skills: string[];
    showHealth: () => void;
}

function heal(character: Dwarf, healX: number): void {

    character.health += healX;
}

const Dwarf: Dwarf = {
    character: 'Warren',
    health: 50,
    skills: ['Bash', 'Counter', 'Healing'],
    showHealth() {
        console.log("Health of " + this.character + ": " + this.health);
    }
}

heal(Dwarf, 20);

Dwarf.showHealth();