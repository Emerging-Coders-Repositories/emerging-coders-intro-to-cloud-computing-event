classes = [
    {id: 1, name: "Intro to Computer Programming", number: 110, department: "Computer Science", instructor: "Bain", meets: "MWF", time: "10 - 10:50"},
    {id: 2, name: "Fundamentals of Computer Programming 1", number: 111, department: "Computer Science", instructor: "Sood", meets: "MWF", time: "11 - 11:50"},
    {id: 3, name: "Fundamentals of Computer Programming 1.5", number: 150, department: "Computer Science", instructor: "Kurdia", meets: "MWF", time: "11: 11:50"},
    {id: 4, name: "Fundamentals of Computer Programming 2", number: 211, department: "Computer Science", instructor: "Hummel", meets: "TuTh", time: "9:30 - 10:50"},
    {id: 5, name: "Data Structures and Algorithms", number: 214, department: "Computer Science", instructor: "Bhagavatula", meets: "TuTh", time: "11 - 12:20"},
    {id: 6, name: "Intro to Computer Systems", number: 213, department: "Computer Science", instructor: "Ghena", meets: "TuTh", time: "2 - 3:20"},
    {id: 7, name: "Mathematical Foundations of Computer Science Part 1: Discrete mathematics for computer science", number: 212, department: "Computer Science", instructor: "Evert", meets: "MWF", time: "3-3:50"},
];

class ClassesController {
    show(req, res) {
        const classNumber = req.params.number; 
        const classInfo = classes.find((c) => c.number == classNumber);
        res.json(classInfo); 
    }

    addCourse(req, res) {
        const newCourse = req.body;
        classes.push(newCourse);
        console.log(classes)
        res.status(201).send(newCourse);
    }

    updateCourse(req, res) {
        const courseID = parseInt(req.params.id); 
        const course = classes.find((c) => c.id == courseID);
        course.name = req.body.name;
        course.number = req.body.number;
        course.department = req.body.department;
        course.instructor = req.body.instructor;
        course.meets = req.body.meets;
        course.time = req.body.time;
        console.log(classes); 
        res.status(200).send(course);
    }
};

module.exports = ClassesController; 