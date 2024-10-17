export const jsonLdData = {
	en: {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Lisboa em Tango",
		"url": "https://lisboaemtango.pt/",
		"logo": "https://lisboaemtango.pt/favicon-192.png",
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+351 916 192 919",
			"contactType": "Customer Service",
			"areaServed": "PT",
			"availableLanguage": ["Portuguese", "English"]
		},
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Rua de Santa Apolónia 59",
			"addressLocality": "Lisboa",
			"postalCode": "1100-468",
			"addressCountry": "PT"
		},
		"email": "lisboaemtango@gmail.com",
		"description": "Argentinian Tango School",
		"sameAs": [
			"https://www.instagram.com/lisboaemtango/",
			"https://www.facebook.com/lisboaemtango",
			"https://www.youtube.com/channel/UCqxHTF_eaM3oP4-Gmlji-kw"
		],
		"foundingDate": "2004-10-01",
		"keywords": "Tango Lessons, Workshops, Milonga, Argentinian Tango, Lisbon",
		"event": {
			"@context": "https://schema.org",
			"@type": "DanceEvent",
			"name": "Portugal em Tango",
			"startDate": "2024-12-06T18:00:00",
			"endDate": "2024-12-09T00:00:00",
			"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
			"eventStatus": "https://schema.org/EventScheduled",
			"organizer": {
				"@type": "Organization",
				"name": "Lisboa em Tango",
				"url": "https://lisboaemtango.pt/"
			},
			"performer": {
				"@type": "PerformingGroup",
				"name": "The best tango teachers and DJ's in Lisbon"
			},
			"description": "Join us for Portugal em Tango, a 3-day event filled with workshops, performances, and milongas.",
			"location": {
				"@type": "Place",
				"name": "Clube Ferroviário",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Rua de Santa Apolónia 59",
					"addressLocality": "Lisboa",
					"postalCode": "1100-468",
					"addressCountry": "PT"
				}
			},
			"image": "https://lisboaemtango.pt/static/media/flyer1.ad4b0701eddb0524ed2c.webp",
			"offers": {
				"@type": "Offer",
				"url": "mailto:lisboaemtango@gmail.com",
				"price": "60",
				"priceCurrency": "EUR",
				"availability": "https://schema.org/InStock",
				"validFrom": "2024-10-01T00:00:00"
			},
			"duration": "P3D"
		}
	},
	pt: {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Lisboa em Tango",
		"url": "https://lisboaemtango.pt/",
		"logo": "https://lisboaemtango.pt/favicon-192.png",
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+351 916 192 919",
			"contactType": "Atendimento ao Cliente",
			"areaServed": "PT",
			"availableLanguage": ["Português", "Inglês"]
		},
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Rua de Santa Apolónia 59",
			"addressLocality": "Lisboa",
			"postalCode": "1100-468",
			"addressCountry": "PT"
		},
		"email": "lisboaemtango@gmail.com",
		"description": "Escola de Tango Argentino",
		"sameAs": [
			"https://www.instagram.com/lisboaemtango/",
			"https://www.facebook.com/lisboaemtango",
			"https://www.youtube.com/channel/UCqxHTF_eaM3oP4-Gmlji-kw"
		],
		"foundingDate": "2004-10-01",
		"keywords": "Aulas de Tango, Workshops, Milonga, Tango Argentino, Lisboa",
		"event": {
			"@context": "https://schema.org",
			"@type": "DanceEvent",
			"name": "Portugal em Tango",
			"startDate": "2024-12-06T18:00:00",
			"endDate": "2024-12-09T00:00:00",
			"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
			"eventStatus": "https://schema.org/EventScheduled",
			"organizer": {
				"@type": "Organization",
				"name": "Lisboa em Tango",
				"url": "https://lisboaemtango.pt/"
			},
			"performer": {
				"@type": "PerformingGroup",
				"name": "Os melhores professores e DJ's de Lisboa"
			},
			"description": "Junte-se a nós para o Portugal em Tango, um evento de 3 dias repleto de workshops, performances e milongas.",
			"location": {
				"@type": "Place",
				"name": "Clube Ferroviário",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Rua de Santa Apolónia 59",
					"addressLocality": "Lisboa",
					"postalCode": "1100-468",
					"addressCountry": "PT"
				}
			},
			"image": "https://lisboaemtango.pt/static/media/flyer1.ad4b0701eddb0524ed2c.webp",
			"offers": {
				"@type": "Offer",
				"url": "mailto:lisboaemtango@gmail.com",
				"price": "60",
				"priceCurrency": "EUR",
				"availability": "https://schema.org/InStock",
				"validFrom": "2024-10-01T00:00:00"
			},
			"duration": "P3D"
		}
	}
};
