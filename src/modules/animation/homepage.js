import { Scrollmap, $ } from '../../core/index';

class Homepage {
  	constructor() {
  		Scrollmap.add('.collection.list.alternating .item', {
  			onTriggerIn() {
				$(this.element).addClass("visible");
			},
			surfaceVisible: 0.5
  		});
  	}
}

export default Homepage;
