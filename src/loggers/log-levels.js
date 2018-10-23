import * as bunyan from "bunyan";

const LOG_LEVELS = {
    debug: bunyan.DEBUG,
    error: bunyan.ERROR,
    info: bunyan.INFO,
    silent: 'silent',
    trace: bunyan.TRACE,
    warn: bunyan.WARN,
};

export default LOG_LEVELS;