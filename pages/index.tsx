import { Table } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import List from "../components/List";
import { companies } from "../data/mock";

const Home: NextPage = () => {
  const rows = companies.map((company) => (
    <tr key={company.name}>
      <td>{company.name}</td>
      <td>{company.size} people</td>
      <td>{company.location}</td>
      <td>
        <List items={company.markets} />
      </td>
    </tr>
  ));

  return (
    <>
      <Head>
        <title>Aerial Ops Challenge</title>
        <meta name="description" content="Code Challenge from Aerial Ops" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Location</th>
            <th>Markets</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default Home;
