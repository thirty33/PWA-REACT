import { aliasQuery, aliasMutation } from "../../utils/graphql-test-utils";

context("Tests", () => {
  beforeEach(() => {
    cy.intercept(
      "POST",
      "https://petgram-server-joel-suarez-86194ed31-joelsuarez1101.vercel.app/graphql",
      (req) => {
        // Queries
        aliasQuery(req, "getPhotos");
        // aliasQuery(req, "getFavs");

        // // Mutations
        // aliasMutation(req, "likePhoto");
        // aliasMutation(req, "signup");
        // aliasMutation(req, "login");
      }
    );
  });
  it('get photos in home page', () => {
    cy.visit('/')
    // cy.wait('@gqlgetPhotosQuery')
    cy.wait('@gqlgetPhotosQuery')
      .its('response.body.data')
      .should('have.property', 'photos')
  })
});
