const EmployeeConst = {
    ec: "Employee code",
    fname: "First Name",
    lname: "Last Name",
    mname: "Middle Name",
    mob: "Mobile Number",
    email: "Email",
    gender: "Gender",
    depart: "Department",
    desi: "Designation",
    report: "Report To",
    location: "Location",
    zone: "Zone",
    vertical: "Vertical",
    pwd: "Password",
    app: "Self appraisal",
    admin: "Admin",
    save: "Save",
    add: "Save & Add",
    hie: "Hierarchy",
    weight: "Weightage",
    pre: "Previous",
    kra: "KRA",
    kpi: "KPI",

}

const kraDrop = [
    "KRA Type 1",
    "KRA Type 2",
    "KRA Type 3",
    "KRA Type 4",
    "KRA Type 5",
];
const gender = ["Male", "Female", "Other"];
const department = ["IT", "Marketing", "Account"];
const designation = ["Software engineer", "UI/UX developer", "Other"];
const employee = ["Hetvi", "Nency", "Jency"];
const location = ["Rajkot", "Surat", "Baroda"];
const code = ["001  Hetvi kanani", "002 Sunil Chauan", "003 Ashish Jain"];
const KRA = ["KRA 1.1", "KRA 1.2", "KRA 1.3"];
const TData = [
    {
        sr: 1,
        kra: "Expansion",
        kpi: "",
        weight: "20",
        score: "4",
    },
    {
        sr: 2,
        kra: "Profitability",
        kpi: "",
        weight: "20",
        score: "5",
    },
    {
        sr: 3,
        kra: "Team Retention till GM Level + Team Engagement",
        kpi: "",
        weight: "30",
        score: "2",
    },
    {
        sr: 4,
        kra: "Safety & Security",
        kpi: "",
        weight: "10",
        score: "2",
    },
    {
        sr: 5,
        kra: "Market Based Innovation",
        kpi: "",
        weight: "20",
        score: "4",
    },
];

const AData = [
    {
        sr: 1,
        empCode: "001 Hetvi Kanani",
        empName: "Hetvi",
        he: "1",
        weights: "30%",
    },
    {
        sr: 2,
        empCode: "002 Sunil Chanun",
        empName: "Sunil",
        he: "2",
        weights: "20%",
    },
    {
        sr: 3,
        empCode: "003 Ashish Jain",
        empName: "Ashish",
        he: "3",
        weights: "50%",
    },
    {
        sr: "",
        empCode: "",
        empName: "",
        he: "",
        weights: "Total 100%",
    },
];
const KRAData = [
    {
        sr: 1,
        kra: "kra 1.1",
        kpi: "kpi 1",
        weights: "30%",
    },
    {
        sr: 2,
        kra: "kra 1.2",
        kpi: "kpi 2",
        weights: "20%",
    }, {
        sr: 3,
        kra: "kra 1.3",
        kpi: "kpi 3",
        weights: "50%",
    },
    {
        sr: "",
        kra: "",
        kpi: "",
        weights: "Total 100%",
    },
];
export { EmployeeConst, kraDrop, gender, department, designation, employee, location, code, TData, AData, KRA, KRAData };