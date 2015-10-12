/**
 * Created by und on 11/27/13.
 */

var TreeWidget = function(areaManager, params) {
		Widget.call(this, areaManager);
	this.div.html('<h1>hello!</h1>'); // отнаследовавшись мы можем работать со свойством div, которое и является нашим виджетом
};

var YouTubeWidget = function(areaManager, params) {
	Widget.call(this,areaManager);
	this.div.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/krhD9rTJ9AU" frameborder="0" allowfullscreen></iframe>')
}
TreeWidget.prototype = new Widget();
TreeWidget.constructor = TreeWidget;

YouTubeWidget.prototype = new Widget();
YouTubeWidget.constructor = new Widget();
TreeWidget.prototype.afterPlacement = function() { // этот метод будет вызван после того, как див попадёт в DOM-дерево
	this.div.children('h1').click(function() {
		this.innerHTML = 'bye!';
	});
};

YouTubeWidget.prototype.recalculatePosition = function() {
	Widget.prototype.recalculatePosition.apply(this, arguments);
	console.log(YouTubeWidget.recalculatePosition);
};

TreeWidget._name = 'Пример виджета'; // имя виджета
TreeWidget.prototype._name = 'Пример виджета'; // имя виджета
YouTubeWidget._name= 'YouTube';
YouTubeWidget.prototype._name= 'YouTube';

Window.registerWidget(TreeWidget); // регистрация виджета для всех окон
Window.registerWidget(YouTubeWidget);