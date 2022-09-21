# Betsson-playwright-project

![Test](https://github.com/Tallyb/cucumber-playwright/workflows/Test/badge.svg)

Hello, this the Playwright project (which is using the template of https://github.com/Tallyb/cucumber-playwright) including 3 UI tests and 2 API tests.

# UI Tests

I have written 3 UI tests for the https://www.betsson.com/de site. These tests include 2 fail and 1 success cases. 

-The success case is to test if we could reach to the "blogs" tab and search for a specific and be able to find it, without any issues. With mostly using the "test-id" selectors given by the Betsson, I was able to locate the CSS elements and proceed with the task. 

-First UI fail case is to test if we could receive an error message by passing an invalid email to email field of the login screen. Required CSS form elements and buttons were also located with the given "test-id" attributes. The assertion was simply checked and done with string comparison afterwards.

-The last UI fail case is to check if we could receive an error message by using a non-existing/invalid email as the email field. Same with the other tests, I have tried to utilize the "test-id" attribute for locator as much as possible. Similiar to login fail case, the assertion check was done with string comparison. 

# API Tests

For the API testing part, I have written 2 API tests for https://www.betsson.com/de site.

-First API fail case is to test if we could reach to an error while logging in to the site with invalid email field. This is done by using "fetch" function. We pass the HTTP request type, the request body and request headers as parameters to the "fetch" function. After our invalid request has been sent, we parse the response body to check status code to see if it is 400 as expected and we do schema validation. Schema validation is done with an external JS library "Zod". Zod allows us to define what type of response we expect at the top of our test and allows us to compare that with response JSON afterwards.

-Second API fail case is to check if we could, again, obtain an error indicator by sending an invalid email input as POST request. Similiar approach with the 1st UI test was followed to write this test. We assert that it is expected to receive a specific status code and a specific response body with schema validation.

# GitHub Actions

I have also pushed this project to GitHub and integrated it to GitHub Actions, which was asked at part 2 of the assignment. You can observe that with the latest version of the tests being pushed, all of them were ran successfully for versions 16 and 18 of Node.js. 