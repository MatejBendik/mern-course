exports.getDate = function (){       // the date module now exports a function getDate, module is an object

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}


exports.getDay = function (){        // the date module now exports a function getDay, module is an object

    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}
