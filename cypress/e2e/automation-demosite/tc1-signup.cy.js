
import { faker } from "@faker-js/faker/locale/af_ZA";

describe("signup tests", () => {
  const newUserInfo = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.buzzNoun(),
    address1: faker.location.street(),
    address2: faker.location.streetAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    mobile: faker.phone.number(),
  };

  it("create user", () => {

    cy.writeFile('cypress/fixtures/userInfo.json',newUserInfo)
    cy.visit("/");
    cy.contains("Signup / Login").click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get('[data-qa="signup-name"]').type(newUserInfo.name);
    cy.get('[data-qa="signup-email"]').type(newUserInfo.email);
    cy.get('[data-qa="signup-button"]').click();

    cy.contains("Enter Account Information").should("be.visible");
    cy.get("#id_gender2").check();
    cy.get('[data-qa="password"]').type(newUserInfo.password);
    cy.get('[data-qa="days"]').select("10");
    cy.get('[data-qa="months"]').select("10");
    cy.get('[data-qa="years"]').select("2012");
    cy.get("#newsletter").check();
    cy.get('[data-qa="first_name"]').type(newUserInfo.firstName);
    cy.get('[data-qa="last_name"]').type(newUserInfo.lastName);
    cy.get('[data-qa="company"]').type(newUserInfo.company);

    cy.writeToFile('cypress/e2e/fixtures/userAddress.json',newUserInfo)

    cy.get('[data-qa="address"]').type(newUserInfo.address1);
    cy.get('[data-qa="address2"]').type(newUserInfo.address2);
    cy.get('[data-qa="country"]').select("India");
    cy.get('[data-qa="state"]').clear().type(newUserInfo.state);
    cy.get('[data-qa="city"]').type(newUserInfo.city);
    cy.get('[data-qa="zipcode"]').type(newUserInfo.zipCode);
    cy.get('[data-qa="mobile_number"]').type(newUserInfo.mobile);
    cy.get('[data-qa="create-account"]').click();
    cy.get("h2 b").contains("Account Created!").should("be.visible");
    cy.get('[class="row"]  p:nth-child(2)')
      .contains(
        "Congratulations! Your new account has been successfully created!"
      )
      .should("be.visible");
  });

  it.skip("login with invalid credentials and verify error message", () => {
    cy.visit("/");
    cy.contains("Signup / Login").click();
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type("safasdfdsafsa");
    cy.get('[data-qa="login-button"]').click();

    cy.get(".login-form form p")
      .invoke("text")
      .then((error) => {
        cy.log("Error::" + error);
        expect(error).to.eq("Your email or password is incorrect!");
      });
  });

  it("verify data populated in name and email fields", () => {
    cy.visit("/");
    cy.contains("Signup / Login").click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get('[data-qa="signup-name"]').type(newUserInfo.name);
    cy.get('[data-qa="signup-email"]').type(newUserInfo.email);
    cy.get('[data-qa="signup-button"]').click();

    cy.get('[data-qa="name"]')
      .invoke("attr", "value")
      .then((name) => {
        expect(name).to.eq(newUserInfo.name);
      });
  });

  it.only("Add products to cart and verify cart", () => {
    cy.visit("/products");

    cy.get('[data-product-id="5"] i').first().click({ force: true });

    cy.get("[src='/get_product_picture/5']").siblings("h2").as("price5Element");

    cy.get("[src='/get_product_picture/5']")
      .siblings("h2")
      .then((priceElement) => {
        cy.wrap(priceElement).invoke("text").as("product5Price");
      });

    cy.get("@product5Price").then((price) => {
      cy.log("product price::" + price);
    });
  });
});

it("get product price and verify it in cart", () => {
  cy.get('[data-qa="months"] option').each((day) => {
    cy.wrap(day)
      .invoke("text")
      .then((valueDisplayed) => {
        cy.log("month values::" + valueDisplayed);
      });
  });
});
