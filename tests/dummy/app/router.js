import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path:'/'});
  this.route('about-us', {path: 'about_us'});
  this.route('products',{path: 'products/:pid'});
});

export default Router;
