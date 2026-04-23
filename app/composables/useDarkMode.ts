export function useDarkMode() {
  const isDark = useState('darkMode', () => false)

  if (import.meta.client) {
    onMounted(() => {
      isDark.value = localStorage.getItem('darkMode') === '1'
    })
  }

  function toggle() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('darkMode', isDark.value ? '1' : '0')
  }

  return { isDark, toggle }
}
