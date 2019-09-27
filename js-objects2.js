/* SECOND TASK
    If the student has been graduated his taxForUni will be 0 and graduated will be true but finalScore will be from 2 to 6.
    If the student has not been graduated it will have finalScore equal to 0, graduated = false and taxForUni will be a digit which is bigger than 0. 
    
    REQUIREMENTS: Please show in console: 
    1. How many students had been graduated? 
    2. Average taxForUni 
    3. Names to students that have more than 4 as finalScore. 
    4. Name and Uni as ‘Ivan is/was studing in UniName’ 
    5. UniName and Average finalScore 
*/

let students = [
    { "studentName": "Ivan Brown", "age": 27, "university": "Leeds", "taxForUni": 0, "graduated": true, "finalScore": 5 },
    { "studentName": "John Kenedy", "age": 19, "university": "Leeds", "taxForUni": 0, "graduated": true, "finalScore": 2 },
    { "studentName": "Peter Duck", "age": 22, "university": "Manchester", "taxForUni": 3000, "graduated": false, "finalScore": 0 },
    { "studentName": "Rick Bud", "age": 29, "university": "London", "taxForUni": 0, "graduated": true, "finalScore": 4 },
    { "studentName": "Erica John", "age": 23, "university": "Leeds", "taxForUni": 800, "graduated": false, "finalScore": 0 }];

function solve() {
    console.log(graduatedStudents(students));
    console.log('----------------------');
    console.log(average(students));
    console.log('----------------------');
    console.log(studentsFinalScore(students));
    console.log('----------------------');
    studentsAndUnis(students);
    console.log('----------------------');
    avgUniScore(students);
}

// Task 1.
// console.log(students.filter(x=>x.graduated).length)
function graduatedStudents(students) {
    var counter = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].graduated) {
            counter++;
        }
    }
    return counter + ' student/s graduated!';
}


//Task 2.
function average(students) {
    let sum = 0;
    for (let t = 0; t < students.length; t++) {
        if (students[t].taxForUni != 0) {
            sum += students[t].taxForUni;
        }
    }
    let avg = (sum / students.length);
    return 'Average tax for uni is: ' + avg.toFixed(2) + '.';
}

//Task 3.
function studentsFinalScore(students) {
    for (let f = 0; f < students.length; f++) {
        if (students[f].finalScore > 4) {
            return 'Final score more than 4: ' + students[f].studentName;
        }
    }
}


//Task 4.
function studentsAndUnis(students) {
    for (let s = 0; s < students.length; s++) {
        if (students[s].graduated) {
            console.log(students[s].studentName + ' was studying at in ' + students[s].university + ' university.');
        } else {
            console.log(students[s].studentName + ' is studying at in ' + students[s].university + ' university.');
        }
    }
}

//Task 5.
function avgUniScore(students) {
    let unis = [];
    for (let v = 0; v < students.length; v++) {
        if (unis.indexOf(students[v].university) < 0) {
            unis.push(students[v].university);
        }
    }

    for (let n = 0; n < unis.length; n++) {
        let scores = students.filter(x => x.university === unis[n] && x.finalScore != 0).map(s => s.finalScore);
        if (scores.length != 0) {
            let avgScores = scores.reduce((a, b) => a + b) / scores.length;
            console.log(unis[n] + ' : ' + avgScores);
        }
    }
}

solve();