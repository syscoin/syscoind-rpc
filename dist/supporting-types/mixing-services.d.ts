export default interface MixingServices {
    resetMixing(): Promise<any>;
    startMixing(): Promise<any>;
    stopMixing(): Promise<any>;
}