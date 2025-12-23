import agent from "./agent";

function report() {
    return {
        id : id,
        date :new Date(),
        content : content,
        agentId : agent.agent().id
    }
}

export default {
    report
}