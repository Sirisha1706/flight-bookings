module.exports = {
        'meta':{
              "count": 2
            },
          'data': [ 
                {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "isUpsellOffer": false,
            "lastTicketingDate": "2025-02-08",
            "lastTicketingDateTime": "2025-02-08",
            "numberOfBookableSeats": 7,
            "itineraries": [
                {
                    "duration": "PT4H50M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BLR",
                                "terminal": "2",
                                "at": "2025-02-11T00:55:00"
                            },
                            "arrival": {
                                "iataCode": "SIN",
                                "terminal": "1",
                                "at": "2025-02-11T08:15:00"
                            },
                            "carrierCode": "AI",
                            "number": "392",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT4H50M",
                            "id": "3",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "USD",
                "total": "310.96",
                "base": "205.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "310.96"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "USD",
                        "total": "310.96",
                        "base": "205.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "3",
                            "cabin": "BUSINESS",
                            "fareBasis": "ZA3CWSBL",
                            "brandedFare": "BUSCLAS",
                            "brandedFareLabel": "BUSINESS CLASSIC",
                            "class": "Z",
                            "includedCheckedBags": {
                                "weight": 40,
                                "weightUnit": "KG"
                            },
                            "amenities": [
                                {
                                    "description": "PRE RESERVED SEAT ASSIGNMENT",
                                    "isChargeable": false,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "MEAL SERVICES",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "REFUNDABLE TICKET",
                                    "isChargeable": true,
                                    "amenityType": "BRANDED_FARES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHANGEABLE TICKET",
                                    "isChargeable": true,
                                    "amenityType": "BRANDED_FARES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "UPGRADE",
                                    "isChargeable": true,
                                    "amenityType": "UPGRADES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                    "isChargeable": false,
                                    "amenityType": "BRANDED_FARES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "2",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "isUpsellOffer": false,
            "lastTicketingDate": "2025-02-08",
            "lastTicketingDateTime": "2025-02-08",
            "numberOfBookableSeats": 8,
            "itineraries": [
                {
                    "duration": "PT9H20M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BLR",
                                "terminal": "2",
                                "at": "2025-02-11T19:55:00"
                            },
                            "arrival": {
                                "iataCode": "BOM",
                                "terminal": "2",
                                "at": "2025-02-11T21:50:00"
                            },
                            "carrierCode": "AI",
                            "number": "2864",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H55M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "BOM",
                                "terminal": "2",
                                "at": "2025-02-11T23:30:00"
                            },
                            "arrival": {
                                "iataCode": "SIN",
                                "terminal": "2",
                                "at": "2025-02-12T07:45:00"
                            },
                            "carrierCode": "AI",
                            "number": "342",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT5H45M",
                            "id": "2",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "USD",
                "total": "313.06",
                "base": "205.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "313.06"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "USD",
                        "total": "313.06",
                        "base": "205.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "BUSINESS",
                            "fareBasis": "ZA3CWSBL",
                            "brandedFare": "BUSCLAS",
                            "brandedFareLabel": "BUSINESS CLASSIC",
                            "class": "Z",
                            "includedCheckedBags": {
                                "weight": 40,
                                "weightUnit": "KG"
                            },
                            "amenities": [
                                {
                                    "description": "PRE RESERVED SEAT ASSIGNMENT",
                                    "isChargeable": false,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "MEAL SERVICES",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "REFUNDABLE TICKET",
                                    "isChargeable": true,
                                    "amenityType": "BRANDED_FARES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHANGEABLE TICKET",
                                    "isChargeable": true,
                                    "amenityType": "BRANDED_FARES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "UPGRADE",
                                    "isChargeable": true,
                                    "amenityType": "UPGRADES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                    "isChargeable": false,
                                    "amenityType": "BRANDED_FARES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "2",
                            "cabin": "BUSINESS",
                            "fareBasis": "ZA3CWSBL",
                            "brandedFare": "BUSCLAS",
                            "brandedFareLabel": "BUSINESS CLASSIC",
                            "class": "Z",
                            "includedCheckedBags": {
                                "weight": 40,
                                "weightUnit": "KG"
                            },
                            "amenities": [
                                {
                                    "description": "PRE RESERVED SEAT ASSIGNMENT",
                                    "isChargeable": false,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "MEAL SERVICES",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "REFUNDABLE TICKET",
                                    "isChargeable": true,
                                    "amenityType": "BRANDED_FARES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHANGEABLE TICKET",
                                    "isChargeable": true,
                                    "amenityType": "BRANDED_FARES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "UPGRADE",
                                    "isChargeable": true,
                                    "amenityType": "UPGRADES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                    "isChargeable": false,
                                    "amenityType": "BRANDED_FARES",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
]
}
