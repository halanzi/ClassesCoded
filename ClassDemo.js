class OrganicCompounds {
    constructor(numberofCarbons, functionalGroup) {
        this.numberofCarbons = numberofCarbons === 1 ? `Meth` : numberofCarbons === 2 ? 'Eth' : numberofCarbons === 3 ? `prop` : numberofCarbons === 4 ? 'but' : undefined;
        this.functionalGroup = functionalGroup === `Alcohol` ? 'anol' : functionalGroup === 'Alkane' ? 'ane' : functionalGroup === 'Alkene' ? 'ene' : undefined;
    }
    manufacturingOrganic = () => {
        console.log(`Hello, this is ${this.numberofCarbons}` + `${this.functionalGroup}`)};
}

class Alcohol extends OrganicCompounds {
    functionalGroup = 'anol'
    manufacturingAlcohol = () => {
        console.log(`Special compound! It is ${this.numberofCarbons}` + `${this.functionalGroup}`);
}
    }
    
class Alkene extends OrganicCompounds {
    numberofCarbons = numberofCarbons === 2 ? 'Eth' : numberofCarbons === 3 ? `prop` : numberofCarbons === 4 ? 'but' : undefined;
    functionalGroup = `Alkene`;
    manufacturingAlkene = () => {
        console.log(`Oh wow, you're a real chemist! It is ${this.numberofCarbons}` + `${this.functionalGroup}`);
}
    }


const methanol = new Alcohol(1);
methanol.manufacturingAlcohol();