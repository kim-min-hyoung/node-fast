const fs = require("fs");
const { promisify } = require("util");

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

const writeAndRead = async (data = "") => {
  try {
    await write("text.txt", data);
    return await read("test.txt");
  } catch (error) {
    console.error(error);
  }
};

writeAndRead("something to write");
