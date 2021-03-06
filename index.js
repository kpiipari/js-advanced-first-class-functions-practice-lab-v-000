function logDriverNames(drivers) {
    drivers.forEach(driver => console.log(driver.name));
}
let driverTowns = function (town) {
    return driver => {
        if (driver.hometown === town) {
            console.log(driver.name);
        }
    };
};
function logDriversByHometown(drivers, town) {
    drivers.forEach(driver => {
        if (driver.hometown === town) {
            console.log(driver.name);
        }
    });
}
function driversByRevenue(drivers) {
    return drivers.slice().sort((a, b) => a.revenue - b.revenue);
}
function driversByName(drivers) {
    return drivers.slice().sort((a, b) => a.name.localeCompare(b.name));
}
function totalRevenue(drivers) {
    return drivers.map(driver => driver.revenue).reduce((a, b) => {
        return a + b;
    });
}
function averageRevenue(drivers) {
    debugger;
    return totalRevenue(drivers) / drivers.length;
}
//# sourceMappingURL=index.js.map