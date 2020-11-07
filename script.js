let isValid = (s) => {
    $(s).addClass("is-valid");
    $(s).removeClass("is-invalid");
}
let isInvalid = (s) => {
    $(s).addClass("is-invalid");
    $(s).removeClass("is-valid");
}
let dNone = (s) => {
    $(s).addClass("d-none");
    $(s).removeClass("d-block");
}
let dBlock = (s) => {
    $(s).addClass("d-block");
    $(s).removeClass("d-none");
}
let clear = (s) => {
    $(s).val("")
}
$("#lugar").on("change", function () {
    if (this.value === "1") {
        getLastId(this.value);
        isValid("#lugar");
    } else if (this.value === "2") {
        getLastId(this.value);
        isValid("#lugar");
    } else {
        isInvalid("#lugar");
    }
})
$("#dni").keyup(function () {
    if (this.value.substr(-1) !== "_" && this.value !== "") {
        isValid("#dni");
    } else {
        clear("#nombresApellidos")
        isInvalid("#dni");
    }
})

$("#nombresApellidos").keyup(function () {
    if (this.value !== "") {
        isValid("#nombresApellidos");
    } else {
        isInvalid("#nombresApellidos");
    }
})

let getLastId =(selectId)=> {
    let settings = {
        "url": "http://localhost:8000/lugar.json",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (r) {
        r.forEach((l)=>{
            console.log(l.id);
            if (l.id == selectId) {
                $("#lastId").html("lastId: "+l.lastId)
            }
        });
    },selectId);
}

