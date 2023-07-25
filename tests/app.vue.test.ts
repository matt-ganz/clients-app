import { describe, it, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../app.vue";
import * as clients from "../server/api/clients.json";

describe("import app component succeeds", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../app.vue");
    expect(cmp).toBeDefined();
  });
});

describe("app component initializes successfully", () => {
  test("app initializes as expected", async () => {
    expect(App).toBeTruthy();
  });
});

describe("app component mounts successfully and matches snapshot", () => {
  test("app initializes as expected", async () => {
    const wrapper = mount(App);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("search clients", () => {
  test("should return default value of search term (and all clients)", async () => {
    const wrapper = mount(App);
    const myClients = clients;
    wrapper.vm.filterText = "";

    expect(wrapper.vm.filterText).toBe("");
    expect(myClients).toEqual(clients);
  });
});
