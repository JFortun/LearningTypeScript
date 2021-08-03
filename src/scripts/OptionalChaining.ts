interface Student {
    name: string;
    subjects?: string[]
}

const student1: Student = {
    name: 'John'
}

const student2: Student = {
    name: 'Mary',
    subjects: ['Math', 'English']
}

function printSubject(student: Student): void {
    const numberSubjects = student.subjects?.length || 0;

    console.log(numberSubjects);
}

printSubject(student1);