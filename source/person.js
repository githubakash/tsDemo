var Person = (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Name = firstname + ' ' + lastname;
    }
    Person.prototype.greet = function () {
        return 'Welcome ' + this.Name;
    };
    return Person;
}());
