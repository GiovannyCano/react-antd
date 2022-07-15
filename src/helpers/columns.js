import moment from 'moment';

export const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    sorter: (a, b) => a.firstName.length - b.firstName.length,
    sortDirections: ['descend', 'ascend'],
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    sorter: (a, b) => a.lastName.length - b.lastName.length,
    sortDirections: ['descend', 'ascend'],
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Birthday",
    dataIndex: "birthday",
    key: "birthday",
    sorter: (a, b) => moment(a.birthday).unix() - moment(b.birthday).unix(),
    sortDirections: ['descend', 'ascend'],
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    sorter: (a, b) => a.gender.length - b.gender.length,
    sortDirections: ['descend', 'ascend'],
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    sorter: (a, b) => a.phone - b.phone,
    sortDirections: ['descend', 'ascend'],
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address.localeCompare(b.address),
    sortDirections: ['descend', 'ascend'],
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Profession",
    dataIndex: "profession",
    key: "profession",
    sorter: (a, b) => a.profession.length - b.profession.length,
    sortDirections: ['descend', 'ascend'],
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Incomes",
    dataIndex: "incomes",
    key: "incomes",
    sorter: (a, b) => a.incomes - b.incomes,
    sortDirections: ['descend', 'ascend'],
    showOnResponse: true,
    showOnDesktop: true
  }
];
