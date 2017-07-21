import Ember from 'ember';

export default Ember.Service.extend({
  // Basic convention that you must follow
  // routeName must be as specified in router.coffee file
  // 'routeName': {
  //   title: "Your title goes here",
  //   metaTags: [
  //     {
  //       tagName: "description",
  //       tagContent: "Text for description meta tag goes here"
  //     }, {
  //       tagName: "keywords",
  //       tagContent: "Keyword 1, keyword 2, keyword 3"
  //     }
  //     // You may add as many meta tags as you want
  //   ]
  // },

  'home': {
    title: "Ember Seo Meta tags",
    metaTags: [
      {
        tagName: "description",
        tagContent: "Home Page of ember seo meta tags"
      }, {
        tagName: "keywords",
        tagContent: "home, ember, seo"
      },{
        tagName: "twitter:url",
        tagContent: "http://www.yourdomain.com"
      },{
        tagName: "st:published_at",
        tagContent: "2012-08-05T05:33:00-0700"
      }
    ]
  },
  'about-us': {
    title: "About Us Page",
    metaTags: [
      {
        tagName: "author",
        tagContent: "Some crazy guitarist"
      }, {
        tagName: "description",
        tagContent: "Get to know about us through this page ;)"
      },{
        tagName: "og:title",
        tagContent: "Seo Meta | About Us"
      },{
        tagName: "og:site_name",
        tagContent: "Ember seo meta tags"
      }
    ]
  },
  'products': {
    title: "Products Page",
    metaTags: [
      {
        tagName: "keywords",
        tagContent: "love, uncharted"
      }, {
        tagName: "description",
        tagContent: "Buy from our large range of products including macbook, iphone, ps4 and it's games."
      },{
        tagName: "twitter:card",
        tagContent: "Find best deals on apple products here."
      },{
        tagName: "og:image",
        tagContent: "http://www.yoursite.com/static/thumbnail.jpg"
      }
    ]
  }

  // Read more about open graph here http://ogp.me/
  // Read more about swift type here https://swiftype.com/documentation/meta_tags

});
