import React, { useState } from "react";
import { Col, Row, Input } from "antd";
import Table from "ant-responsive-table"
import axios from "axios";
import { columns } from "./helpers/columns";
import { useSearchInTable } from "./helpers/useSearchInTable";
import "antd/dist/antd.min.css";

const { Search } = Input;

const fetchUsers = async () => {
  const { data } = await axios.get(
    "https://unicomer-nest.herokuapp.com/clients/"
    // "http://localhost:4000/clients"
  );
  return { data }
}

export default function App() {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = useSearchInTable({
    searchVal,
    retrieve: fetchUsers
  });

  return (
    <>
      <Row justify="center">
        <h1>Buscador UNICOMER</h1>
      </Row>
      <Row justify="start" style={{ margin: "20px" }}>
        <Col span={4}>
          <Search
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Buscar"
            enterButton
            style={{
              position: "sticky",
              top: "0",
              left: "0",
              width: "200px",
              marginTop: "2vh"
            }}
          />
        </Col>
      </Row>

      <Row style={{ margin: "20px" }}>
        <Col span={24}>
          <Table
            antTableProps={{
              showHeader: true,
              rowKey: "id",
              columns,
              dataSource: filteredData,
              loading,
              pagination: {
                defaultCurrent: 1,
                pageSize: 10
              }
            }}
            mobileBreakPoint={768}
          />
        </Col>
      </Row>
    </>
  );
}
