/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
			backgroundImage: {
        'law-pattern': "url('/page.jpg')",
      },
      colors: {
        'custom': '#234665'
      }
		}
  },
  plugins: []
}
