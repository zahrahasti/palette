export function formatTimeDifference(startDate, endDate) {
    const timeDifference = endDate - startDate; // Calculate time difference in milliseconds
    const diHours = Math.floor(timeDifference / (1000 * 60 * 60));
  
    let targetDate, numDate;
  
    if (diHours % 24 === 0) {
      targetDate = "day";
      numDate = diHours;
    } else if (diHours % 7 === 0) {
      targetDate = "week";
      numDate = Math.floor(diHours / 168);
    } else if (diHours % 30 === 0) {
      targetDate = "month";
      numDate = Math.floor(diHours / 720);
    } else {
      targetDate = "hour";
      numDate = diHours;
    }
  
    const formatter = new Intl.RelativeTimeFormat("en-US");
    const formattedDate = formatter.format(-numDate, targetDate);
    return formattedDate.split("").slice(0,-4).join("")
   }