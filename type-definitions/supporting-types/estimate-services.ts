export default interface EstimateServices {
  estimateSmartFee({confTarget, estimateMode}: { confTarget: number, estimateMode?: string }): Promise<any>;
}