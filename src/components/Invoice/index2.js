[
  {
    id: "f5cd0955-3926-4f91-a7aa-d711671caa1c",
    invoiceNumber: "I5tC9460",
    customerRef: {
      id: "ebb40f36-365d-4f56-96da-731166437a54",
      companyName: "Coy Cormier",
    },
    salesOrderRefs: [],
    issueDate: "2021-11-14T06:02:35",
    dueDate: "2022-01-13T06:02:35",
    modifiedDate: "2022-10-21T12:58:56Z",
    sourceModifiedDate: "2021-10-30T15:53:35",
    paidOnDate: "2022-10-20T09:28:59",
    currency: "GBP",
    currencyRate: 1,
    lineItems: [
      {
        description:
          "Back Inlet Roddable Gully 90° Outlet Rectangular Grid x7.85",
        unitAmount: 95.08,
        quantity: 7.85,
        subTotal: 746.38,
        taxAmount: 74.64,
        totalAmount: 821.02,
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
          id: "6",
        },
        trackingCategoryRefs: [],
        isDirectIncome: false,
      },
      {
        description: "Aluminium Silt Bucket x3.02",
        unitAmount: 171.21,
        quantity: 3.02,
        subTotal: 517.05,
        taxAmount: 51.71,
        totalAmount: 568.76,
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
          id: "00491160-6ee5-4d76-9f34-998f00687481",
        },
        trackingCategoryRefs: [],
        isDirectIncome: false,
      },
    ],
    paymentAllocations: [
      {
        payment: {
          id: "9a5f8adf-0827-4638-9f44-e09bf4bc65dd",
          note: "1010 demo",
          accountRef: {
            id: "72df89d2-512b-4455-af51-a6b563733842",
            name: "Sales",
          },
          currency: "GBP",
          currencyRate: 1,
          paidOnDate: "2022-10-20T09:28:59",
          totalAmount: 1389.78,
        },
        allocation: {
          currency: "GBP",
          currencyRate: 1,
          totalAmount: -1010,
        },
      },
    ],
    withholdingTax: [
      {
        name: "Royalties",
        amount: 55.59,
      },
    ],
    totalDiscount: 0,
    subTotal: 1263.43,
    additionalTaxAmount: 0,
    additionalTaxPercentage: 0,
    totalTaxAmount: 126.35,
    totalAmount: 1389.78,
    amountDue: 1334.19,
    discountPercentage: 0,
    status: "Draft",
    metadata: {
      isDeleted: false,
    },
  },
];
