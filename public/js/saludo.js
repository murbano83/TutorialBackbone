$(document).ready(function(){

	var Saludo = Backbone.Model.extend({
		defaults: function(){
			return {
				title: "default"
			};
		}
	});

	var saludo = new Saludo({
		title: "¡Hola Mundo!",
		message: "Aprendiendo Backbone.js"
	});

	var SaludoView = Backbone.View.extend({

		tagName: "div",

		template: $("#saludo-template").html(),

		render: function(){
			var saludo_template = _.template(this.template);
			this.$el.html(saludo_template(this.model.attributes));
			return this;
		}

	});

	var saludoView = new SaludoView({
		model: saludo
	});

	$('#saludo').html(saludoView.render().el);

})