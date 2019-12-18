// guards - вспомогательные конструкции, которые позволяют работать с типами 

function strip(x: string | number) {
    if (typeof x === "number") {
        return x.toFixed(2);
    }
    return x.trim();
}

class MyResponse {
    header: string = "response header";
    result: string = "response result";
}

class MyError {
    header: string = "response header";
    message: string = "response message";
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}

// ============

type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {

}

setAlertType("success")
setAlertType("danger")
//setAlertType("xxxx") error