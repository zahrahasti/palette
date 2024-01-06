type typeData="hour" | "day" | "week" | "month"
export function formatTimeDifference(startDate: Date, endDate: Date): string {
    const timeDifference: number = endDate.getTime() - startDate.getTime(); // Calculate time difference in milliseconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  
    let targetDate: typeData;
    let numDate: number;
  
    if (days > 30) {
      targetDate = "month";
      numDate = Math.floor(days / 30);
    } else if (days > 7) {
      targetDate = "week";
      numDate = Math.floor(days / 7);
    } else if (days > 1) {
      targetDate = "day";
      numDate = days;
    } else {
      targetDate = "hour";
      numDate = Math.floor(timeDifference / (1000 * 60 * 60)); // Convert milliseconds to hours
    }
  
    const formatter = new Intl.RelativeTimeFormat("en-US");
    const formattedDate = formatter.format(-numDate, targetDate);
     
    return formattedDate;
  }