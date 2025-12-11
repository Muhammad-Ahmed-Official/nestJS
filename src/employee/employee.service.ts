import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    // getCategory(){
    //     return ["Mobile", "Laptop", "Tablet"]
    // }

    private student = [
        { id: 1, name: "Ali", age: 12},
        { id: 2, name: "Hamza", age: 21},
    ]

    getAllStudent(){
        return this.student;
    };

    getStudent(id: number){
        const student = this.student.find((s) => s.id === id);
        if(!student) throw new NotFoundException("Student not found!");
        return student;
    };

    createStudent(data: {name: string; age: number}){
        const newStudent = {
            id: Date.now(),
            ...data
        };
        this.student.push(newStudent);
        return newStudent;
    };

    updateStudent(id: number, data: {name: string, age: number}){
        const index = this.student.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException("No data found!");
        this.student[index] = { id, ...data};
        return this.student[index]
    };

    pacthStudet(id: number, data: Partial<{ name: string, age: number}>){
        const index = this.getStudent(id);
        Object.assign(this.student, data);
        return this.student;
    };

    deleteStudent(id:number){
        const index = this.student.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException("No data found!");
        const deleted = this.student.splice(index, 1);
        return { message: "Data deleted", student: deleted[0]}
    }
}
