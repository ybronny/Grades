function inputgrades(marks) {
    if (marks > 100 & marks < 0 ){
    return "invalid input";
}

else if (marks > 79) {
  return "A";
  }
  
  else if (marks > 60 & marks < 78) {
    return"B";
  }

  else if (marks > 49 & marks < 59) {
    return "C";
  }

  else if(marks > 40 & marks < 49) {
    return "D";
  }

   else if (marks < 40) {
    return "E";
   }

  }



