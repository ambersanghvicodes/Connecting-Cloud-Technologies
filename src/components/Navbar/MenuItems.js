// export const MenuItems = [
//   {
//     title: "Marketing",
//     path: "/marketing",
//     cName: "dropdown-link",
//   },
//   {
//     title: "Consulting",
//     path: "/consulting",
//     cName: "dropdown-link",
//   },
//   {
//     title: "Design",
//     path: "/design",
//     cName: "dropdown-link",
//   },
//   {
//     title: "Development",
//     path: "/development",
//     cName: "dropdown-link",
//   },
// ];

export const MenuItems = [
  {
    title: "SAP Sales",
    path: "/sapsales",
    cName: "dropdown-link",
    child: [
      "C4C Sales",
      "Service Cloud",
      "SAP CPQ",
      "ECC / SAP S4HANA",
      "SAP ABAP",
      "SAP CPI",
      "SAP BRIM",
      "SAP Subscription Billing",
    ],
  },
  {
    title: "Salesforce",
    path: "/salesforce",
    cName: "dropdown-link",
    child: [
      "LWC",
      "Salesforce Admin",
      "Salesforce Development",
      "Marketing Cloud",
      "Salesforce CPQ",
      "Salesforce FSM",
    ],
  },
  {
    title: "Other Technologies",
    path: "/othertechnologies",
    cName: "dropdown-link",
    child: ["Power BI", "Oracle Apps", "RPA", "Oracle EBS"],
  },
];
