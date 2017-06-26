import Ember from 'ember';

export function initialize(container,app){};

var get, set;

get = Ember.get;
set = Ember.set;

// Set title and metaTags properties in any route to update page title and meta tags respectively.
Ember.Route.reopen({
  tagsData: Ember.inject.service('tags-data'),
  title: null,
  metaTags: null,
  titleObserver: Ember.observer('title', function(){
    var changedTitle = get(this, 'title');
    return this.setTitle(changedTitle);
  }),
  tagsObserver: Ember.observer('metaTags', function(){
    var changedTags = get(this, 'metaTags');
    return this.parseTags(changedTags, false);
  }),
  setTitle: function(title) {
    return window.document.title = title;
  },
  parseTags: function(tags, resetTags) {
    var that;
    that = this;
    if(!tags){
      return
    }
    return tags.forEach(function(tag) {
      var content, name;
      if(resetTags){
        content = '';
      }
      else{
        content = get(tag, 'tagContent');
      }
      name = get(tag, 'tagName');
      return that.setMetaTag(name, content);
    });
  },
  getTagAttribute: function(name){
    var openGraph, swiftType;
    openGraph = /^og:/;
    swiftType = /^st:/; //https://swiftype.com/documentation/meta_tags
    if( openGraph.test(name) || swiftType.test(name) ){
      return 'property';
    }
    return 'name';
  },
  setMetaTag: function(name, content) {
    var attr;
    attr = this.getTagAttribute(name);
    if (Ember.$(`meta[${attr}='${name}']`).length > 0) {
      return Ember.$(`meta[${attr}='${name}']`).attr('content', content);
    } else {
      return Ember.$('head').append(`<meta ${attr}='${name}' content='${content}'>`);
    }
  },
  initRouteData: function(type, value){
    var oldValue;
    oldValue = get(this, type);
    if(value){
      set(this, type, value);
      this.notifyPropertyChange(type);
    }
    else if( !Ember.isBlank(oldValue) ){
      // If title or metaTags are defined in route as properties, then they will be picked up from here.
      this.notifyPropertyChange(type);
    }
    else if ( Ember.isEqual(type, 'title') ){
      // Set default title as routeName if no title is provided. Meta tags will remain null if not provided.
      value = get(this, 'routeName');
      set(this, type,  value);
    }
  },
  readServiceData: function(){
    // Seed title and Meta tags on load
    var routeName, seedTitle, seedMetaTags;
    routeName = get(this, 'routeName');
    seedTitle = get(this, `tagsData.${routeName}.title`);
    seedMetaTags = get(this, `tagsData.${routeName}.metaTags`);
    this.initRouteData('title', seedTitle);
    this.initRouteData('metaTags', seedMetaTags);
  },
  clearTags: function(){
    var tags = get(this, 'metaTags');
    return this.parseTags(tags, true);
  },
  enter: function(){
    this._super();
    this.readServiceData();
  },
  exit: function(){
    this._super();
    this.clearTags();
  }
});

export default {
    name: 'seo',
    initialize: initialize
};
