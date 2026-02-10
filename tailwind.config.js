module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  
  theme: {
    extend: {
      colors: {
        page: 'var(--page-bg)',
        section: 'var(--section-bg)',
        card: 'var(--card-bg)',
        borderc: 'var(--border)',
        primary: 'var(--primary)',
        primaryh: 'var(--primary-hover)',
      }
    }
  }
}
