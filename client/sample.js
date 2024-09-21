
const userID = "pinaki@student.com";

if (userID.includes('admin')) {
    console.log("It's an admin");
} else if (userID.includes('student')) {
    console.log("It's a student");
} else if (userID.includes('teacher')) {
    console.log("It's a mentor");
} else {
    console.log("Wrong credentials");
}
