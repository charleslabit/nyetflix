// Function to add space before capital letters
export const formatTitle = (title: string) => {
  return title.replace(/([a-z])([A-Z])/g, "$1 $2");
};
