import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://risesia.github.io',
	base: '/belajarweb',
	integrations: [
		starlight({
			title: 'Belajar Web Dev',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Panduan Pembelajaran',
					link: './panduan'
				},
				{
					label: 'Materi & Latihan',
					items: [
						{
							label: 'Pendahuluan',
							link: './pendahuluan'
						},
						{
							label: 'Pengenalan HTML',
							link: './pengenalan-html'
						},
						{
							label: 'Format Teks HTML',
							link: './format-html'
						},
						{
							label: 'List pada HTML',
							link: './list-html'
						},
						{
							label: 'List kombinasi',
							link: './list-kombinasi-html'
						}
					]
				}
			],
		}),
	],
});
