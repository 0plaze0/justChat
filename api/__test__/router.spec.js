import axios from "axios";
import express from "express";

describe("check routes", () => {
  it("post correct username", async () => {
    const result = await axios.post("http://localhost:3000/authenticate", {
      username: "akash",
    });
    expect(result).toBeTruthy();
    expect(result.status).toBe(200);
  });
  it("post wrong username", async () => {
    const result = await axios.post("http://localhost:3000/authenticate", {
      username: "youto",
    });

    expect(result).not.toBeTruthy();
    expect(result.status).toBe(500);
  });
});
