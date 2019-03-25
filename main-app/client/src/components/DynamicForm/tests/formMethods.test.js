import {
  _getDefaultFormData,
  _validateAllAnswers,
  _determineSubmitBtnState
} from "../utilities/formMethods";
import { question_set_1 } from "./mockQA";
import { SubmitBtnState } from "../utilities/types";

describe("Dynamic Form Initialization", () => {
  let initialFormData, initialValidation;
  beforeEach(() => {
    initialFormData = {
      clinic_attended: "",
      first_name: "",
      known_as: "",
      email: "",
      age: "18-24",
      ethnicity: "Hispanic/Latino",
      violations: [],
      location: []
    };

    initialValidation = {
      clinic_attended_is_valid: true,
      first_name_is_valid: false, // required
      known_as_is_valid: true,
      email_is_valid: false, // required
      age_is_valid: true,
      ethnicity_is_valid: true,
      violations_is_valid: true,
      location_is_valid: false // required
    };
  });
  it("creates default form data", () => {
    expect(_getDefaultFormData(question_set_1)).toEqual(initialFormData);
  });

  it("Initial State", () => {
    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
  });
});

describe("Dynamic Form Validation", () => {
  let initialFormData, initialValidation;
  beforeEach(() => {
    initialFormData = {
      clinic_attended: "",
      first_name: "",
      known_as: "",
      email: "",
      age: "18-24",
      ethnicity: "Hispanic/Latino",
      violations: [],
      location: []
    };

    initialValidation = {
      clinic_attended_is_valid: true,
      first_name_is_valid: false, // required
      known_as_is_valid: true,
      email_is_valid: false, // required
      age_is_valid: true,
      ethnicity_is_valid: true,
      violations_is_valid: true,
      location_is_valid: false // required
    };
  });

  it("Optional input change", () => {
    initialFormData.clinic_attended = "testing"; // optional
    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
  });

  it("Required input change", () => {
    initialFormData.first_name = "Frank"; // required
    initialValidation.first_name_is_valid = true;
    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.DISABLED
    );
  });

  it("Incorrect input change of all required fields", () => {
    initialFormData.first_name = "Frank"; // required
    initialFormData.email = "not_valid_email"; // required

    initialValidation.first_name_is_valid = true;
    initialValidation.email_is_valid = false;

    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.DISABLED
    );
  });

  it("Correct input change of all required fields", () => {
    initialFormData.first_name = "Frank"; // required
    initialFormData.email = "test@gmail.com"; // required
    initialFormData.location = ["San Francisco", "Los Angeles"]; // required

    initialValidation.first_name_is_valid = true;
    initialValidation.email_is_valid = true;
    initialValidation.location_is_valid = true;

    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.ENABLED
    );
  });

  it("Correct input change of all required fields, after multiple changes", () => {
    initialFormData.first_name = "Frank"; // required
    initialFormData.email = "test@gmail.com"; // required
    initialFormData.location = ["San Francisco", "Los Angeles"]; // required

    initialValidation.first_name_is_valid = true;
    initialValidation.email_is_valid = true;
    initialValidation.location_is_valid = true;

    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.ENABLED
    );
  });
});

describe("Dynamic Form Validation Flow", () => {
  let initialFormData, initialValidation;
  beforeAll(() => {
    initialFormData = {
      clinic_attended: "",
      first_name: "",
      known_as: "",
      email: "",
      age: "18-24",
      ethnicity: "Hispanic/Latino",
      violations: [],
      location: []
    };

    initialValidation = {
      clinic_attended_is_valid: true,
      first_name_is_valid: false, // required
      known_as_is_valid: true,
      email_is_valid: false, // required
      age_is_valid: true,
      ethnicity_is_valid: true,
      violations_is_valid: true,
      location_is_valid: false // required
    };
  });
  it("Correct input change of all required fields", () => {
    initialFormData.first_name = "Frank"; // required
    initialFormData.email = "test@gmail.com"; // required
    initialFormData.location = ["San Francisco", "Los Angeles"]; // required

    initialValidation.first_name_is_valid = true;
    initialValidation.email_is_valid = true;
    initialValidation.location_is_valid = true;

    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.ENABLED
    );
  });

  it("Disabled submit btn after invalidating required field", () => {
    initialFormData.first_name = "";
    initialValidation.first_name_is_valid = false;
    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.DISABLED
    );
  });

  it("Disabled submit btn after invalidating required field", () => {
    initialFormData.first_name = "Alexa";
    initialValidation.first_name_is_valid = true;
    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.ENABLED
    );
  });
});
