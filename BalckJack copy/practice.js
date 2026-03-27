let age = 67

if (age < 6) {
    console.log("Ticket is free")
} else if (age < 18) {
    console.log("Child discount applies")
} else if (age < 27) {
    console.log("Student discount applies")
} else if (age < 67) {
    console.log("Full price applies")
} else {
    console.log("Senior citizen discount applies")
}

console.log(age)