import {
  Box,
  Flex,
  Spacer,
  HStack,
  Image,
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { navigate } from "@reach/router";
import React, { useState } from "react";
import ReactSelect from "react-select";
import {
  gridHeaderStylesProps,
  gridStylesProps,
  inputTextStyleProps,
} from "../../utils/stylesProps";
import * as Yup from "yup";
import { stateOptions } from "../../utils/states";

const ProducerPage = (props) => {
  const [liquorFamiliarity, setLiquorFamiliarity] = useState("0");
  const [techAbility, setTechAbility] = useState("0");
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),

    onSubmit: async (values, helpers) => {
      values.phoneNumber = values.country_code + "" + values.phone_number;
      delete values.country_code;
      delete values.phone_number;
      console.log(values);
      navigate("/success");
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
          Producer / Agent
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
                <FormLabel>Full Name</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="fullName"
                  onBlur={handleBlur}
                  value={values.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <Box className="error">{formik.errors.fullName}</Box>
                ) : null}
              </FormControl>
              <FormControl id="" isRequired mr="10">
                <FormLabel>Email Id</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email Id"
                />
                {formik.touched.email && formik.errors.email ? (
                  <Box className="error">{formik.errors.email}</Box>
                ) : null}
              </FormControl>
              <FormControl id="" mr="10">
                <FormLabel>Phone Number</FormLabel>
                <HStack>
                  <Input
                    {...inputTextStyleProps}
                    type="text"
                    width="70px"
                    onBlur={handleBlur}
                    value={values.country_code}
                    onChange={(e) => {
                      setFieldValue("country_code", e.target.value);
                    }}
                    placeholder="+1"
                  />
                  <Input
                    {...inputTextStyleProps}
                    type="text"
                    onBlur={handleBlur}
                    value={values.phone_number}
                    onChange={(e) => {
                      setFieldValue("phone_number", e.target.value);
                    }}
                    placeholder="e.g. 1234567891"
                  />
                </HStack>
              </FormControl>
            </Box>
            <Box
              w="100%"
              spacing="10"
              display={{ base: "block", md: "flex" }}
              mt="5"
            >
              <FormControl id="" mr="6">
                <FormLabel>Addres Line 1</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  w="97%"
                  name="addrLine1"
                  onBlur={handleBlur}
                  value={values.addrLine1}
                  onChange={handleChange}
                  placeholder="Address Line 1"
                />
              </FormControl>
              <FormControl id="" mr="12">
                <FormLabel>Addres Line 2</FormLabel>
                <Input
                  {...inputTextStyleProps}
                  type="text"
                  w="97%"
                  name="addrLine2"
                  onBlur={handleBlur}
                  value={values.addrLine2}
                  onChange={handleChange}
                  placeholder="Address Line 2"
                />
              </FormControl>
              <FormControl>
                <FormLabel> </FormLabel>
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
              <FormControl
                id=""
                display={{ base: "block", md: "flex" }}
                alignItems="baseline"
              >
                <FormLabel> Familiarity of your liquor business </FormLabel>
                <Flex w="60%">
                  <Input
                    maxW="100px"
                    mr="2rem"
                    value={liquorFamiliarity}
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
                      setLiquorFamiliarity(value);
                      setFieldValue("liquorFamiliarity", value);
                    }}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                      fontSize="sm"
                      boxSize="32px"
                      border="red"
                      children={liquorFamiliarity}
                    />
                  </Slider>
                </Flex>
              </FormControl>
              <FormControl
                id=""
                display={{ base: "block", md: "flex" }}
                alignItems="baseline"
              >
                <FormLabel>Ability to train merchant on Technology </FormLabel>
                <Flex w="60%">
                  <Input
                    maxW="100px"
                    mr="2rem"
                    value={techAbility}
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
                      setTechAbility(value);
                      setFieldValue("techAbility", value);
                    }}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                      fontSize="sm"
                      boxSize="32px"
                      border="red"
                      children={techAbility}
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
                  Potential states you can produce business to 1800spirits?
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
                  Number of liquor merchants you have reachable to?
                </FormLabel>
                <Select
                  w={{ base: "100%", md: "40%" }}
                  {...inputTextStyleProps}
                  type="text"
                  name="merchantCount"
                  onBlur={handleBlur}
                  value={values.merchantCount}
                  onChange={handleChange}
                  placeholder=""
                >
                  <option>-Select-</option>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-20">11-20</option>
                  <option value="20+">20+</option>
                </Select>
              </FormControl>
              <FormControl
                display={{ base: "block", md: "flex" }}
                alignItems="baseline"
                mt="5"
              >
                <FormLabel w={{ base: "100%", md: "40%" }}>
                  Readliness to commit number of hrs / week
                </FormLabel>
                <Select
                  w={{ base: "100%", md: "40%" }}
                  {...inputTextStyleProps}
                  type="text"
                  name="hoursPerWeek"
                  onBlur={handleBlur}
                  value={values.hoursPerWeek}
                  onChange={handleChange}
                  placeholder=""
                >
                  <option>-Select-</option>
                  <option value="10-20">10-20</option>
                  <option value="20+">20+</option>
                </Select>
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

export default ProducerPage;
