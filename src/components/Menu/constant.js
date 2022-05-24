import {
  UserOutlined,
  CheckCircleOutlined,
  BookOutlined,
  FileOutlined,
  CalculatorOutlined,
  MenuOutlined,
  ProfileOutlined,
  TeamOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const MenuItem = [
  { name: "Home", icon: <CalculatorOutlined /> },
  { name: "Employee", icon: <BookOutlined /> },
  { name: "Basic Profile", icon: <UserOutlined /> },
  { name: "Master", icon: <CheckCircleOutlined /> },
  { name: "KRA", icon: <AppstoreAddOutlined /> },
  { name: "Report", icon: <BookOutlined /> },
];
const TlItem = [
  {
    name: "Profile",
    icon: <CheckCircleOutlined />,
    suboption: [
      { name: "My Appraisal", icon: <BookOutlined /> },
      { name: "My Profile", icon: <TeamOutlined /> },
    ],
  },
  {
    name: "Appraisal",
    icon: <BookOutlined />,
    suboption: [
      // { name: "Employee", icon: <ProfileOutlined /> },
      { name: "Add Appraisal", icon: <AppstoreAddOutlined /> },
    ],
  },
];
const EmpItem = [
  { name: "My Profile", icon: <CheckCircleOutlined /> },
  { name: "My Appraisal", icon: <BookOutlined /> },
];
export { MenuItem, TlItem, EmpItem };
