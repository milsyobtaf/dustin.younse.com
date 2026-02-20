
const theme = (() => {
  const localStorageTheme = localStorage?.getItem('theme') ?? ''
  if (['dark', 'light'].includes(localStorageTheme)) {
    return localStorageTheme
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
})()

if (theme === 'light') {
  document.documentElement.classList.remove('dark')
} else {
  document.documentElement.classList.add('dark')
}

window.localStorage.setItem('theme', theme)

document.getElementById('themeToggle')?.addEventListener('click', handleToggleClick)

---

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

---

<div class="h-screen flex justify-center items-center bg-gray-50">
    <div class="w-full sm:w-8/12 md:w-6/12 p-4">
        <div class="p-4 rounded-lg shadow bg-white dark:bg-gray-700">
            <h1 class="font-semibold text-lg dark:text-gray-200">
                Card Heading
            </h1>
            <p class="mt-2 dark:text-gray-200">
                This is the content of the card
            </p>
            <button
                x-data="{
                    toggle: () => {
                        if (localStorage.theme === 'dark') {
                            localStorage.theme = 'light';
                            document.documentElement.classList.remove('dark');
                        } else {
                            localStorage.theme = 'dark';
                            document.documentElement.classList.add('dark');
                        }
                    },
                }"
                class="mt-2 px-3 py-2 bg-pink-400 rounded-lg font-semibold text-white focus:outline-none"
                @click="toggle"
            >
                Toggle Modes
            </button>
        </div>
    </div>
</div>