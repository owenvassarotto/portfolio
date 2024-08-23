export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const getAge = (
  birthDay: number,
  birthMonth: number,
  birthYear: number
) => {
  const today = new Date();
  let age = today.getFullYear() - birthYear;

  // Restar 1 si no ha llegado tu cumpleaños este año
  if (
    today.getMonth() < birthMonth + 1 ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    age--;
  }

  return age;
};
