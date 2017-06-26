# Ember-seo-meta-tags

This Ember-CLI addon is used to add/change meta-tags and title on different pages of your single page application and thus make your website SEO friendly.

## Installation

* `ember install ember-seo-meta-tags`

### To make it work follow the given steps
1. Inside any route add the title and metaTags properties and it will be reflected in your single page application accordingly. you can even set these properties dynamically and this addon will pick those up for you.
1. If title and meta tags are going to be dynamically set, then we advise you to set these in the **afterModel** hook in your route. If you want to set it later then you can use a service like **prerender.io** to make sure your meta tags and title are picked up by crawlers.
1. If you want a single place where you can list all title and metaTags information related to all your routes then
   * Open a service named ``` tags-data ``` inside your hosting application. This service will be auto generated when you install this addon.
   * Add data in service in the format given below

```javascript
import Ember from 'ember';

export default Ember.Service.extend({
// Basic convention that you must follow
// routeName must be as specified in router.coffee file  
'routeName': {
    title: 'Your title goes here',
    metaTags: [
      {
        tagName: 'description',
        tagContent: 'Text for description meta tag goes here'
      }, {
        tagName: 'keywords',
        tagContent: 'Keyword 1, keyword 2, keyword 3'
      }
      // You may add as many meta tags as you want
    ]
  }
});
```  

### Examples

#### _Usage inside routes_

```javascript
// hostingApp/routes/home
export default Ember.route.extend({
 title: 'Home Page',
 metaTags: [
      {
        tagName: 'description',
        tagContent: 'Contact us to know more deals'
      }, {
        tagName: 'keywords',
        tagContent: 'choose us, '
      }
    ],
  model: function(){
   // Code for your model hook goes here
  }
});
```

#### _Usage inside routes with dynamic data_

```javascript
// hostingApp/routes/home
export default Ember.route.extend({
 model: function(){
  //get your title and meta tags data here
 },
 afterModel: function(model){
  //set the title and meta tags from model data
  this.set('title', model.data);
  this.set('metaTags', model.data);
 }
})
```

#### _Usage with service_

```javascript
export default Ember.Service.extend({
  'contact-us': {
    title: 'Contact Us',
    metaTags: [
      {
        tagName: "description",
        tagContent: "Contact us to know more deals"
      }, {
        tagName: "keywords",
        tagContent: "contact us, more-deals"
      },{
        tagName: "og:title",
        tagContent: "Facebook Open Graph META Tags"
      }, {
        tagName: "viewport",
        tagContent: "width=device-width, initial-scale=1.0"
      }
    ]
  },
  'about-us': {
    title: 'About Us',
    metaTags: [
      {
        tagName: "author",
        tagContent: "Some crazy guitarist"
      },{
        tagName: "twitter:card",
        tagContent: "summary"
      },{
        tagName: "twitter:url",
        tagContent: "http://www.yourdomain.com"
      },{
        tagName: "st:image",
        tagContent: "http://www.yoursite.com/static/thumbnail.jpg"
      },{
        tagName: "st:published_at",
        tagContent: "2012-08-05T05:33:00-0700"
      }
    ]
  },
});
```
