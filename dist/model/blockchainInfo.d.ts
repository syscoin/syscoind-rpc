export interface BlockchainInfo {
    chain?: string;
    blocks?: number;
    headers?: number;
    bestblockhash?: string;
    difficulty?: number;
    mediantime?: number;
    verificationprogress?: number;
    initialblockdownload?: boolean;
    chainwork?: string;
    size_on_disk: number;
    pruned?: boolean;
    pruneheight?: number;
    geth_sync_status?: string;
    geth_total_blocks?: number;
    geth_current_block?: number;
    softforks?: Array<any>;
    bip9_softforks?: any;
    warnings?: string;
}
