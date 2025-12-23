import agent from "./agent.js";

function report() {
    return {
        id : "1",
        date :new Date().toDateString(),
        content : "string",
        agentId : agent.agent().id
    }
}

export default {
    report
}

console.log(report())