function formatDuration (seconds) {
    if (seconds < 1) {
      return 'now';
    }
  
    const timeUnits = [{
      single: 'year',
      multiple: 'years',
      seconds: 31536000,
    }, {
      single: 'day',
      multiple: 'days',
      seconds: 86400,
    }, {
      single: 'hour',
      multiple: 'hours',
      seconds: 3600,
    }, {
      single: 'minute',
      multiple: 'minutes',
      seconds: 60,
    }, {
      single: 'second',
      multiple: 'seconds',
      seconds: 1,
    }];
    
    return timeUnits.map((unit, index) => {
      if (seconds >= unit.seconds) {
        const unitCount = Math.floor(seconds / unit.seconds);
        const unitName = unitCount > 1 ? unit.multiple : unit.single;
        //console.log(unitName)
        seconds -= unitCount * unit.seconds;
        const isLastUnit = index === timeUnits.length || !seconds;
        const isPreLastUnit = timeUnits.length - index === 1 || 
                              seconds < timeUnits[timeUnits.length - 2].seconds ||
                              seconds % timeUnits[index + 1].seconds === 0;
        let separator;
        if (isLastUnit) {
          separator = '';
        } else if (isPreLastUnit) {
          separator = ' and ';
        } else {
          separator = ', ';
        }
        
        return `${unitCount} ${unitName}${separator}`
      }
      
      return '';
    }).join('');
  }