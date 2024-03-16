let planets = [
    {"name": "P26-007", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P2A-018", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P2A-270", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2A-347", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2A-463", "info": "Neutral", "gate": "Reachable"},
    {"name": "P2A-509", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2C-257", "info": "Friendly", "gate": "Reachable"},
    {"name": "P2M-903", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2R-866", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P2X-338", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2X-374", "info": "Neutral", "gate": "Reachable"},
    {"name": "P2X-416", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P2X-555", "info": "Friendly", "gate": "Reachable"},
    {"name": "P2X-787", "info": "Friendly", "gate": "Reachable"},
    {"name": "P2X-885", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P2X-887", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3A-194", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3C-117", "info": "Neutral", "gate": "Reachable"},
    {"name": "P3C-249", "info": "Neutral", "gate": "Destroyed"},
    {"name": "P3C-599", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3K-447", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3L-997", "info": "Friendly", "gate": "Reachable"},
    {"name": "P3M-736", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3R-112", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3R-118", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3R-233", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3R-272", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3R-636", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3S-114", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3S-452", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3W-451", "info": "Hostile", "gate": "Destroyed"},
    {"name": "P3W-924", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3X-116", "info": "Neutral", "gate": "Reachable"},
    {"name": "P3X-118", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3X-233", "info": "Neutral", "gate": "Reachable"},
    {"name": "P3X-234", "info": "Hostile", "gate": "Destroyed"},
    {"name": "P3X-289", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-298", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-367", "info": "Hostile", "gate": "Destroyed"},
    {"name": "P3X-403", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-421", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-439", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-447", "info": "Friendly", "gate": "Reachable"},
    {"name": "P3X-474", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3X-562", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-584", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-595", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3X-666", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3X-729", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-744", "info": "Neutral", "gate": "Destroyed"},
    {"name": "P3X-775", "info": "Friendly", "gate": "Reachable"},
    {"name": "P3X-797", "info": "Friendly", "gate": "Reachable"},
    {"name": "P3X-8596", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-888", "info": "Hostile", "gate": "Destroyed"},
    {"name": "P3X-984", "info": "unknown", "gate": "Not visited yet"}
    ]

let array = []
let count = planets.length
for (let index = 0; index < planets.length; index++) {
    if (planets[index]["gate"] != "Not visited yet") {
        // console.log(planets[index]["name"])
        array.push(planets[index]["name"])
        count--
    }   
}

console.log("Visited planet: " + array.join(', '));

console.log("SG-1 need to visit " + count + " planets.");

let array1 = []
for (let index = 0; index < planets.length; index++) {
    if (planets[index]["info"] == "Friendly" && planets[index]["gate"] != "Destroyed") {
        array1.push(planets[index]["name"])
  }      
}
console.log("Allies of Earth: " + array1.join(', '));
