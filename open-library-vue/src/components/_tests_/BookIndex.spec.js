import { describe, it, expect } from "vitest";
import { cy } from 'cypress';
import { mount } from "@vue/test-utils";
import  BookIndex from "../BookIndex.vue";


describe("BookIndex", () => {
  it("it is created", () => {
      const wrapper = mount(BookIndex, {props: {bookCover: "a", bookName: "b", read: false} })
      expect(wrapper.props().read).to.false;
  });
  // it ('cango', () => {
  //   cy.visit("http://localhost:3000/");
  //   cy.contains("lib").click();
  //   cy.url().should("include", "/mylib")
  // })
});
