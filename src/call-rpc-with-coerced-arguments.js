// Most consumers of syscoin-js won't be using "callRpc" directly - that's a power user call.
// However, depending on how the arguments to this call are made, we can run into some problems:
// for example, if you are getting the arguments for callRpc from a GET request, they will all come
// to the RPC in string format.  These calls will fail in situations where the RPC was expected to be
// passed, say, a numeric value or a boolean one.  

// To not pass this argument finangling onto a consumer of the library, this function acts as a proxy to
// the "real" syscoin RPC method and coerces the arguments where appropriate.   
// As there are incredibly few instances at the time of this writing where this would be used (it's
// *highly* unlikely that a user will be setting up a web API where they'll primarily use the callRpc method vs.
// the multitude of direct abstractions provided) we're accepting the potential perf hit from some of the repeated
// arg checks.

// This coerced method also assumes args is an array.


export function callRpcWithCoercedStringArguments(callRpc) {
    // Order important - see below
    let coercers = [new NumericTypeCoercer(), 
                    new BooleanTypeCoercer(), 
                    new JsonObjectTypeCoercer()];

    return async (method, args) => {
        let coercedArgumentArray = args.map((arg) => {
            if (!(typeof arg === 'string' || arg instanceof String)) {
                return arg;  // Not a string, no need to coerce
            }
            // Run through coercers in order of likelihood - if we match one of the types return and
            // don't go through the other checks
            for (let i = 0; i < coercers.length; ++i) {
                if (coercers[i].matchesType(arg)) {
                    return coercers[i].coerce(arg);
                }
            }
            // Sometimes a string is just a string.
            return arg;
        });
        return await callRpc(method, coercedArgumentArray);
    }
} 

class NumericTypeCoercer {
    matchesType(input) {
        return !isNaN(input)
    }

    coerce(input) {
        return +input;
    }
}

class BooleanTypeCoercer {
    matchesType(input) {
        return (input.toLowerCase() === "true" || input.toLowerCase() === "false")
    }

    coerce(input) {
        return input.toLowerCase() === "true"; // We assume this is only getting called if matchesType.
    }
}

class JsonObjectTypeCoercer {
    matchesType(input) {
        try {
            var o = JSON.parse(input);
            return (o && typeof o === "object");
        }
        catch (e) {
            return false;
        }
    }

    coerce(input) {
        return JSON.parse(input);
    }
}