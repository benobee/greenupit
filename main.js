import { App_Build } from './src/core';
import { Homepage } from './src/modules/animation/index';

//build the site object
class Site_Build {
	constructor() {
		this.app = new App_Build();
		this.isMobile = this.app.isMobile();
		this.animation = {
			homepage: new Homepage()
		}

		console.log(this);
	}
}

const Site = new Site_Build();
