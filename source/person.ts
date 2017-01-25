class Person { 
    Name: string;
    constructor(private firstname: string, private lastname: string) { 

        this.Name = firstname + ' ' + lastname;
    }

    greet() { 
        return 'Welcome ' + this.Name; 
    }
}