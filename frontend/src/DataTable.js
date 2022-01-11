import {Table} from 'antd'

const dataSource = [
  {
    label: '1',
    yes: 'Mike',
    no: 32,
    precision: '10 Downing Street',
  }
];

const columns = [
  // {
  //   title: '',
  //   dataIndex: 'label',
  //   key: 'label',
  // },
  {
    title: 'Actually No',
    dataIndex: 0,
    key: 'no',
  },
  {
    title: 'Actually Yes',
    dataIndex: 1,
    key: 'yes',
  },
  // {
  //   title: 'Class Precision',
  //   dataIndex: 'precision',
  //   key: 'precision',
  // },
]

const DataTable = ({dataSource}) => {
  return <Table dataSource={dataSource} columns={columns} />;
}

export default DataTable