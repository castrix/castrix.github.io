export const focusToCommand = () => {
  const command = document.getElementById('command')
  if (!command) return;
  command.getElementsByTagName('input')[0].focus()
}