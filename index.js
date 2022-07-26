import cherio from "cherio";
import getdata from "./helper/getdata.js";
import removeemptyplaces from "./helper/removeemptyplaces.js";

import { ENV } from "./env.js";
import saveData from "./saver/saver.js";

const { URL, ATRIBUTE } = ENV;

async function getData() {
  try {
    const response = await getdata(URL);
    const $ = cherio.load(response);
    const result = [];
    $(`${ATRIBUTE}`).each((i, header) => {
      const names = $(header).text();
      result.push(names);
    });
    if (removeemptyplaces(result).length < 1) getData();
    else saveData(removeemptyplaces(result));
  } catch (error) {
    console.log(error);
  }
}
getData();
