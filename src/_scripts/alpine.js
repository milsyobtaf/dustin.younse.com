import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"

Alpine.plugin(collapse)

window.Alpine = Alpine

// Start Alpine when the page is ready.
window.addEventListener("DOMContentLoaded", () => {
  Alpine.start()
})

// Basic Store Example in Alpine.
window.addEventListener("alpine:initializing", () => {
  Alpine.store("nav", {
    isOpen: false,
    close() {
      return (this.isOpen = false)
    },
    open() {
      return (this.isOpen = true)
    },
    toggle() {
      return (this.isOpen = !this.isOpen)
    },
  })
})
