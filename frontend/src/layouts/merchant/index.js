import {
  Box,
  Flex,
  Spacer,
  Image,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Button,
  Radio,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { navigate } from "@reach/router";
import React, { useState } from "react";
import * as Yup from "yup";
import Select from "react-select";
import {
  gridHeaderStylesProps,
  gridStylesProps,
  inputTextStyleProps,
} from "../../utils/stylesProps";
import { stateOptions } from "../../utils/states";
import { createBusinessContact } from "../../graphql/mutations";
import { API } from "aws-amplify";
import awsmobile from "../../aws-exports";

const MerchantPage = (props) => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      companyName: "",
      contactName: "",
      contactEmail: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Required"),
      contactName: Yup.string().required("Required"),
      contactEmail: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: async (values, helpers) => {
      setSubmitLoading(true);
      values.contactPhoneNumber =
        values.country_code + "" + values.phone_number;

      delete values.country_code;
      delete values.phone_number;

      console.log(values);

      try {
        const data = await API.graphql({
          query: createBusinessContact,
          variables: {
            input: {
              contactType: "Merchant",
              companyName: values.companyName,
              contactName: values.contactName,
              contactEmail: values.contactEmail,
              contactPhoneNumber: values.contactPhoneNumber,
              billingAddress: {
                addrLine1: values.addrLine1,
                addrLine2: values.addrLine2,
              },
              moreAboutMerchant1: values.establishYear,
              moreAboutMerchant2: values.storesCount,
              moreAboutMerchant3: values.presenceStates,
              moreAboutMerchant4: values.deliveryWebsite,
              moreAboutMerchant5: values.deliveryMobile,
              additionalDetails: values.details,
            },
          },
          authMode: "API_KEY",
          authToken: awsmobile.aws_appsync_apiKey,
        });

        console.log(data);

        navigate("/success");
      } catch (err) {
        console.log(err);
      }

      setSubmitLoading(false);
      helpers.resetForm();
    },
  });

  const { values, handleBlur, handleChange, handleSubmit, setFieldValue } =
    formik;

  return (
    <Box>
      <Flex>
        <Box p="4" />
        <Spacer />
        <Box
          px="4"
          bg="brand.red"
          color="brand.white"
          roundedBottomLeft="lg"
          lineHeight="30px"
          fontSize="18px"
          letterSpacing="0.25em"
          height="31px"
          boxShadow="5px"
        >
          Merchant
        </Box>
      </Flex>
      <Box pl="8" pr="8">
        <Box>
          <Image
            src={require("../../assets/logo/Full-Logo.svg").default}
            w="150px"
            h="52px"
          />
        </Box>
        <Box {...gridStylesProps} mt="6">
          <Box {...gridHeaderStylesProps} fontWeight="bold" pl="5">
            About Yourself
          </Box>
          <Box p="5">
            <Box w="100%" spacing="10" display={{ base: "block", md: "flex" }}>
              <FormControl id="" isRequired mr="10">
                <FormLabel>Name of Business</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="companyName"
                  onBlur={handleBlur}
                  value={values.companyName}
                  onChange={handleChange}
                  placeholder="Name of Business"
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <Box className="error">{formik.errors.companyName}</Box>
                ) : null}
              </FormControl>
              <FormControl id="" isRequired mr="10">
                <FormLabel>Contact Person</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="contactName"
                  onBlur={handleBlur}
                  value={values.contactName}
                  onChange={handleChange}
                  placeholder="Contact Person"
                />
                {formik.touched.contactName && formik.errors.contactName ? (
                  <Box className="error">{formik.errors.contactName}</Box>
                ) : null}
              </FormControl>
              <FormControl id="" isRequired>
                <FormLabel>Email Id</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="contactEmail"
                  onBlur={handleBlur}
                  value={values.contactEmail}
                  onChange={handleChange}
                  placeholder="EmailId"
                />
                {formik.touched.contactEmail && formik.errors.contactEmail ? (
                  <Box className="error">{formik.errors.contactEmail}</Box>
                ) : null}
              </FormControl>
            </Box>
            <Box
              w="100%"
              spacing="10"
              display={{ base: "block", md: "flex" }}
              mt="5"
            >
              <FormControl id="" mr="10">
                <FormLabel>Phone Number</FormLabel>
                <HStack>
                  <Input
                    {...inputTextStyleProps}
                    type="text"
                    width="70px"
                    value={values.country_code}
                    onChange={(e) => {
                      setFieldValue("country_code", e.target.value);
                    }}
                    placeholder="+1"
                  />
                  <Input
                    {...inputTextStyleProps}
                    type="text"
                    value={values.phone_number}
                    onChange={(e) => {
                      setFieldValue("phone_number", e.target.value);
                    }}
                    placeholder="e.g. 1234567891"
                  />
                </HStack>
              </FormControl>
              <FormControl id="" mr="10">
                <FormLabel>Address Line 1</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="addrLine1"
                  onBlur={handleBlur}
                  value={values.addrLine1}
                  onChange={handleChange}
                  placeholder="Address Line 1"
                />
              </FormControl>
              <FormControl id="">
                <FormLabel>Address Line 2</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="addrLine2"
                  onBlur={handleBlur}
                  value={values.addrLine2}
                  onChange={handleChange}
                  placeholder="Address Line 2"
                />
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box {...gridStylesProps} mt="6">
          <Box {...gridHeaderStylesProps} fontWeight="bold" pl="5">
            More about your Business
          </Box>
          <Box p="5">
            <Box display={{ base: "block", md: "flex" }}>
              <FormControl id="" mr="10">
                <FormLabel>Year of Establishment</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="establishYear"
                  onBlur={handleBlur}
                  value={values.establishYear}
                  onChange={handleChange}
                  placeholder="Year of Establishment"
                />
              </FormControl>
              <FormControl id="" mr="10">
                <FormLabel>No of stores you own / manage</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="storesCount"
                  onBlur={handleBlur}
                  value={values.storesCount}
                  onChange={handleChange}
                  placeholder=""
                />
              </FormControl>
              <FormControl id="" mr="10">
                <FormLabel>List of states you have presence</FormLabel>

                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  options={stateOptions}
                  onChange={(states) => {
                    const selectedStates = states.map((item) => item.value);
                    setFieldValue("presenceStates", selectedStates);
                    console.log(selectedStates);
                  }}
                />
              </FormControl>
            </Box>
            <Box display={{ base: "block", md: "flex" }} mt="5">
              <FormControl id="" mr="10" display="flex" alignItems="baseline">
                <FormLabel> Do you have delivery Website? </FormLabel>
                <RadioGroup
                  defaultValue="1"
                  mt="3"
                  onChange={(event) => {
                    setFieldValue("deliveryWebsite", event);
                  }}
                >
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No" ml="5">
                    No
                  </Radio>
                </RadioGroup>
              </FormControl>
              <FormControl id="" display="flex" alignItems="baseline">
                <FormLabel>Do you have delivery Mobile App? </FormLabel>
                <RadioGroup
                  defaultValue="1"
                  mt="3"
                  onChange={(event) => {
                    setFieldValue("deliveryMobile", event);
                  }}
                >
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No" ml="5">
                    No
                  </Radio>
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box {...gridStylesProps} mt="6">
          <Box {...gridHeaderStylesProps} fontWeight="bold" pl="5">
            Additional details you like to share
          </Box>
          <Box p="5">
            <Textarea
              name="details"
              onBlur={handleBlur}
              value={values.details}
              onChange={handleChange}
              placeholder="Additional details"
              size="sm"
            />{" "}
          </Box>
        </Box>
        <Flex pb="8" mt="5">
          <Box>
            <Button
              variant="cancel-button"
              borderColor="brand.red"
              color="brand.red"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Button
              mr="10px"
              color="white"
              type="submit"
              isLoading={submitLoading}
              fontWeight="bold"
              fontSize="14px"
              _hover={{ background: "brand.red" }}
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MerchantPage;
