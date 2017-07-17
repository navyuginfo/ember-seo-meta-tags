import Ember from 'ember';

export default Ember.Mixin.create({
  // Mixin which creates an array of all meta tags(which have both name and content set) on current route.
  setupController: function(controller,model){
    this._super(controller,model);
    var meta_arr, hash, meta_name, meta_content;
    meta_arr = Ember.makeArray();
    $('meta').each(function(index, value){
      meta_name = value.getAttribute('name') || value.getAttribute('property');
      meta_content = value.getAttribute('content');
      if(meta_name && meta_content && meta_name !== "dummy/config/environment"){
        hash = {};
        hash['key'] = meta_name;
        hash['value'] = meta_content;
        meta_arr.push(hash);
      }
    });
    controller.controllerFor('application').set('meta_arr', meta_arr);
  }
});
