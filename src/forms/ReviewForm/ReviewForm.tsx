import React from "react";
import { Button, Form, Rating } from "semantic-ui-react";
import { Form as FinalForm } from "react-final-form";
import FieldTextInput from "../../components/FieldTextInput/FieldTextInput";
import { required } from "../../util/validators";
import { ValidationErrors } from "final-form";
import { useStore } from "../../stores/store";

type ReviewFormProps = {
  mentorId: string;
};

type SubmitProps = {
  reviewStarRating: string;
  comment: string;
};

const ReviewForm: React.FC<ReviewFormProps> = ({ mentorId }) => {
  const { mentorStore } = useStore();
  const { postReview } = mentorStore;
  return (
    <FinalForm
      onSubmit={({ reviewStarRating, comment }) =>
        postReview(mentorId, Number.parseInt(reviewStarRating), comment)
      }
      validate={(values: SubmitProps) => {
        const { reviewStarRating } = values;
        const errors: ValidationErrors = [];
        if (!reviewStarRating) {
          errors.reviewStarRating = "Review rating is required.";
        }
        return errors;
      }}
      render={({ handleSubmit, valid, submitting, form }) => (
        <Form onSubmit={handleSubmit}>
          <Rating
            icon="star"
            defaultRating={0}
            maxRating={5}
            onRate={(e, { rating }) =>
              form.change("reviewStarRating", rating?.toString())
            }
            size="huge"
          />
          <FieldTextInput
            name="comment"
            type="text"
            label="Review comment"
            placeholder="Enter review comment..."
            validate={required("Review comment is required")}
          />
          <Button
            disabled={!valid}
            loading={submitting}
            primary
            content="Post review"
            type="submit"
            fluid
          />
        </Form>
      )}
    />
  );
};

export default ReviewForm;
