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
    { "studentName" : "Ivan Brown", "age": 27, "university": "Leeds", "taxForUni": 0, "graduated": true, "finalScore": 5 },
    { "studentName" : "John Kenedy", "age": 19, "university": "Leeds", "taxForUni": 1299, "graduated": false, "finalScore": 0 },
    { "studentName" : "Peter Duck", "age": 22, "university": "Manchester", "taxForUni": 3000, "graduated": false, "finalScore": 0 },
    { "studentName" : "Rick Bud", "age": 29, "university": "London", "taxForUni": 0, "graduated": true, "finalScore": 4 },
    { "studentName" : "Erica John", "age": 23, "university": "Leeds", "taxForUni": 800, "graduated": false, "finalScore": 0 } ];

function solve(){    
    // Task 1.

    // console.log(students.filter(x=>x.graduated).length)
    console.log(graduatedStudents(students));
    console.log(average(students));
    console.log(studentsFinalScore(students));
    console.log(studentsAndUnis(students));
    avgUniScore(students);
}

function graduatedStudents(students){
    var counter = 0;
    for(let i = 0; i < students.length; i++){
        if(students[i].graduated){ 
            counter++;
        }
    }
    return counter;
}

//Task 2.
function average(students){
    let sum = 0;
    for(let t = 0; t < students.length; t++){
        if(students[t].taxForUni != 0){        
        sum += students[t].taxForUni;
        }
    }   
    let avg = (sum / students.length);
    return avg.toFixed(2);
}

//Task 3.
function studentsFinalScore(students) {
    for(let f = 0; f < students.length; f++){
        if(students[f].finalScore > 4){
            return students[f].studentName;
        }
    }
}

//Task 4.
function studentsAndUnis(students){
    for(let s = 0; s < students.length; s++){
        if(students[s].graduated){
        console.log(students[s].studentName + ' was studying at in ' + students[s].university + ' university.');
        } else {
            console.log(students[s].studentName + ' is studying at in ' + students[s].university + ' university.');
        }
    }
}

//Task 5.
function avgUniScore(students) {
    let sumScore = 0;
    for(let u = 0; u < students.length; u++){
        if(students[0].university === students[u].university){
            sumScore += students[u].finalScore;
            // console.log(sumScore);
        } else {
        sumScore = students[u].finalScore;
        console.log(students[u].university + ' AVG score is: ' + sumScore);
        }
    }

}

solve();