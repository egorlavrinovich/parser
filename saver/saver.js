import path from "path";
import fs from "fs";
import chalk from "chalk";

export default async function saveData(data) {
  const fileName = `result.json`;
  const savePath = path.join("../PARSER/", "data", fileName);

  return new Promise((resolve, reject) => {
    fs.writeFile(savePath, JSON.stringify(data), (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}
