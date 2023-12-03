
export default function FormatDate  (timestamp)  {

    const now = new Date();
    const postedDate = new Date(timestamp);
    const timeDifference = now - postedDate;

    const seconds = timeDifference / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    
    if (seconds < 60) {
      return `${Math.floor(seconds)} seconds ago`;
    } else if (minutes < 60) {
      return `${Math.floor(minutes)} minutes ago`;
    } else if (hours < 24) {
      return `${Math.floor(hours)} hours ago`;
    } else {
      return `${Math.floor(days)} days ago`;
    }
  }





