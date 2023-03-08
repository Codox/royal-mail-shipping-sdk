/**
 * Obtain token from the server. Used for authentication in all other requests
 *
 * https://developer.royalmail.net/node/1877912 POST /token
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
