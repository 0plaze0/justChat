import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:3000/authenticate",
});

describe("check routes", () => {
  it("get mock data", async () => {
    const result = await baseUrl.get();
    expect(result).toBeTruthy();
    expect(result.status).toBe(200);
    expect(result.data.message).toBe("hello");
  });

  it("post akash username", async () => {
    const result = await baseUrl.post("/", {
      username: "akash",
    });
    expect(result).toBeTruthy();
    expect(result.status).toBe(200);
  });

  it("post demo username", async () => {
    const result = await baseUrl.post("/", {
      username: "demo",
    });
    console.log(result.status);
    expect(result.status).toBe(200);
  });
});
