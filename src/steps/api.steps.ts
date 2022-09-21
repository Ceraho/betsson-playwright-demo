import { ICustomWorld } from '../support/custom-world';
import { expect } from '@playwright/test';
import { Given } from '@cucumber/cucumber';
import fetch from 'node-fetch';
import {​​​​​​ z }​​​​​​ from "zod"; 



// 1ST API TEST STEP: Test if log-in attempt has been done with an invalid email input.
Given('A new member login operation is initialized with failing email', async function (this: ICustomWorld) {
  const loginResponseSchema = z.object({
    code: z.string()
    });

  const response = await fetch("https://www.betsson.com/api/v1/single-sign-on-sessions/", {
  "headers": {
  "accept": "application/json, text/plain, */*",
  "accept-language": "en-US,en;q=0.9",
  "brandid": "e123be9a-fe1e-49d0-9200-6afcf20649af",
  "content-type": "application/json",
  "correlationid": "f8af5b0b-b723-4ad3-9bdc-e10150ac09e0",
  "marketcode": "de",
  "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-obg-channel": "Web",
  "x-obg-country-code": "DE",
  "x-obg-device": "Desktop",
  "x-obg-experiments": "ssrClientConfiguration",
  "cookie": "OBG-MARKET=de; Acquisition_Status_Current=Prospect; Start_Acquisition=Prospect; Client_Status_Current=Prospect; Start_Client_Status=Prospect; Customer_Level=PC; _gcl_au=1.1.1245143254.1663496530; GAClientID_Cookie=1927379741.1663496526; pll_language=de; Blog_User_Type=Returning Blog User; _ga=GA1.1.1927379741.1663496526; _ga_BBLKWV84WH=GS1.1.1663496895.1.1.1663497807.0.0.0; Initdone=1; TrafficType=Other Traffic; AffCookie=Missing AffCode; LoadAll=0; Orientation=0; crw-_ga=2022-09-19-365; _gid=GA1.2.440584486.1663609502; OptanonConsent=isIABGlobal=false&datestamp=Mon+Sep+19+2022+20%3A45%3A03+GMT%2B0300+(GMT%2B03%3A00)&version=6.39.0&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A0%2CC0002%3A0%2CC0004%3A0&AwaitingReconsent=false; CJ_AnyAction=true; RegAction=1; OBG-LOBBY=casino",
  "Referer": "https://www.betsson.com/de/slots",
  "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"type\":\"up\",\"loginSource\":\"Web\",\"iovationBlackBox\":\"OBG20220919174501YjFkN2JkYzE4OTM1NDc1N2EzYmYzMDMwNmI0ZWNkZmI\",\"username\":\"xyz@examplemail.com\",\"password\":\"xyz\",\"shouldRememberUser\":false}",
  "method": "POST"
  });

  expect(response.status).toBe(400);
  loginResponseSchema.parse(await response.json());  // Schema Validation
});


// 2ND API TEST STEP: Test if register attempt has been done with an invalid password input.
Given('A new member register operation is initialized with invalid password', async function (this: ICustomWorld) {
  const registerResponseSchema = z.object({
      code: z.string(),
      errors: z.array(z.object({code: z.string(), field: z.string()}))
    });

  const response = await fetch("https://www.betsson.com/api/v1/customerregistrationtokens", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "brandid": "e123be9a-fe1e-49d0-9200-6afcf20649af",
    "content-type": "application/json",
    "correlationid": "c3536ae6-55f4-4d55-a4fa-1d184f7454d4",
    "marketcode": "de",
    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-obg-channel": "Web",
    "x-obg-country-code": "DE",
    "x-obg-device": "Desktop",
    "x-obg-experiments": "ssrClientConfiguration",
    "cookie": "Acquisition_Status_Current=Prospect; Start_Acquisition=Prospect; Client_Status_Current=Prospect; Start_Client_Status=Prospect; Customer_Level=PC; _gcl_au=1.1.874094504.1663413394; GAClientID_Cookie=2095099495.1663413304; OBG-MARKET=de; OptanonAlertBoxClosed=2022-09-17T11:37:33.192Z; CONSENT=%7B%22marketing%22%3A1%2C%22functional%22%3A1%2C%22performance%22%3A1%2C%22targeting%22%3A1%7D; VIQ_P1=1663414653908_5219414; _hjSessionUser_1227352=eyJpZCI6IjMyODZlZTBiLTQ5OWItNTcyMS1iZTNmLTg2ZTI1NTA1NWVlNyIsImNyZWF0ZWQiOjE2NjM0MTQ2NTQ2NjgsImV4aXN0aW5nIjp0cnVlfQ==; pll_language=de; Blog_User_Type=Returning Blog User; _hjSessionUser_1783043=eyJpZCI6IjBkMjlmNTRjLTRhYTItNTk0ZS04ZTQ1LWY0M2YyM2NhNDgzNiIsImNyZWF0ZWQiOjE2NjM0MTUzMzI2NDUsImV4aXN0aW5nIjp0cnVlfQ==; _clck=1w82fe2|1|f4y|0; _uetvid=d1aa6360368311ed9b516b8bfb829c26; _gid=GA1.2.2111138812.1663696862; _hjShownFeedbackMessage=true; _ga=GA1.1.2095099495.1663413304; Initdone=1; TrafficType=Other Traffic; AffCookie=Missing AffCode; LoadAll=0; Orientation=0; crw-_ga=2022-09-21-365; domain.viq=betsson; OptanonConsent=isIABGlobal=false&datestamp=Wed+Sep+21+2022+20%3A35%3A36+GMT%2B0300+(GMT%2B03%3A00)&version=6.39.0&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&geolocation=DE%3B&AwaitingReconsent=false; _hjIncludedInSessionSample=1; _hjSession_1227352=eyJpZCI6Ijg3YjkwNzFkLTU4ZWMtNDNmOS05NTIxLWMyZGE3Y2ZjYWE1ZCIsImNyZWF0ZWQiOjE2NjM3ODE3MzY3NTQsImluU2FtcGxlIjp0cnVlfQ==; _hjAbsoluteSessionInProgress=1; OBG-LOBBY=common; CJ_AnyAction=true; RegAction=1; _ga_BBLKWV84WH=GS1.1.1663781736.4.1.1663781860.4.0.0",
    "Referer": "https://www.betsson.com/de/konto-eroffnung?lp=casino&product=casino",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"language\":\"de\",\"timeZone\":\"utc\",\"address\":{\"street\":\"besiktas\",\"zipCode\":\"1234\",\"city\":\"Oslo\",\"country\":\"NO\"},\"affiliateMetadata\":[],\"credential\":{\"username\":\"12345@test.com\",\"email\":\"12345@test.com\",\"\":\"abc123-A\"},\"currency\":\"NOK\",\"subscriptions\":{\"acceptEmailOffers\":false,\"acceptSmsOffers\":false,\"acceptTelesalesOffers\":false,\"email\":\"12345@test.com\",\"phoneExtension\":\"+47\",\"phoneNumber\":\"12345678\"},\"person\":{\"firstName\":\"abc\",\"lastName\":\"xyz\",\"dateOfBirth\":\"1990-01-01T00:00:00.000Z\",\"gender\":\"Male\"},\"iovationBlackBox\":\"OBG20220921173535ZmFmZjgwZTE5ZTE5NGY4MGJkYmYwNTM3MTBlNzFkYWE\",\"legal\":{\"termsAndConditions\":true},\"consents\":{\"brandMarketing\":false},\"productMetadata\":{\"registeredFromProduct\":\"casino\"}}",
  "method": "POST"
  });

  expect(response.status).toBe(400);
  registerResponseSchema.parse(await response.json());  // Schema Validation
});