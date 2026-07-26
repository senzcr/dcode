import { Table } from "./components/Table.js";

customElements.define("styled-table", Table);

const newData = [
  ["8831", "dcode", "Australia"],
  ["6605", "red.square", "United States"],
];

const usersTable = document.getElementById("users");

usersTable.data = newData;