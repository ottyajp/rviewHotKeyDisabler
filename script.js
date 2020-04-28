window.document.onkeydown = (e) => {
  if (
    (e.key === 'r' && e.ctrlKey) || e.key === 'F5' // Ctrl+R, F5
    || (e.key === 's' && e.ctrlKey) // Ctrl+S
  ) {
    return false;
  }
}

// Application key
window.oncontextmenu = () => {
  return false;
}
