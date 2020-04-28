window.document.onkeydown = (e) => {
  if (
    (e.key === 'r' && e.ctrlKey) || e.key === 'F5' // Ctrl+R, F5
    || (e.key === 's' && e.ctrlKey) // Ctrl+S
    || e.key === 'F10' // F10
  ) {
    return false;
  }
}

// Application key
window.oncontextmenu = () => {
  return false;
}
