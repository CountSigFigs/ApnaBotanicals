import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>This is required</p>;
      case "minLength":
        return <p>Your last name need minmium 2 charcaters</p>;
      case "pattern":
        return <p>Enter a valid email address</p>;
      case "phone":
        return <p>Phone number must be 10 digits long</p>;
      case "feedback":
        return <p>Feedback must be at least 5 characters long</p>;
      default:
        return null;
    }
  }

  return null;
};
