import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

var application, title, description_meta, author_meta, keywords_meta, twitter_card_meta, twitter_url_meta;
var st_published_meta, og_image_meta, og_title_meta, og_site_name_meta;

module('Acceptance | seo meta tags', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting home, about-us and checking title and meta tags', function(assert) {
  assert.expect(11);

  visit('/');
  //Waiting for title and meta tags to be resolved in a 2 seconds window
  Ember.run.later((function() {}), 2000);
  andThen(function() {
    title = document.title;
    description_meta = document.querySelector('meta[name="description"]').getAttribute('content');
    keywords_meta = document.querySelector('meta[name="keywords"]').getAttribute('content');
    twitter_url_meta = document.querySelector('meta[name="twitter:url"]').getAttribute('content');
    st_published_meta = document.querySelector('meta[property="st:published_at"]').getAttribute('content');
    assert.equal(title, "Ember Seo Meta tags");
    assert.equal(description_meta, "Home Page of ember seo meta tags");
    assert.equal(keywords_meta, "home, ember, seo");
    assert.equal(twitter_url_meta, "http://www.yourdomain.com");
    assert.equal(st_published_meta, "2012-08-05T05:33:00-0700");
  });

  click('.about-us');
  //Waiting for title and meta tags to be resolved in a 2 seconds window
  Ember.run.later((function() {}), 2000);
  andThen(function(){
    title = document.title;
    description_meta = document.querySelector('meta[name="description"]').getAttribute('content');
    author_meta = document.querySelector('meta[name="author"]').getAttribute('content');
    og_title_meta = document.querySelector('meta[property="og:title"]').getAttribute('content');
    og_site_name_meta = document.querySelector('meta[property="og:site_name"]').getAttribute('content');
    assert.equal(title, "About Us Page");
    assert.equal(description_meta, "Get to know about us through this page ;)");
    assert.equal(author_meta, "Some crazy guitarist");
    assert.equal(og_title_meta, "Seo Meta | About Us");
    assert.equal(og_site_name_meta, "Ember seo meta tags");
  });

  //On going back title should change
  click('.back-home');
  //Waiting for title and meta tags to be resolved in a 2 seconds window
  Ember.run.later((function() {}), 2000);
  andThen(function(){
    title = document.title;
    assert.equal(title, "Ember Seo Meta tags");
  });
});

test('visiting products page', function(assert){
  assert.expect(8);
  visit('/products/1');
  //Waiting for title and meta tags to be resolved in a 2 seconds window
  Ember.run.later((function() {}), 2000);
  andThen(function() {
    title = document.title;
    description_meta = document.querySelector('meta[name="description"]').getAttribute('content');
    keywords_meta = document.querySelector('meta[name="keywords"]').getAttribute('content');
    twitter_card_meta = document.querySelector('meta[name="twitter:card"]').getAttribute('content');
    og_image_meta = document.querySelector('meta[property="og:image"]').getAttribute('content');
    assert.equal(title, "Macbook Pro");
    assert.equal(keywords_meta, "love, uncharted");
    assert.equal(description_meta, "Buy from our large range of products including macbook, iphone, ps4 and it's games.");
    assert.equal(twitter_card_meta, "Find best deals on apple products here.");
    assert.equal(og_image_meta, "http://www.yoursite.com/static/thumbnail.jpg");
  });

  //check title change on changing products
  click('.p-two');
  Ember.run.later((function() {}), 2000);
  andThen(function(){
    title = document.title;
    assert.equal(title, "Apple iphone 6");
  });

  click('.p-three');
  Ember.run.later((function() {}), 2000);
  andThen(function(){
    title = document.title;
    assert.equal(title, "Sony PS4");
  });

  click('.p-four');
  Ember.run.later((function() {}), 2000);
  andThen(function(){
    title = document.title;
    assert.equal(title, "Uncharted");
  });
});
