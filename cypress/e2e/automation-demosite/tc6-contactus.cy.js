import contactUs from "../../support/pages/contactUs.js";

describe("fixture-file upload", () => {
    it("fixture example ", () => {
      cy.visit("https://automationexercise.com/contact_us");
      cy.fixture("contactUS").then(userData => {
          let contactUsDetails = userData.contactUsInfo[1]
          contactUs.fillConatctUsForm(contactUsDetails)
      });
    });
  });