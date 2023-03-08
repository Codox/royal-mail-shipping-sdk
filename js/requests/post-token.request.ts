/**
 * Obtain token from the server. Used for authentication in all other requests
 */
export interface POSTTokenRequest {
    headers: {
        "X-IBM-Client-Id": string;
        "X-IBM-Client-Secret": string;
        "X-RMG-Security-Password": string;
        "X-RMG-Security-Username": string;
    };

    body: {};
}
