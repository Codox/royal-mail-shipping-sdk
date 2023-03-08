export interface POSTShipmentRequest {
    headers: {
        'X-IBM-Client-Id': string;
        'X-RMG-Auth-Token': string;
    },
    body: {
        'Shipper': {
            'AddressId': string;
            'ShipperReference': string;
            'ShipperReference2': string;
            'ShipperDepartment': string;
            'CompanyName': string;
            'ContactName': string;
            'AddressLine1': string;
            'AddressLine2': string;
            'AddressLine3': string;
            'Town': string;
            'County': string;
            'CountryCode': string;
            'Postcode': string;
            'PhoneNumber': string;
            'EmailAddress': string;
            'VatNumber': string;
        },
        'Destination': {
            'AddressId': string;
            'CompanyName': string;
            'ContactName': string;
            'AddressLine1': string;
            'AddressLine2': string;
            'AddressLine3': string;
            'Town': string;
            'County': string;
            'CountryCode': string;
            'Postcode': string;
            'PhoneNumber': string;
            'EmailAddress': string;
            'VatNumber': string;
        }
        ,
        'ShipmentInformation': {
            'ShipmentDate': string;
            'ServiceCode': string;
            'ServiceOptions': {
                'PostingLocation': string;
                'ServiceLevel': string;
                'ServiceFormat': string;
                'Safeplace': string;
                'SaturdayGuaranteed': boolean;
                'ConsequentialLoss': string;
                'LocalCollect': boolean;
                'TrackingNotifications': string;
                'RecordedSignedFor': boolean;
            },
        }
        'TotalPackages': number;
        'TotalWeight': number;
        'WeightUnitOfMeasure': string;
        'Product': string;
        'DescriptionOfGoods': string;
        'ReasonForExport': string;
        'Value': number;
        'Currency': string;
        'Incoterms': string;
        'LabelFormat': string;
        'SilentPrintProfile': string;
        'ShipmentAction': string;
        'Packages': {
            'PackageOccurrence': number;
            'PackagingId': string;
            'Weight': number;
            'Length': number;
            'Width': number;
            'Height': number;
        }[],
        'Items': {
            'ItemId': string;
            'Quantity': number;
            'Description': string;
            'Value': number;
            'Weight': number;
            'PackageOccurrence': number;
            'HsCode': string;
            'SkuCode': string;
            'ImageUrl': string;
        }[]
    }
}
