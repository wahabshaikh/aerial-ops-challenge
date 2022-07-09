import { Table } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const companies = [
    {
      name: "FinStack",
      size: "1-10",
      location: "Bengaluru",
      markets: ["Financial Services", "Fin Tech"],
    },
    {
      name: "Assistery",
      size: "11-50",
      location: "Mumbai",
      markets: [
        "Enterprise Software",
        "Cloud Computing",
        "Mobile Commerce",
        "Procurement",
        "Mobile Application",
      ],
    },
    {
      name: "VEECORP SOLUTIONS",
      size: "1-10",
      location: "Mumbai",
      markets: ["Technology", "IT Management"],
    },
  ];

  const rows = companies.map((company) => (
    <tr key={company.name}>
      <td>{company.name}</td>
      <td>{company.size} people</td>
      <td>{company.location}</td>
      <td>
        {company.markets.map((market) => (
          <div key={market}>{market}</div>
        ))}
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
