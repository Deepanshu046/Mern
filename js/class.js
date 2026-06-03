class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`Name = ${this.name}\nEmail = ${this.email}`);
    }
}

class Admin extends User {
    editData() {
        this.viewData();
    }
}

let user1 = new User(
    "Deepanshu",
    "deepanshupandey046@gmail.com"
);

let user2 = new Admin(
    "Admin",
    "admin@gmail.com"
);

user1.viewData();

user2.editData();