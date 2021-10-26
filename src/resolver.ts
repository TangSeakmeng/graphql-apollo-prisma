import { students } from './data/database';

export const resolvers = {

    Student: {
        id: (parent: any, args: any, context: any, info: any) => parent.id,
        email: (parent: any) => parent.email,
        fullName: (parent: any) => parent.fullName,
        dept: (parent: any) => parent.dept,
        enrolled: (parent: any) => parent.enrolled,
    },

    Query: {
        enrollment: (parent: any, args: any) => {
            return students.filter((student) => student.enrolled)
        },
        student: (parent: any, args: any) => {
            return students.find((student) => student.id === Number(args.id))
        },
    },

    Mutation: {
        registerStudent: (parent: any, args: any) => {
            students.push({
                id: students.length + 1,
                email: args.email,
                fullName: args.fullName,
                dept: args.dept,
                enrolled: false,
            })
            return students[students.length - 1]
        },
        enroll: (parent: any, args: any) => {
            const studentToEnroll: any = students.find((student) => student.id === Number(args.id))
            studentToEnroll.enrolled = true
            return studentToEnroll
        },
    },

}