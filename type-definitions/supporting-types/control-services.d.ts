export default interface ControlServices {
  getMemoryInfo({mode}: { mode?: string }): Promise<any>;
  getRpcInfo(): Promise<any>;
  help({command}: { command?: string }): Promise<any>;
  logging({includeCategories, excludeCategories}: { includeCategories?: Array<string>, excludeCategories: Array<string> }): Promise<any>;
  stop(): Promise<any>;
  uptime(): Promise<any>;
}