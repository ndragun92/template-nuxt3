export default defineEventHandler((event) => {
  const { key } = getQuery(event);
  const method = getMethod(event);

  if (method === "GET") {
    switch (key) {
      case "test":
        return {
          example: "This is GET example",
        };
    }
  }

  return {
    example: "This is example",
  };
});
