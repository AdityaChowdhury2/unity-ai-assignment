import { differenceInYears } from "date-fns";

export const formatDate = (date) => {
    const fullDate = new Date(date);
    const today = new Date();
    const dayDifference = differenceInYears(today, fullDate);
    return dayDifference;
}