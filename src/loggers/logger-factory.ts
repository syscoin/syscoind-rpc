import DebugLogger from "./debug-logger";
import ErrorLogger from "./error-logger";
import InfoLogger from "./info-logger";
import TraceLogger from "./trace-logger";
import WarnLogger from "./warn-logger";
import SilentLogger from "./silent-logger";
import {createListing} from "./logging-support-methods";
import * as bunyan from "bunyan";
import LOG_LEVELS from "./log-levels";


// Note: right now many of the loggers seem to have duplicated functionality.  This
// will evolve as the SDK evolves into more granularly detailed reporting.
export default class LoggerFactory {
    static createLogger(logLevel, whitelist, blacklist) {
        if (logLevel === 'silent') {
            return new SilentLogger();
        }

        let logger = bunyan.createLogger({
            name: 'syscoin-js',
            level: logLevel
        });
        let listing = createListing(whitelist, blacklist);

        switch(logLevel) {
            case LOG_LEVELS.debug:
                return new DebugLogger(logger.debug.bind(logger), listing);
            case LOG_LEVELS.error:
                return new ErrorLogger(logger.error.bind(logger), listing);
            case LOG_LEVELS.info:
                return new InfoLogger(logger.info.bind(logger), listing);
            case LOG_LEVELS.trace:
                return new TraceLogger(logger.trace.bind(logger), listing);
            case LOG_LEVELS.warn:
                return new WarnLogger(logger.warn.bind(logger), listing);
            default:
                return new ErrorLogger(logger.error.bind(logger), listing);
        }
    }
}