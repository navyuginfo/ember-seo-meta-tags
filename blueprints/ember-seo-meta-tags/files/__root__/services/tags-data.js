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

  'application': {
    title: "My App",
    metaTags: [
      {
        tagName: "description",
        tagContent: "Text for description meta tag goes here"
      }, {
        tagName: "keywords",
        tagContent: "Keyword 1, keyword 2, keyword 3"
      }
    ]
  },

  // Some Examples are given below :

  // 'contact-us': {
  //   title: "Contact Us",
  //   metaTags: [
      // {
      //   tagName: "description",
      //   tagContent: "Contact us to know more deals"
      // }, {
      //   tagName: "keywords",
      //   tagContent: "contact us, more-deals"
      // },{
      //   tagName: "og:title",
      //   tagContent: "Facebook Open Graph META Tags"
      // },{
      //   tagName: "og:description",
      //   tagContent: "Facebook's Open Graph protocol allows for web developers to turn their websites into Facebook "graph" objects,
      //                 allowing a certain level of customization over how information is carried over from a non-Facebook website to
      //                 Facebook when a page is 'recommended', 'liked', or just generally shared."
      // },{
      //   tagName: "og:image",
      //   tagContent: "http://www.yourdomain.com /image-name.jpg”
      // }
  //   ]
  // },
  // 'about-us': {
  //   title: "About Us",
  //   metaTags: [
  //     {
  //       tagName: "author",
  //       tagContent: "Some crazy guitarist"
  //     }, {
  //       tagName: "viewport",
  //       tagContent: "width=device-width, initial-scale=1.0"
  //     },{
  //       tagName: "twitter:card",
  //       tagContent: "summary"
  //     },{
  //       tagName: "twitter:url",
  //       tagContent: "http://www.yourdomain.com"
  //     },{
  //       tagName: "st:image",
  //       tagContent: "http://www.yoursite.com/static/thumbnail.jpg"
  //     },{
  //       tagName: "st:published_at",
  //       tagContent: "2012-08-05T05:33:00-0700"
  //     }
  //   ]
  // },

  // Read more about open graph here http://ogp.me/
  // Read more about swift type here https://swiftype.com/documentation/meta_tags

});
