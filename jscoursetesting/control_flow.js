
let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType ="subscriber";
let userCategory;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
        accessLevel = "Full access granted";
    } else {
        userMessage = "Welcome, User!";
        accessLevel = "Limit access granted";

    }
} else {
    userMessage = "Please log in to access the system.";
    accessLevel = "No access granted";
}
switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory ="Unknown";
}
console.log("Access Level: ",accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
