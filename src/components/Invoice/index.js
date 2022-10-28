[
  {
    id: "71e61ff6-3bf6-4bdc-bf08-11dcf3bea1ed",
    invoiceNumber: "5Skk5UA0",
    customerRef: {
      id: "22f306df-ec06-4dfc-b62c-780ed31939e8",
      companyName: "Iva Christiansen",
    },
    salesOrderRefs: [],
    issueDate: "2021-09-21T13:00:35",
    dueDate: "2021-09-21T13:00:35",
    modifiedDate: "2022-10-21T12:58:56Z",
    sourceModifiedDate: "2021-09-20T08:00:35",
    paidOnDate: "2021-09-21T13:00:35",
    currency: "GBP",
    currencyRate: 1,
    lineItems: [
      {
        description: "Heavy Duty Hinged Gully Grating x5.98",
        unitAmount: 402.89,
        quantity: 5.98,
        subTotal: 2409.28,
        taxAmount: 240.93,
        totalAmount: 2650.21,
        accountRef: {
          id: "72df89d2-512b-4455-af51-a6b563733842",
          name: "Sales",
        },
        taxRateRef: {
          id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          name: "Sales Tax (10%)",
          effectiveTaxRate: 10,
        },
        itemRef: {
          id: "3abf0883-03f7-44c6-bc15-1372522d25e1",
        },
        trackingCategoryRefs: [],
        isDirectIncome: false,
      },
    ],
    paymentAllocations: [
      {
        payment: {
          id: "3775e568-25f3-4f4f-b198-e82e5106959b",
          note: "Payment against invoice 71e61ff6-3bf6-4bdc-bf08-11dcf3bea1ed",
          reference: "71e61ff6-3bf6-4bdc-bf08-11dcf3bea1ed",
          accountRef: {
            id: "dbcaf288-2b39-4b95-8ab3-42202ab15918",
            name: "Business Current Account",
          },
          currency: "GBP",
          currencyRate: 1,
          paidOnDate: "2021-09-21T13:00:35",
          totalAmount: 2650.21,
        },
        allocation: {
          currency: "GBP",
          currencyRate: 1,
          allocatedOnDate: "2021-09-21T13:00:35",
          totalAmount: -2650.21,
        },
      },
    ],
    withholdingTax: [],
    totalDiscount: 0,
    subTotal: 2409.28,
    additionalTaxAmount: 0,
    additionalTaxPercentage: 0,
    totalTaxAmount: 240.93,
    totalAmount: 2650.21,
    amountDue: 0,
    discountPercentage: 0,
    status: "Paid",
    metadata: {
      isDeleted: false,
    },
  },
];
