import { validationResult, query } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";
import { months } from "../utils/objs.js";
const withValidationError = (validate) => {
  return [
    validate,
    (req, res, next) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        const errors = result
          .array()
          .map((error) => error.msg)
          .join(",");
        throw new BadRequestError(errors);
      }
      next();
    },
  ];
};

export const validateQuery = withValidationError([
  query("month").optional().isIn(months).withMessage("Invalid month"),
]);
