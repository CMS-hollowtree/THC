export class PodcastClass {
	title: string;
    pubDate: string;
    description: string;
    coverImage: string;
    link: string;
    mp3: string;
    length: number;
    duration: number;
    userData: {
    	downloaded: boolean;
    	favorite: boolean;
    	listened: boolean;
    	listening: boolean;
    	lastPosition: number;
    	filePath: string;
    };
	constructor(title, pubDate, description, coverImage, link, mp3, length, duration, userData) {
		this.title = title;
		this.pubDate = pubDate;
		this.description = description;
		this.coverImage = coverImage;
		this.link = link;
		this.mp3 = mp3;
		this.length = length;
		this.duration = duration;
		this.userData = userData;
	
	}
}