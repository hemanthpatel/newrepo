import {
  Box,
  Flex,
  Spacer,
  Image,
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
  RadioGroup,
  Radio,
  HStack,
  Button,
  Textarea,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { navigate } from "@reach/router";
import ReactSelect from "react-select";
import React, { useState } from "react";
import {
  gridHeaderStylesProps,
  gridStylesProps,
  inputTextStyleProps,
} from "../../utils/stylesProps";
import { stateOptions } from "../../utils/states";

const MarketingPage = (props) => {
  const [initialSupplyAbility, setInitialSupplyAbility] = useState("0");
  const formik = useFormik({
    initialValues: {
      businessName: "",
      contactPerson: "",
      email: "",
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required("Required"),
      contactPerson: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),

    onSubmit: async (values, helpers) => {
      values.phoneNumber = values.country_code + "" + values.phone_number;
      delete values.country_code;
      delete values.phone_number;
      console.log(values);
      // navigate("/success");
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
          Marketing Agency
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
                  name="businessName"
                  onBlur={handleBlur}
                  value={values.businessName}
                  onChange={handleChange}
                  placeholder="Name of Business"
                />
                {formik.touched.businessName && formik.errors.businessName ? (
                  <Box className="error">{formik.errors.businessName}</Box>
                ) : null}
              </FormControl>
              <FormControl id="" isRequired mr="10">
                <FormLabel>Contact Person</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="contactPerson"
                  onBlur={handleBlur}
                  value={values.contactPerson}
                  onChange={handleChange}
                  placeholder="Contact Person"
                />
                {formik.touched.contactPerson && formik.errors.contactPerson ? (
                  <Box className="error">{formik.errors.contactPerson}</Box>
                ) : null}
              </FormControl>
              <FormControl id="" isRequired>
                <FormLabel>Email Id</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  placeholder="EmailId"
                />{" "}
                {formik.touched.email && formik.errors.email ? (
                  <Box className="error">{formik.errors.email}</Box>
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
                <FormLabel>Addres Line 1</FormLabel>
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
                <FormLabel>Addres Line 2</FormLabel>
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
            More about your Agency
          </Box>
          <Box p="5">
            <Box display={{ base: "block", md: "flex" }}>
              <FormControl
                id=""
                display={{ base: "block", md: "flex" }}
                alignItems="baseline"
              >
                <FormLabel w={{ base: "100%", md: "40%" }}>
                  Experience with selling technology-based market place
                  platforms
                </FormLabel>
                <RadioGroup
                  defaultValue="1"
                  mt="3"
                  onChange={(event) => {
                    setFieldValue("sellingTechExp", event);
                  }}
                >
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No" ml="5">
                    No
                  </Radio>
                </RadioGroup>
              </FormControl>
            </Box>
            <Box mt="5">
              <FormControl
                id=""
                display={{ base: "block", md: "flex" }}
                alignItems="baseline"
              >
                <FormLabel w={{ base: "100%", md: "40%" }}>
                  Ability to generate inital Supply on marketplace platforms
                </FormLabel>
                {/* <Text>Number Line</Text> */}
                <Flex w="60%">
                  <Input
                    maxW="100px"
                    mr="2rem"
                    value={initialSupplyAbility}
                    onChange={handleChange}
                  ></Input>
                  <Slider
                    min={0}
                    colorScheme="red"
                    max={10}
                    name=""
                    defaultValue="0"
                    focusThumbOnChange={false}
                    //   value={values.initialSupplyAbility}
                    onChange={(value) => {
                      setInitialSupplyAbility(value);
                      setFieldValue("initialSupplyAbility", value);
                    }}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                      fontSize="sm"
                      boxSize="32px"
                      border="red"
                      children={initialSupplyAbility}
                    />
                  </Slider>
                </Flex>
              </FormControl>
            </Box>
            <Box mt="5">
              <FormControl
                display={{ base: "block", md: "flex" }}
                alignItems="baseline"
              >
                <FormLabel w={{ base: "100%", md: "40%" }}>
                  Prior experience in change management with fragmented sellers
                </FormLabel>
                <RadioGroup
                  defaultValue="1"
                  mt="3"
                  onChange={(event) => {
                    setFieldValue("changeManagementExp", event);
                  }}
                >
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No" ml="5">
                    No
                  </Radio>
                </RadioGroup>
              </FormControl>
              <FormControl
                display={{ base: "block", md: "flex" }}
                alignItems="baseline"
                mt="5"
              >
                <FormLabel w={{ base: "100%", md: "40%" }}>
                  Potential states your agency can produce business to
                  1800spirits?
                </FormLabel>
                <Box w={{ base: "100%", md: "40%" }}>
                  <ReactSelect
                    closeMenuOnSelect={false}
                    isMulti
                    options={stateOptions}
                    onChange={(states) => {
                      const selectedStates = states.map((item) => item.value);
                      setFieldValue("potentialStates", selectedStates);
                      console.log(selectedStates);
                    }}
                  />
                </Box>
              </FormControl>
              <FormControl
                display={{ base: "block", md: "flex" }}
                alignItems="baseline"
                mt="5"
              >
                <FormLabel w={{ base: "100%", md: "40%" }}>
                  Will revenue share model aligns with your business model
                </FormLabel>
                <RadioGroup
                  defaultValue="1"
                  mt="3"
                  onChange={(event) => {
                    setFieldValue("revenueShareModel", event);
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

export default MarketingPage;
