const parseTimer = (value, isMs = false) => {
  if (isMs) {
    value = Math.floor(value / 1000);
  }

  const minutes = Math.floor(value / 60);
  const seconds = value % 60;

  if (minutes > 0) {
    return `${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;
  }

  return `${seconds}s`;
}