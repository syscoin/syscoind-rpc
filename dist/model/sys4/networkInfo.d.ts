import { NetworkInfoDetails } from "./networkInfoDetails";
export interface NetworkInfo {
    version?: number;
    subversion?: string;
    protocolversion?: number;
    localservices?: string;
    localrelay?: boolean;
    timeoffset?: number;
    networkactive?: boolean;
    connections?: number;
    networks?: Array<NetworkInfoDetails>;
    relayfee?: number;
    localaddresses?: Array<string>;
    warnings?: string;
}
