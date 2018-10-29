export default interface SynchronizationServices {
    resetSync(): Promise<any>;
    status(): Promise<any>;
    updateToNextStep(): Promise<any>;
}