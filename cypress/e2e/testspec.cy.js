describe('Hello World API', () => {
  it('should return Hello, World!', () => {
    // Replace with your actual API endpoint
    const apiUrl = 'http://localhost:3000/';

    // Make the API request and check the response
    cy.request(apiUrl).then((response) => {
      // Check that the response status is 200 (OK)
      expect(response.status).to.eq(200);

      // Check that the response body is "Hello, World!"
      expect(response.body).to.eq('Hello');
    });
  });
});
