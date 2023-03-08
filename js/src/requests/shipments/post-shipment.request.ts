export interface POSTShipmentRequest {
    headers: {
        "X-IBM-Client-Id": string;
        "X-RMG-Auth-Token": string;
    },
    body: {
        "Shipper": {
            "AddressId": string;
            "ShipperReference": string;
            "ShipperReference2": string;
            "ShipperDepartment": string;
            "CompanyName": string;
            "ContactName": string;
            "AddressLine1": string;
            "AddressLine2": string;
            "AddressLine3": string;
            "Town": string;
            "County": string;
            "CountryCode": string;
            "Postcode": string;
            "PhoneNumber": string;
            "EmailAddress": string;
            "VatNumber": string;
        },
        "Destination": {
            "AddressId": string;
            "CompanyName": string;
            "ContactName": string;
            "AddressLine1": string;
            "AddressLine2": string;
            "AddressLine3": string;
            "Town": string;
            "County": string;
            "CountryCode": string;
            "Postcode": string;
            "PhoneNumber": string;
            "EmailAddress": string;
            "VatNumber": string;
        }
        ,
        "ShipmentInformation": {
            "ShipmentDate": string,
            "ServiceCode": string;
        }
    }
}
