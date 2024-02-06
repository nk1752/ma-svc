async function getStatus() {
  const report = {
    id: 2,
    name: "inaaya",
    age: 16,
  };
  return report;
}

async function getHello(name: string) {
  return { message: `hello ${name}` };
}

export { getStatus, getHello };
