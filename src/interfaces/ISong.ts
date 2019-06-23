export default interface ISong {
	title: string;
	contributingArtist: string[];
	featuredArtist?: string[];
	album: string;
	albumArt?: string;
	year: number;
	trackNumber: number;
};
