interface Rect {
    readonly id: string,
    color?: string, // - не обязательный параметр
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: "1",
    size: {
        width: 100,
        height: 50
    }
};

rect1.color = "#fff";
// rect1.id = "sds";

const rect2 = {} as Rect;
const rect3 = <Rect> {};

//================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect4: RectWithArea = {
    id: "123",
    size: {
        width: 10,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
};

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

// =================
interface Styles {
    [key: string] : string
}

const css: Styles = {
    border: "1px solid red",
    marginTop: "30px"
};