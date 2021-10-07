
export default class Team {
    constructor() {
        this.teamName = 'Example Teamname';
        this.trainer = 'Example trainername';
        this.roster = [];
    };

    describe() {
        console.log('describe');
        return `Team ${this.teamName} with trainer ${this.trainer} has the following pokemon: ${[...this.roster]}`;
    }
}
