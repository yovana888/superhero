export interface RequestMarvelHeroI {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	data: MarvelDataI;
	etag?: string;
}

export interface MarvelDataI {
	count: number;
	limit: number;
	offset: number;
	results: SuperHeroI[] | [];
	total: number;
}

export interface SuperHeroI {
	id: number;
	name: string;
	description: string;
	modified: Date;
	resourceURI: string;
	urls: [
		{
			type: string;
			url: string;
		}
	];
	thumbnail: {
		path: string;
		extension: string;
	};
	comics: {
		available: number;
		returned: number;
		collectionURI: string;
		items: [
			{
				resourceURI: string;
				name: string;
			}
		];
	};
	stories: {
		available: number;
		returned: number;
		collectionURI: string;
		items: [
			{
				resourceURI: string;
				name: string;
				type: string;
			}
		];
	};
	events: {
		available: number;
		returned: number;
		collectionURI: string;
		items: [
			{
				resourceURI: string;
				name: string;
			}
		];
	};
	series: {
		available: number;
		returned: number;
		collectionURI: string;
		items: [
			{
				resourceURI: string;
				name: string;
			}
		];
	};
}
