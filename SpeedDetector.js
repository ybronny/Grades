function demeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsPerKm = 1;
  
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const kmOverLimit = speed - speedLimit;
      const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint) * demeritPointsPerKm;
      return (`You've been fined ${demeritPoints} demerit point(s).`);
    }
  }
        

     

    
    


console.log(demeritPoints())