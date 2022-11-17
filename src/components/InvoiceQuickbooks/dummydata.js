export const dummydata = [
  {
    QueryResponse: {
      Invoice: [
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "146",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:16-08:00",
            LastUpdatedTime: "2022-11-14T00:46:16-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1039",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "145",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:12-08:00",
            LastUpdatedTime: "2022-11-14T00:46:12-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1038",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "130",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:16:17-07:00",
            LastUpdatedTime: "2021-07-15T13:16:17-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "102",
            },
          ],
          DocNumber: "1037",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "100",
              TxnType: "Estimate",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Rock Fountain",
              Amount: 275,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Fountain Pump",
              Amount: 12.75,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 12.75,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Concrete for fountain installation",
              Amount: 47.5,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "3",
                  name: "Concrete",
                },
                UnitPrice: 9.5,
                Qty: 5,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 335.25,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 26.82,
            TaxLine: [
              {
                Amount: 26.82,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 335.25,
                },
              },
            ],
          },
          CustomerRef: {
            value: "24",
            name: "Sonnenschein Family Store",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "95",
            Line1: "Russ Sonnenschein",
            Line2: "Sonnenschein Family Store",
            Line3: "5647 Cypress Hill Ave.",
            Line4: "Middlefield, CA  94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          ShipAddr: {
            Id: "25",
            Line1: "5647 Cypress Hill Ave.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 362.07,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Familiystore@intuit.com",
          },
          Balance: 362.07,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "129",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:15:36-07:00",
            LastUpdatedTime: "2021-07-15T13:15:36-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "105",
            },
          ],
          DocNumber: "1036",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Sod",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "14",
                  name: "Sod",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "2 cubic ft. bag",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "15",
                  name: "Soil",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Weekly Gardening Service",
              Amount: 87.5,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 25,
                Qty: 3.5,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "4",
              LineNum: 4,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "5",
              LineNum: 5,
              Description: "Fountain Pump",
              Amount: 15,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 15,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 477.5,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "94",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 477.5,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 477.5,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "96",
          SyncToken: "1",
          MetaData: {
            CreateTime: "2021-07-14T13:30:49-07:00",
            LastUpdatedTime: "2021-07-15T13:13:33-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "101",
            },
          ],
          DocNumber: "1031",
          TxnDate: "2021-04-30",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "128",
              TxnType: "Payment",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Weekly Gardening Service",
              Amount: 90,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 30,
                Qty: 3,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 365,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 22,
            TaxLine: [
              {
                Amount: 22,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 275,
                },
              },
            ],
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "84",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-05-30",
          TotalAmt: 387,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 0,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "146",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:16-08:00",
            LastUpdatedTime: "2022-11-14T00:46:16-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1039",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "145",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:12-08:00",
            LastUpdatedTime: "2022-11-14T00:46:12-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1038",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "130",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:16:17-07:00",
            LastUpdatedTime: "2021-07-15T13:16:17-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "102",
            },
          ],
          DocNumber: "1037",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "100",
              TxnType: "Estimate",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Rock Fountain",
              Amount: 275,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Fountain Pump",
              Amount: 12.75,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 12.75,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Concrete for fountain installation",
              Amount: 47.5,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "3",
                  name: "Concrete",
                },
                UnitPrice: 9.5,
                Qty: 5,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 335.25,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 26.82,
            TaxLine: [
              {
                Amount: 26.82,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 335.25,
                },
              },
            ],
          },
          CustomerRef: {
            value: "24",
            name: "Sonnenschein Family Store",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "95",
            Line1: "Russ Sonnenschein",
            Line2: "Sonnenschein Family Store",
            Line3: "5647 Cypress Hill Ave.",
            Line4: "Middlefield, CA  94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          ShipAddr: {
            Id: "25",
            Line1: "5647 Cypress Hill Ave.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 362.07,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Familiystore@intuit.com",
          },
          Balance: 362.07,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "129",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:15:36-07:00",
            LastUpdatedTime: "2021-07-15T13:15:36-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "105",
            },
          ],
          DocNumber: "1036",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Sod",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "14",
                  name: "Sod",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "2 cubic ft. bag",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "15",
                  name: "Soil",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Weekly Gardening Service",
              Amount: 87.5,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 25,
                Qty: 3.5,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "4",
              LineNum: 4,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "5",
              LineNum: 5,
              Description: "Fountain Pump",
              Amount: 15,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 15,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 477.5,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "94",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 477.5,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 477.5,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "96",
          SyncToken: "1",
          MetaData: {
            CreateTime: "2021-07-14T13:30:49-07:00",
            LastUpdatedTime: "2021-07-15T13:13:33-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "101",
            },
          ],
          DocNumber: "1031",
          TxnDate: "2021-04-30",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "128",
              TxnType: "Payment",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Weekly Gardening Service",
              Amount: 90,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 30,
                Qty: 3,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 365,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 22,
            TaxLine: [
              {
                Amount: 22,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 275,
                },
              },
            ],
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "84",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-05-30",
          TotalAmt: 387,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 0,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "146",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:16-08:00",
            LastUpdatedTime: "2022-11-14T00:46:16-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1039",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "145",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:12-08:00",
            LastUpdatedTime: "2022-11-14T00:46:12-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1038",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "130",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:16:17-07:00",
            LastUpdatedTime: "2021-07-15T13:16:17-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "102",
            },
          ],
          DocNumber: "1037",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "100",
              TxnType: "Estimate",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Rock Fountain",
              Amount: 275,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Fountain Pump",
              Amount: 12.75,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 12.75,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Concrete for fountain installation",
              Amount: 47.5,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "3",
                  name: "Concrete",
                },
                UnitPrice: 9.5,
                Qty: 5,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 335.25,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 26.82,
            TaxLine: [
              {
                Amount: 26.82,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 335.25,
                },
              },
            ],
          },
          CustomerRef: {
            value: "24",
            name: "Sonnenschein Family Store",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "95",
            Line1: "Russ Sonnenschein",
            Line2: "Sonnenschein Family Store",
            Line3: "5647 Cypress Hill Ave.",
            Line4: "Middlefield, CA  94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          ShipAddr: {
            Id: "25",
            Line1: "5647 Cypress Hill Ave.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 362.07,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Familiystore@intuit.com",
          },
          Balance: 362.07,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "129",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:15:36-07:00",
            LastUpdatedTime: "2021-07-15T13:15:36-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "105",
            },
          ],
          DocNumber: "1036",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Sod",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "14",
                  name: "Sod",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "2 cubic ft. bag",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "15",
                  name: "Soil",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Weekly Gardening Service",
              Amount: 87.5,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 25,
                Qty: 3.5,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "4",
              LineNum: 4,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "5",
              LineNum: 5,
              Description: "Fountain Pump",
              Amount: 15,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 15,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 477.5,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "94",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 477.5,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 477.5,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "96",
          SyncToken: "1",
          MetaData: {
            CreateTime: "2021-07-14T13:30:49-07:00",
            LastUpdatedTime: "2021-07-15T13:13:33-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "101",
            },
          ],
          DocNumber: "1031",
          TxnDate: "2021-04-30",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "128",
              TxnType: "Payment",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Weekly Gardening Service",
              Amount: 90,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 30,
                Qty: 3,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 365,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 22,
            TaxLine: [
              {
                Amount: 22,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 275,
                },
              },
            ],
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "84",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-05-30",
          TotalAmt: 387,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 0,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "146",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:16-08:00",
            LastUpdatedTime: "2022-11-14T00:46:16-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1039",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "145",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:12-08:00",
            LastUpdatedTime: "2022-11-14T00:46:12-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1038",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "130",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:16:17-07:00",
            LastUpdatedTime: "2021-07-15T13:16:17-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "102",
            },
          ],
          DocNumber: "1037",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "100",
              TxnType: "Estimate",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Rock Fountain",
              Amount: 275,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Fountain Pump",
              Amount: 12.75,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 12.75,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Concrete for fountain installation",
              Amount: 47.5,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "3",
                  name: "Concrete",
                },
                UnitPrice: 9.5,
                Qty: 5,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 335.25,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 26.82,
            TaxLine: [
              {
                Amount: 26.82,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 335.25,
                },
              },
            ],
          },
          CustomerRef: {
            value: "24",
            name: "Sonnenschein Family Store",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "95",
            Line1: "Russ Sonnenschein",
            Line2: "Sonnenschein Family Store",
            Line3: "5647 Cypress Hill Ave.",
            Line4: "Middlefield, CA  94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          ShipAddr: {
            Id: "25",
            Line1: "5647 Cypress Hill Ave.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 362.07,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Familiystore@intuit.com",
          },
          Balance: 362.07,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "129",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:15:36-07:00",
            LastUpdatedTime: "2021-07-15T13:15:36-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "105",
            },
          ],
          DocNumber: "1036",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Sod",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "14",
                  name: "Sod",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "2 cubic ft. bag",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "15",
                  name: "Soil",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Weekly Gardening Service",
              Amount: 87.5,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 25,
                Qty: 3.5,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "4",
              LineNum: 4,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "5",
              LineNum: 5,
              Description: "Fountain Pump",
              Amount: 15,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 15,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 477.5,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "94",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 477.5,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 477.5,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "96",
          SyncToken: "1",
          MetaData: {
            CreateTime: "2021-07-14T13:30:49-07:00",
            LastUpdatedTime: "2021-07-15T13:13:33-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "101",
            },
          ],
          DocNumber: "1031",
          TxnDate: "2021-04-30",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "128",
              TxnType: "Payment",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Weekly Gardening Service",
              Amount: 90,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 30,
                Qty: 3,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 365,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 22,
            TaxLine: [
              {
                Amount: 22,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 275,
                },
              },
            ],
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "84",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-05-30",
          TotalAmt: 387,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 0,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "146",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:16-08:00",
            LastUpdatedTime: "2022-11-14T00:46:16-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1039",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "145",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2022-11-14T00:46:12-08:00",
            LastUpdatedTime: "2022-11-14T00:46:12-08:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
            },
          ],
          DocNumber: "1038",
          TxnDate: "2022-11-14",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Amount: 100,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "1",
                  name: "Services",
                },
                ItemAccountRef: {
                  value: "1",
                  name: "Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Amount: 100,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "1",
            name: "Amy's Bird Sanctuary",
          },
          BillAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "2",
            Line1: "4581 Finch St.",
            City: "Bayshore",
            CountrySubDivisionCode: "CA",
            PostalCode: "94326",
            Lat: "INVALID",
            Long: "INVALID",
          },
          DueDate: "2022-12-14",
          TotalAmt: 100,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          Balance: 100,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "130",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:16:17-07:00",
            LastUpdatedTime: "2021-07-15T13:16:17-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "102",
            },
          ],
          DocNumber: "1037",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "100",
              TxnType: "Estimate",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Rock Fountain",
              Amount: 275,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Fountain Pump",
              Amount: 12.75,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 12.75,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Concrete for fountain installation",
              Amount: 47.5,
              LinkedTxn: [
                {
                  TxnId: "100",
                  TxnType: "Estimate",
                },
              ],
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "3",
                  name: "Concrete",
                },
                UnitPrice: 9.5,
                Qty: 5,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 335.25,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 26.82,
            TaxLine: [
              {
                Amount: 26.82,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 335.25,
                },
              },
            ],
          },
          CustomerRef: {
            value: "24",
            name: "Sonnenschein Family Store",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "95",
            Line1: "Russ Sonnenschein",
            Line2: "Sonnenschein Family Store",
            Line3: "5647 Cypress Hill Ave.",
            Line4: "Middlefield, CA  94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          ShipAddr: {
            Id: "25",
            Line1: "5647 Cypress Hill Ave.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94303",
            Lat: "37.4238562",
            Long: "-122.1141681",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 362.07,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Familiystore@intuit.com",
          },
          Balance: 362.07,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "129",
          SyncToken: "0",
          MetaData: {
            CreateTime: "2021-07-15T13:15:36-07:00",
            LastUpdatedTime: "2021-07-15T13:15:36-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "105",
            },
          ],
          DocNumber: "1036",
          TxnDate: "2021-07-15",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Sod",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "14",
                  name: "Sod",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "2 cubic ft. bag",
              Amount: 50,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "15",
                  name: "Soil",
                },
                UnitPrice: 10,
                Qty: 5,
                ItemAccountRef: {
                  value: "49",
                  name: "Landscaping Services:Job Materials:Plants and Soil",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "3",
              LineNum: 3,
              Description: "Weekly Gardening Service",
              Amount: 87.5,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 25,
                Qty: 3.5,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "4",
              LineNum: 4,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Id: "5",
              LineNum: 5,
              Description: "Fountain Pump",
              Amount: 15,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "11",
                  name: "Pump",
                },
                UnitPrice: 15,
                Qty: 1,
                ItemAccountRef: {
                  value: "79",
                  name: "Sales of Product Income",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 477.5,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TotalTax: 0,
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "94",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-08-14",
          TotalAmt: 477.5,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 477.5,
        },
        {
          AllowIPNPayment: false,
          AllowOnlinePayment: false,
          AllowOnlineCreditCardPayment: false,
          AllowOnlineACHPayment: false,
          domain: "QBO",
          sparse: false,
          Id: "96",
          SyncToken: "1",
          MetaData: {
            CreateTime: "2021-07-14T13:30:49-07:00",
            LastUpdatedTime: "2021-07-15T13:13:33-07:00",
          },
          CustomField: [
            {
              DefinitionId: "1",
              Name: "Crew #",
              Type: "StringType",
              StringValue: "101",
            },
          ],
          DocNumber: "1031",
          TxnDate: "2021-04-30",
          CurrencyRef: {
            value: "USD",
            name: "United States Dollar",
          },
          LinkedTxn: [
            {
              TxnId: "128",
              TxnType: "Payment",
            },
          ],
          Line: [
            {
              Id: "1",
              LineNum: 1,
              Description: "Weekly Gardening Service",
              Amount: 90,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "6",
                  name: "Gardening",
                },
                UnitPrice: 30,
                Qty: 3,
                ItemAccountRef: {
                  value: "45",
                  name: "Landscaping Services",
                },
                TaxCodeRef: {
                  value: "NON",
                },
              },
            },
            {
              Id: "2",
              LineNum: 2,
              Description: "Rock Fountain",
              Amount: 275,
              DetailType: "SalesItemLineDetail",
              SalesItemLineDetail: {
                ItemRef: {
                  value: "5",
                  name: "Rock Fountain",
                },
                UnitPrice: 275,
                Qty: 1,
                ItemAccountRef: {
                  value: "48",
                  name: "Landscaping Services:Job Materials:Fountains and Garden Lighting",
                },
                TaxCodeRef: {
                  value: "TAX",
                },
              },
            },
            {
              Amount: 365,
              DetailType: "SubTotalLineDetail",
              SubTotalLineDetail: {},
            },
          ],
          TxnTaxDetail: {
            TxnTaxCodeRef: {
              value: "2",
            },
            TotalTax: 22,
            TaxLine: [
              {
                Amount: 22,
                DetailType: "TaxLineDetail",
                TaxLineDetail: {
                  TaxRateRef: {
                    value: "3",
                  },
                  PercentBased: true,
                  TaxPercent: 8,
                  NetAmountTaxable: 275,
                },
              },
            ],
          },
          CustomerRef: {
            value: "8",
            name: "0969 Ocean View Road",
          },
          CustomerMemo: {
            value: "Thank you for your business and have a great day!",
          },
          BillAddr: {
            Id: "84",
            Line1: "Sasha Tillou",
            Line2: "Freeman Sporting Goods",
            Line3: "370 Easy St.",
            Line4: "Middlefield, CA  94482",
            Lat: "INVALID",
            Long: "INVALID",
          },
          ShipAddr: {
            Id: "8",
            Line1: "370 Easy St.",
            City: "Middlefield",
            CountrySubDivisionCode: "CA",
            PostalCode: "94482",
            Lat: "37.4031672",
            Long: "-122.0642815",
          },
          SalesTermRef: {
            value: "3",
            name: "Net 30",
          },
          DueDate: "2021-05-30",
          TotalAmt: 387,
          ApplyTaxAfterDiscount: false,
          PrintStatus: "NeedToPrint",
          EmailStatus: "NotSet",
          BillEmail: {
            Address: "Sporting_goods@intuit.com",
          },
          Balance: 0,
        },
      ],
      startPosition: 1,
      maxResults: 5,
      totalCount: 5,
    },
    time: "2022-11-15T20:39:16.259-08:00",
  },
];
