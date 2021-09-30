/*eslint-disable*/

export const createBusinessContact = /* GraphQL */ `
  mutation createBusinessContact($input: CreateBusinessContactInput!) {
    createBusinessContact(input: $input) {
      id
      companyName
      contactName
      contactEmail
      contactPhoneNumber
      billingAddress {
        addrLine1
        addrLine2
        addrLine3
        city
        state
        country
        postCode
        latitude
        longitude
      }
      moreAboutMerchant1
      moreAboutMerchant2
      moreAboutMerchant3
      moreAboutMerchant4
      moreAboutMerchant5
      moreAboutProducer1
      moreAboutProducer2
      moreAboutProducer3
      moreAboutProducer4
      moreAboutProducer5
      moreAboutAgency1
      moreAboutAgency2
      moreAboutAgency3
      moreAboutAgency4
      moreAboutAgency5
      additionalDetails
    }
  }
`;
