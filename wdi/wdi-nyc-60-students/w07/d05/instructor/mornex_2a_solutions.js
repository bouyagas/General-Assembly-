//Paris Solution

function angleBetween(hours, minute) {
    const hourAngle = parseFloat(360.0/12.0 * hour + (360.0/12.0)/60.0 * minute);
    const minuteAngle = parseFloat(360.0/60 * minute);
    return [Math.abs(hourAngle - minuteAngle), 360 - Math.abs(hourAngle - minuteAngle)];
}

