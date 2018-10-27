export default interface GenerationServices {
    generate({numberOfBlocks, maxTries}: {numberOfBlocks:number,maxTries?:number}) : Promise<any>;
    generateToAddress({numberOfBlocks, address, maxTries}: {numberOfBlocks:number, address:string, maxTries?:number}) : Promise<any>;
}