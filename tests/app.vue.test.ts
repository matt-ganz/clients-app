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

describe("app component mounts successfully", () => {
  test("app initializes as expected", async () => {
    const wrapper = mount(App);
    expect(wrapper.vm).toBeTruthy();
  });
});

// describe("snapshot testing", () => {
//   test("ui matches snapshot", () => {
//     const wrapper = mount(App, {});
//     expect(wrapper.text()).toMatchSnapshot();
//   });
// });

// describe("search clients", () => {
//   test("should return default value of search term (and all clients)", async () => {
//     const myClients = wrapper.vm.filteredClients();
//     // wrapper.vm.filterText = "";
//     // expect(wrapper.vm.filterText.value).toBe("");
//     expect(myClients).toEqual(clients);
//   });
// });
