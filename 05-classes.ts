class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

class Car1 {
    readonly model: string;
    readonly numberOfWheels: number = 4;
    
    constructor(theModel: string) {
        this.model = theModel; // можем перезаписать только в нутри конструктора 
    }
}

class Car2 {
    readonly numberOfWheels: number = 4;
    
    constructor(readonly model: string) {} // typescript сам создаст приватное свойство model
}

//======================

class Animal {
    protected voice: string = "";
    public color: string = "black";

    private go(): void { // доступно только здесь в Animal
        console.log("Go")
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.color = "#fff"; // работает. т.к. свойство публичное
//cat.voice - мы не можем получить доступ к свойству voice 


//=============

abstract class Component {
    abstract render(): void;
    abstract info(): void;
}

class AppComponent extends Component {
    render(): void {

    }

    info(): string {
        return "info";
    }
}